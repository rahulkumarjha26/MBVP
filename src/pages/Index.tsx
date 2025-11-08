import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import Mission from "@/components/home/Mission";
import Programs from "@/components/home/Programs";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ImpactStats />
        <Mission />
        <Programs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
