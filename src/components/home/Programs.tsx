import { Link } from "react-router-dom";
import { ArrowRight, Heart, GraduationCap, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import womenImage from "@/assets/hero-women-empowerment.jpg";
import childrenImage from "@/assets/children-education.jpg";
import environmentImage from "@/assets/pond-conservation.jpg";

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProgramCard = ({ icon, title, description, image, link }: ProgramCardProps) => {
  return (
    <Link to={link} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              variant="secondary"
              className="font-bold"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-secondary">
              {icon}
            </div>
            <h3
              className="text-xl font-bold text-primary"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {title}
            </h3>
          </div>
          
          <p
            className="text-foreground/70 leading-relaxed flex-1"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            {description}
          </p>

          <div className="mt-4 flex items-center text-secondary font-semibold text-sm group-hover:text-primary transition-colors">
            Read More
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Programs = () => {
  const programs = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Women's Empowerment",
      description: "Empowering women through skills training, self-help groups, and Madhubani art initiatives, creating economic independence and social transformation.",
      image: womenImage,
      link: "/our-work#women",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Child Welfare & Education",
      description: "Supporting children through education programs, school infrastructure, health initiatives, and rehabilitation efforts for vulnerable children.",
      image: childrenImage,
      link: "/our-work#children",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Environmental Conservation",
      description: "Leading the Talab Bachao Abhiyan for pond conservation, wetland protection, and sustainable environmental management across Mithila.",
      image: environmentImage,
      link: "/our-work#environment",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Development",
      description: "Building sustainable livelihoods through agriculture support, health awareness camps, and inclusive programs for marginalized communities.",
      image: womenImage,
      link: "/our-work#community",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Programs
          </h2>
          <p
            className="text-lg text-foreground/70 max-w-3xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Transforming lives through comprehensive community development initiatives
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
