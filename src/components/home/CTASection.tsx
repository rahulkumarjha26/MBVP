import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-secondary to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Be Part of the Change
          </h2>
          
          <p
            className="text-lg md:text-xl text-accent mb-8"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Every rupee brings hope, education, and opportunity to Mithila communities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-6 shadow-button hover:scale-105 transition-transform"
            >
              <Link to="/donate">Donate Now</Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-accent hover:text-accent-foreground hover:border-accent font-bold text-lg px-10 py-6 bg-transparent"
            >
              <Link to="/our-work">Learn About Our Programs</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2">33+</div>
              <div className="text-sm opacity-90">Years of Trust</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-sm opacity-90">Villages Impacted</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2">8000+</div>
              <div className="text-sm opacity-90">Lives Transformed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
