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
    trending: true
  },
  {
    title: "Customer Service",
    icon: HeadphonesIcon,
    jobs: "200+ jobs", 
    description: "Call center, support, virtual assistance",
    trending: true
  },
  {
    title: "Creative & Design",
    icon: PenTool,
    jobs: "80+ jobs",
    description: "Graphic design, content creation, marketing",
    trending: false
  },
  {
    title: "Sales & Marketing", 
    icon: Users,
    jobs: "120+ jobs",
    description: "Digital marketing, sales, business development",
    trending: true
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    jobs: "60+ jobs",
    description: "Data entry, research, market analysis", 
    trending: false
  },
  {
    title: "Media & Content",
    icon: Camera,
    jobs: "45+ jobs",
    description: "Photography, video editing, writing",
    trending: false
  },
  {
    title: "Administrative",
    icon: Briefcase,
    jobs: "100+ jobs",
    description: "Virtual assistant, project management",
    trending: false
  },
  {
    title: "Logistics & Delivery", 
    icon: Truck,
    jobs: "75+ jobs",
    description: "Delivery services, supply chain, coordination",
    trending: true
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
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {category.jobs}
                  </p>
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