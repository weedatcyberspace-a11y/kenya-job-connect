import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Code, 
  PenTool, 
  HeadphonesIcon, 
  Users, 
  BarChart3,
  Camera,
  Truck
} from "lucide-react";

const jobCategories = [
  {
    title: "Technology & IT",
    icon: Code,
    jobs: "150+ jobs",
    description: "Software development, web design, data analysis",
    trending: true,
    details: {
      roles: ["Software Developer", "Web Designer", "Data Analyst", "Mobile App Developer", "System Administrator", "Cybersecurity Specialist"],
      skills: ["JavaScript, Python, React", "HTML/CSS, UI/UX Design", "SQL, Excel, Tableau", "Android/iOS Development"],
      salaryRange: "KSh 50,000 - 200,000",
      remote: "95% remote opportunities"
    }
  },
  {
    title: "Customer Service",
    icon: HeadphonesIcon,
    jobs: "200+ jobs", 
    description: "Call center, support, virtual assistance",
    trending: true,
    details: {
      roles: ["Customer Support Representative", "Virtual Assistant", "Call Center Agent", "Live Chat Support", "Help Desk Specialist"],
      skills: ["Excellent Communication", "Problem Solving", "Multi-tasking", "CRM Software", "English Fluency"],
      salaryRange: "KSh 25,000 - 80,000",
      remote: "80% remote opportunities"
    }
  },
  {
    title: "Creative & Design",
    icon: PenTool,
    jobs: "80+ jobs",
    description: "Graphic design, content creation, marketing",
    trending: false,
    details: {
      roles: ["Graphic Designer", "Content Creator", "Social Media Manager", "Brand Designer", "Video Editor", "Copywriter"],
      skills: ["Adobe Creative Suite", "Canva, Figma", "Social Media Platforms", "Content Strategy", "Photography"],
      salaryRange: "KSh 30,000 - 120,000",
      remote: "70% remote opportunities"
    }
  },
  {
    title: "Sales & Marketing", 
    icon: Users,
    jobs: "120+ jobs",
    description: "Digital marketing, sales, business development",
    trending: true,
    details: {
      roles: ["Digital Marketing Specialist", "Sales Representative", "Business Development Manager", "SEO Specialist", "Social Media Marketer"],
      skills: ["Digital Marketing", "Lead Generation", "CRM Management", "Google Analytics", "Sales Techniques"],
      salaryRange: "KSh 40,000 - 150,000",
      remote: "85% remote opportunities"
    }
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    jobs: "60+ jobs",
    description: "Data entry, research, market analysis", 
    trending: false,
    details: {
      roles: ["Data Entry Specialist", "Research Analyst", "Market Research Assistant", "Data Processor", "Survey Coordinator"],
      skills: ["Excel Proficiency", "Data Analysis", "Research Methods", "Attention to Detail", "Statistical Software"],
      salaryRange: "KSh 20,000 - 90,000",
      remote: "90% remote opportunities"
    }
  },
  {
    title: "Media & Content",
    icon: Camera,
    jobs: "45+ jobs",
    description: "Photography, video editing, writing",
    trending: false,
    details: {
      roles: ["Content Writer", "Video Editor", "Photographer", "Blog Writer", "Social Media Content Creator", "Journalist"],
      skills: ["Writing & Editing", "Video Production", "Photography", "Content Management", "SEO Writing"],
      salaryRange: "KSh 25,000 - 100,000",
      remote: "75% remote opportunities"
    }
  },
  {
    title: "Administrative",
    icon: Briefcase,
    jobs: "100+ jobs",
    description: "Virtual assistant, project management",
    trending: false,
    details: {
      roles: ["Virtual Assistant", "Project Coordinator", "Administrative Assistant", "Office Manager", "Executive Assistant"],
      skills: ["Organization", "Time Management", "Microsoft Office", "Project Management Tools", "Communication"],
      salaryRange: "KSh 30,000 - 100,000",
      remote: "85% remote opportunities"
    }
  },
  {
    title: "Logistics & Delivery", 
    icon: Truck,
    jobs: "75+ jobs",
    description: "Delivery services, supply chain, coordination",
    trending: true,
    details: {
      roles: ["Delivery Driver", "Logistics Coordinator", "Supply Chain Assistant", "Warehouse Assistant", "Fleet Manager"],
      skills: ["Valid Driving License", "Route Planning", "Inventory Management", "Customer Service", "Physical Fitness"],
      salaryRange: "KSh 25,000 - 70,000",
      remote: "20% remote opportunities"
    }
  }
];

const JobCategories = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Job Categories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore opportunities across diverse industries tailored for Kenyan professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth hover:-translate-y-1 cursor-pointer group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    {category.trending && (
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        Trending
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-smooth">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">Popular Roles:</p>
                      <div className="flex flex-wrap gap-1">
                        {category.details.roles.slice(0, 3).map((role, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {role}
                          </Badge>
                        ))}
                        {category.details.roles.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.details.roles.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">Key Skills:</p>
                      <p className="text-xs text-muted-foreground">
                        {category.details.skills.slice(0, 2).join(", ")}
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs font-semibold text-primary">Salary Range</p>
                        <p className="text-xs text-muted-foreground">{category.details.salaryRange}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-primary">Remote</p>
                        <p className="text-xs text-muted-foreground">{category.details.remote}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-sm font-medium text-primary">
                      {category.jobs}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;