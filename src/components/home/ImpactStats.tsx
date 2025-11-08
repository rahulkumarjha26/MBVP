import { useEffect, useRef, useState } from "react";
import { Users, Heart, GraduationCap, Droplets } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  delay?: number;
}

const StatCard = ({ icon, number, label, delay = 0 }: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      const target = parseInt(number.replace(/\+|,/g, ""));
      const duration = 1500;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div
      ref={cardRef}
      className={`bg-white p-8 rounded-xl border-t-4 border-primary shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-secondary">
          {icon}
        </div>
        <div
          className="text-4xl md:text-5xl font-black text-primary mb-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {count.toLocaleString()}+
        </div>
        <div
          className="text-lg font-semibold text-foreground/80"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

const ImpactStats = () => {
  const stats = [
    {
      icon: <Users className="h-12 w-12" />,
      number: "150",
      label: "Villages Reached",
    },
    {
      icon: <Heart className="h-12 w-12" />,
      number: "5000",
      label: "Women Empowered",
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      number: "3000",
      label: "Children Supported",
    },
    {
      icon: <Droplets className="h-12 w-12" />,
      number: "200",
      label: "Ponds Conserved",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
