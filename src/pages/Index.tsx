import HeroSection from "@/components/HeroSection";
import JobCategories from "@/components/JobCategories";
import ApplicationForm from "@/components/ApplicationForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <JobCategories />
      <ApplicationForm />
    </main>
  );
};

export default Index;