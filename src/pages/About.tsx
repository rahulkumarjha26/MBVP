import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Lightbulb, Eye, Heart, Sprout } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-12 w-12" />,
      name: "Empowerment",
      description: "We believe in empowering communities to create their own sustainable futures through education, skills, and resources.",
    },
    {
      icon: <Eye className="h-12 w-12" />,
      name: "Transparency",
      description: "We maintain complete transparency in our operations, finances, and impact reporting to build trust with our stakeholders.",
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      name: "Innovation",
      description: "We embrace innovative approaches and technologies to maximize our impact and reach more communities effectively.",
    },
    {
      icon: <Sprout className="h-12 w-12" />,
      name: "Sustainability",
      description: "We focus on creating long-term, sustainable solutions that benefit both people and the environment for generations.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-20 md:py-32">
          <div className="container px-4 text-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              About MGVP
            </h1>
            <p
              className="text-xl md:text-2xl text-accent max-w-3xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              33 Years of Community Transformation in Mithila
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold text-primary mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Our Story
              </h2>
              <p
                className="text-lg leading-relaxed text-foreground/80"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                Founded in 1991, Mithila Gram Vikas Parishad (MGVP) has been at the forefront of community 
                development in the Mithila region of Bihar, India. For over three decades, we have worked 
                tirelessly to empower marginalized communities, focusing particularly on women and children.
              </p>
              <p
                className="text-lg leading-relaxed text-foreground/80"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                Based in Darbhanga, Bihar, our organization serves communities across Darbhanga, Madhubani, 
                Samastipur, and surrounding districts. Under the visionary leadership of Secretary Narayan Ji 
                Chaudhary, MGVP has reached over 150 villages, touching the lives of thousands through our 
                comprehensive programs.
              </p>
              <p
                className="text-lg leading-relaxed text-foreground/80"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                Our flagship initiative, the Talab Bachao Abhiyan (Pond Conservation Campaign), exemplifies 
                our commitment to environmental sustainability and community welfare. Through this and other 
                programs, we have conserved over 200 ponds, empowered 5,000+ women, and supported 3,000+ children 
                in their educational journey.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-primary mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Our Values
              </h2>
              <p
                className="text-lg text-foreground/70 max-w-3xl mx-auto"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                The principles that guide our work and define our commitment to communities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="inline-block text-secondary mb-4">
                    {value.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-primary mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {value.name}
                  </h3>
                  <p
                    className="text-foreground/70 leading-relaxed"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-primary mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Our Leadership
              </h2>
            </div>

            <div className="max-w-3xl mx-auto bg-muted rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center text-white text-5xl font-bold border-4 border-secondary flex-shrink-0">
                  NC
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3
                    className="text-2xl font-bold text-primary mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Narayan Ji Chaudhary
                  </h3>
                  <p
                    className="text-lg font-semibold text-secondary mb-4"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Secretary & Founder
                  </p>
                  <p
                    className="text-foreground/80 leading-relaxed mb-4"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    With over 33 years of dedicated service to the Mithila region, Narayan Ji Chaudhary 
                    has been the driving force behind MGVP's transformative work. His vision and leadership 
                    in launching the Talab Bachao Abhiyan has made him a pioneer in community-based 
                    environmental conservation in Bihar.
                  </p>
                  <blockquote
                    className="border-l-4 border-secondary pl-4 italic text-lg text-secondary"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    "Community action creates lasting change"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
