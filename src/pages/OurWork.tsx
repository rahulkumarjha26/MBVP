import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, GraduationCap, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-20">
          <div className="container px-4 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Our Work
            </h1>
            <p
              className="text-lg md:text-xl text-accent max-w-3xl mx-auto"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Comprehensive programs driving sustainable change across Mithila
            </p>
          </div>
        </section>

        {/* Programs Tabs */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container px-4">
            <Tabs defaultValue="women" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
                <TabsTrigger value="women" className="py-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Heart className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Women's Empowerment</span>
                  <span className="sm:hidden">Women</span>
                </TabsTrigger>
                <TabsTrigger value="children" className="py-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Child Welfare</span>
                  <span className="sm:hidden">Children</span>
                </TabsTrigger>
                <TabsTrigger value="environment" className="py-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Leaf className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Environment</span>
                  <span className="sm:hidden">Nature</span>
                </TabsTrigger>
                <TabsTrigger value="community" className="py-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Community Dev.</span>
                  <span className="sm:hidden">Community</span>
                </TabsTrigger>
              </TabsList>

              {/* Women's Empowerment */}
              <TabsContent value="women" className="space-y-12">
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2
                    className="text-3xl md:text-4xl font-bold text-primary"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Women's Economic Empowerment
                  </h2>
                  <p
                    className="text-lg leading-relaxed text-foreground/80"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    We empower women in the Mithila region through comprehensive programs that provide skills training, 
                    financial literacy, and economic opportunities. Our initiatives help women achieve financial independence 
                    and become agents of change in their communities.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { stat: "5,000+", label: "Women Empowered" },
                    { stat: "150+", label: "Self-Help Groups" },
                    { stat: "₹2Cr+", label: "Income Generated" },
                  ].map((item, i) => (
                    <div key={i} className="bg-muted p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                      <div className="text-sm font-semibold text-foreground/70">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Self-Help Groups (SHGs)",
                      description: "Formation and management of women's self-help groups for collective economic empowerment and mutual support."
                    },
                    {
                      title: "Skills Training Programs",
                      description: "Vocational training in tailoring, handicrafts, Madhubani art, and other income-generating skills."
                    },
                    {
                      title: "Farmer Producer Organizations",
                      description: "Supporting women farmers to organize, access markets, and improve agricultural practices."
                    },
                    {
                      title: "Microcredit & Enterprise Support",
                      description: "Access to microfinance and business development support for women entrepreneurs."
                    },
                  ].map((initiative, i) => (
                    <div key={i} className="bg-white border-l-4 border-secondary p-6 rounded-lg shadow-soft">
                      <h3 className="text-xl font-bold text-primary mb-3">{initiative.title}</h3>
                      <p className="text-foreground/70">{initiative.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-8">
                  <Button asChild size="lg" className="bg-secondary hover:bg-primary font-bold">
                    <Link to="/donate">Support Women's Empowerment</Link>
                  </Button>
                </div>
              </TabsContent>

              {/* Child Welfare & Education */}
              <TabsContent value="children" className="space-y-12">
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Child Welfare & Education
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground/80" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Every child deserves quality education and a nurturing environment. Our programs focus on providing 
                    educational support, health initiatives, and protection for vulnerable children across the Mithila region.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { stat: "3,000+", label: "Children Supported" },
                    { stat: "50+", label: "Schools Reached" },
                    { stat: "1,500+", label: "Scholarships Given" },
                  ].map((item, i) => (
                    <div key={i} className="bg-muted p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                      <div className="text-sm font-semibold text-foreground/70">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Education Support Programs",
                      description: "Scholarships, school supplies, and tutoring support to ensure children can access quality education."
                    },
                    {
                      title: "Child Labor Rehabilitation",
                      description: "Rescuing children from labor and providing rehabilitation, education, and skill development."
                    },
                    {
                      title: "Health & Nutrition Initiatives",
                      description: "Health check-ups, nutrition programs, and awareness campaigns for child health and wellbeing."
                    },
                    {
                      title: "School Infrastructure",
                      description: "Building and renovating schools, providing furniture, libraries, and learning materials."
                    },
                  ].map((initiative, i) => (
                    <div key={i} className="bg-white border-l-4 border-secondary p-6 rounded-lg shadow-soft">
                      <h3 className="text-xl font-bold text-primary mb-3">{initiative.title}</h3>
                      <p className="text-foreground/70">{initiative.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-8">
                  <Button asChild size="lg" className="bg-secondary hover:bg-primary font-bold">
                    <Link to="/donate">Support Child Education</Link>
                  </Button>
                </div>
              </TabsContent>

              {/* Environmental Conservation */}
              <TabsContent value="environment" className="space-y-12">
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Environmental Conservation
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground/80" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Our flagship Talab Bachao Abhiyan (Pond Conservation Campaign) leads the way in protecting and reviving 
                    water bodies in the Mithila region. We work with communities to ensure sustainable environmental management 
                    for future generations.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { stat: "200+", label: "Ponds Conserved" },
                    { stat: "100+", label: "Villages Engaged" },
                    { stat: "500+", label: "Acres Protected" },
                  ].map((item, i) => (
                    <div key={i} className="bg-muted p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                      <div className="text-sm font-semibold text-foreground/70">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Talab Bachao Abhiyan",
                      description: "Our flagship campaign to save, restore, and protect traditional ponds across the Mithila region."
                    },
                    {
                      title: "Jalashay Bachao Abhiyan",
                      description: "Wetland protection initiative focusing on larger water bodies and their ecological importance."
                    },
                    {
                      title: "Pond Restoration Projects",
                      description: "Physical restoration work including desilting, embankment repair, and biodiversity enhancement."
                    },
                    {
                      title: "Community Awareness Campaigns",
                      description: "Education and awareness programs on water conservation, climate change, and sustainable practices."
                    },
                  ].map((initiative, i) => (
                    <div key={i} className="bg-white border-l-4 border-secondary p-6 rounded-lg shadow-soft">
                      <h3 className="text-xl font-bold text-primary mb-3">{initiative.title}</h3>
                      <p className="text-foreground/70">{initiative.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-8">
                  <Button asChild size="lg" className="bg-secondary hover:bg-primary font-bold">
                    <Link to="/donate">Support Environmental Conservation</Link>
                  </Button>
                </div>
              </TabsContent>

              {/* Community Development */}
              <TabsContent value="community" className="space-y-12">
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Community Development
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground/80" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Building resilient communities through integrated development programs that address livelihood, health, 
                    social empowerment, and sustainable agriculture. We work with marginalized communities, including the 
                    Musahar community, to ensure inclusive development.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { stat: "150+", label: "Villages Reached" },
                    { stat: "20,000+", label: "Lives Impacted" },
                    { stat: "500+", label: "Livelihoods Created" },
                  ].map((item, i) => (
                    <div key={i} className="bg-muted p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                      <div className="text-sm font-semibold text-foreground/70">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Livelihood Programs",
                      description: "Creating sustainable income opportunities through agriculture, animal husbandry, and small enterprises."
                    },
                    {
                      title: "Health Awareness Camps",
                      description: "Regular health camps providing check-ups, medicines, and health education to rural communities."
                    },
                    {
                      title: "Social Empowerment",
                      description: "Programs addressing social issues, promoting equality, and building community leadership."
                    },
                    {
                      title: "Sustainable Agriculture",
                      description: "Training farmers in organic farming, water-efficient practices, and climate-resilient agriculture."
                    },
                  ].map((initiative, i) => (
                    <div key={i} className="bg-white border-l-4 border-secondary p-6 rounded-lg shadow-soft">
                      <h3 className="text-xl font-bold text-primary mb-3">{initiative.title}</h3>
                      <p className="text-foreground/70">{initiative.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-8">
                  <Button asChild size="lg" className="bg-secondary hover:bg-primary font-bold">
                    <Link to="/donate">Support Community Development</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurWork;
