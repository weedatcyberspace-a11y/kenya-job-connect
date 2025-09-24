import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Send, CheckCircle, Phone } from "lucide-react";

// Validation schema
const applicationSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"), 
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number too long"),
  location: z.string().trim().min(1, "Location is required").max(100, "Location too long"),
  category: z.string().min(1, "Please select a job category"),
  experience: z.string().min(1, "Please select your experience level"),
  skills: z.string().trim().min(10, "Please describe your skills (minimum 10 characters)").max(500, "Skills description too long"),
  expectations: z.string().trim().min(20, "Please provide more details about your expectations").max(1000, "Expectations too long")
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const jobCategories = [
  "Technology & IT",
  "Customer Service", 
  "Creative & Design",
  "Sales & Marketing",
  "Data & Analytics",
  "Media & Content",
  "Administrative",
  "Logistics & Delivery"
];

const experienceLevels = [
  "Entry Level (0-1 years)",
  "Junior (1-3 years)",
  "Mid-level (3-5 years)", 
  "Senior (5+ years)",
  "Expert/Lead (8+ years)"
];

const ApplicationForm = () => {
  const [formData, setFormData] = useState<Partial<ApplicationFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof ApplicationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = applicationSchema.parse(formData);
      
      // Create WhatsApp message
      const message = `New Job Application from Kenya Jobs Portal:

📋 *Application Details*
Name: ${validatedData.fullName}
Email: ${validatedData.email}
Phone: ${validatedData.phone}
Location: ${validatedData.location}

🎯 *Job Preferences*
Category: ${validatedData.category}
Experience Level: ${validatedData.experience}

💼 *Skills & Experience*
${validatedData.skills}

🎯 *Expectations*
${validatedData.expectations}

---
Please contact this applicant to discuss opportunities.`;

      // Encode message for WhatsApp URL
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/254114470612?text=${encodedMessage}`;
      
      // Open WhatsApp
      window.open(whatsappURL, '_blank');
      
      setSubmitted(true);
      toast({
        title: "Application Submitted Successfully!",
        description: "Your application has been sent via WhatsApp. We'll contact you soon.",
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Validation Error",
          description: firstError.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="application-form" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-accent border-2 bg-gradient-card shadow-hero">
            <CardContent className="text-center p-8">
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-accent mb-4">Application Submitted!</h3>
              <p className="text-muted-foreground mb-6">
                Your job application has been successfully submitted via WhatsApp. 
                Our team will review your application and contact you within 24-48 hours.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Application sent to +254 114 470 612</span>
              </div>
              <Button 
                onClick={() => setSubmitted(false)} 
                variant="outline" 
                className="mt-6"
              >
                Submit Another Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="application-form" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Apply for Your Dream Job</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill out the form below and we'll connect you with relevant opportunities via WhatsApp
          </p>
          <Badge variant="secondary" className="mt-4 bg-accent/10 text-accent">
            <Phone className="h-3 w-3 mr-1" />
            Instant WhatsApp Connection
          </Badge>
        </div>

        <Card className="max-w-2xl mx-auto shadow-card">
          <CardHeader>
            <CardTitle className="text-center">Job Application Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName || ''}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone || ''}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="0712345678"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location/County *</Label>
                  <Input
                    id="location"
                    value={formData.location || ''}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="e.g., Nairobi, Mombasa"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Job Category *</Label>
                  <Select onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="experience">Experience Level *</Label>
                  <Select onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="skills">Skills & Experience *</Label>
                <Textarea
                  id="skills"
                  value={formData.skills || ''}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  placeholder="Describe your key skills, experience, and qualifications..."
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="expectations">Job Expectations & Preferences *</Label>
                <Textarea
                  id="expectations"
                  value={formData.expectations || ''}
                  onChange={(e) => handleInputChange('expectations', e.target.value)}
                  placeholder="Tell us about your ideal job, salary expectations, work schedule preferences, etc."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 shadow-card" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Application
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ApplicationForm;