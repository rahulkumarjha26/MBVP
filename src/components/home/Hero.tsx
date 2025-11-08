import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-women-empowerment.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(45, 106, 79, 0.7), rgba(45, 106, 79, 0.4)), url(${heroImage})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container px-4 text-center text-white max-w-5xl">
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in-up"
          style={{
            fontFamily: "Poppins, sans-serif",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Empowering Mithila, One Community at a Time
        </h1>

        <p
          className="text-lg md:text-xl lg:text-2xl text-accent mb-8 max-w-3xl mx-auto animate-fade-in"
          style={{
            fontFamily: "Poppins, sans-serif",
            animationDelay: "0.2s",
          }}
        >
          Building sustainable futures for women, children, and the environment
          in Bihar's heartland
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-primary text-white font-bold text-lg px-8 py-6 shadow-button transition-all hover:scale-105"
          >
            <Link to="/donate">Donate Now</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-accent hover:text-accent-foreground font-bold text-lg px-8 py-6 bg-transparent"
          >
            <Link to="/blog">Read Our Blog</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-accent hover:text-accent-foreground font-bold text-lg px-8 py-6 bg-transparent"
          >
            <Link to="/get-involved">Get Involved</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
