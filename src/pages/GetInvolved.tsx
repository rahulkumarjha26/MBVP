import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserCheck, Handshake, TrendingUp, Megaphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GetInvolved = () => {
  const { toast } = useToast();
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    opportunity: "",
    skills: "",
    availability: "",
    message: "",
  });

  const [partnerForm, setPartnerForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
  });

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you soon.",
    });
    setVolunteerForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      opportunity: "",
      skills: "",
      availability: "",
      message: "",
    });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "We'll get back to you within 2 business days.",
    });
    setPartnerForm({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      partnershipType: "",
      message: "",
    });
  };

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
              Get Involved
            </h1>
            <p
              className="text-lg md:text-xl text-accent max-w-3xl mx-auto"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Join us in creating lasting change. There are many ways to support our mission.
            </p>
          </div>
        </section>

        {/* Involvement Options */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container px-4">
            <Tabs defaultValue="volunteer" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
                <TabsTrigger value="volunteer" className="py-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                  <UserCheck className="h-5 w-5 mr-2" />
                  Volunteer
                </TabsTrigger>
                <TabsTrigger value="partner" className="py-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Handshake className="h-5 w-5 mr-2" />
                  Partner
                </TabsTrigger>
                <TabsTrigger value="fundraise" className="py-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Fundraise
                </TabsTrigger>
                <TabsTrigger value="advocate" className="py-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Megaphone className="h-5 w-5 mr-2" />
                  Advocate
                </TabsTrigger>
              </TabsList>

              {/* Volunteer Tab */}
              <TabsContent value="volunteer" className="space-y-12">
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2
                    className="text-3xl md:text-4xl font-bold text-primary"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Volunteer With Us
                  </h2>
                  <p
                    className="text-lg leading-relaxed text-foreground/80"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    Your time and skills can make a real difference. Join our community of dedicated volunteers 
                    working to transform lives in the Mithila region.
                  </p>
                </div>

                {/* Opportunities */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "On-Ground Volunteer",
                      description: "Field work in Mithila villages - teaching, community engagement, program coordination",
                      time: "Flexible, weekends or full-time",
                    },
                    {
                      title: "Skills-Based Volunteer",
                      description: "Remote opportunities in writing, design, digital marketing, fundraising",
                      time: "Flexible hours, work from home",
                    },
                    {
                      title: "Virtual Volunteer",
                      description: "Social media management, data analysis, research, online campaigns",
                      time: "5-10 hours per week",
                    },
                    {
                      title: "Donor Ambassador",
                      description: "Networking, fundraising events, spreading awareness in your circles",
                      time: "Flexible commitment",
                    },
                  ].map((opp, i) => (
                    <div key={i} className="bg-muted p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-primary mb-3">{opp.title}</h3>
                      <p className="text-sm text-foreground/70 mb-3">{opp.description}</p>
                      <p className="text-xs font-semibold text-secondary">{opp.time}</p>
                    </div>
                  ))}
                </div>

                {/* Application Form */}
                <div className="max-w-2xl mx-auto bg-muted p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-primary mb-6">Apply to Volunteer</h3>
                  <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Full Name *</label>
                        <Input
                          required
                          value={volunteerForm.name}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email *</label>
                        <Input
                          type="email"
                          required
                          value={volunteerForm.email}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Phone</label>
                        <Input
                          type="tel"
                          value={volunteerForm.phone}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">City</label>
                        <Input
                          value={volunteerForm.city}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, city: e.target.value })}
                          placeholder="Your city"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Preferred Opportunity *</label>
                      <select
                        required
                        value={volunteerForm.opportunity}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, opportunity: e.target.value })}
                        className="w-full px-3 py-2 border border-input rounded-md"
                      >
                        <option value="">Select an opportunity</option>
                        <option value="on-ground">On-Ground Volunteer</option>
                        <option value="skills-based">Skills-Based Volunteer</option>
                        <option value="virtual">Virtual Volunteer</option>
                        <option value="ambassador">Donor Ambassador</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Skills & Experience</label>
                      <Textarea
                        value={volunteerForm.skills}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, skills: e.target.value })}
                        placeholder="Tell us about your relevant skills and experience..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Availability</label>
                      <Input
                        value={volunteerForm.availability}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })}
                        placeholder="e.g., Weekends, 10 hours/week"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Why do you want to volunteer?</label>
                      <Textarea
                        value={volunteerForm.message}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                        placeholder="Tell us what motivates you..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-secondary hover:bg-primary font-bold">
                      Submit Application
                    </Button>
                  </form>
                </div>
              </TabsContent>

              {/* Partner Tab */}
              <TabsContent value="partner" className="space-y-12">
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Partner With Us
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground/80" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    We welcome partnerships with corporations, foundations, and organizations that share our vision 
                    for community development and social impact.
                  </p>
                </div>

                {/* Partnership Types */}
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Corporate CSR Partner",
                      benefits: ["Sponsorship opportunities", "Employee volunteering programs", "In-kind support", "Brand visibility"],
                    },
                    {
                      title: "Grant Foundation Partner",
                      benefits: ["Project-specific funding", "Capacity building support", "Long-term partnerships", "Impact measurement"],
                    },
                    {
                      title: "Individual Donor Partner",
                      benefits: ["Monthly recurring donations", "Project adoption", "Exclusive updates", "Recognition programs"],
                    },
                    {
                      title: "Technical Partner",
                      benefits: ["Software/service providers", "Infrastructure support", "Pro-bono consulting", "Technology integration"],
                    },
                  ].map((type, i) => (
                    <div key={i} className="bg-white border-l-4 border-secondary p-6 rounded-lg shadow-soft">
                      <h3 className="text-xl font-bold text-primary mb-4">{type.title}</h3>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-start">
                            <span className="text-secondary mr-2">✓</span>
                            <span className="text-foreground/70">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Partnership Form */}
                <div className="max-w-2xl mx-auto bg-muted p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-primary mb-6">Partner Inquiry Form</h3>
                  <form onSubmit={handlePartnerSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Company/Organization Name *</label>
                      <Input
                        required
                        value={partnerForm.companyName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, companyName: e.target.value })}
                        placeholder="Company name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Contact Person *</label>
                        <Input
                          required
                          value={partnerForm.contactPerson}
                          onChange={(e) => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email *</label>
                        <Input
                          type="email"
                          required
                          value={partnerForm.email}
                          onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                          placeholder="email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone</label>
                      <Input
                        type="tel"
                        value={partnerForm.phone}
                        onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Partnership Type *</label>
                      <select
                        required
                        value={partnerForm.partnershipType}
                        onChange={(e) => setPartnerForm({ ...partnerForm, partnershipType: e.target.value })}
                        className="w-full px-3 py-2 border border-input rounded-md"
                      >
                        <option value="">Select partnership type</option>
                        <option value="csr">Corporate CSR Partner</option>
                        <option value="grant">Grant Foundation Partner</option>
                        <option value="donor">Individual Donor Partner</option>
                        <option value="technical">Technical Partner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Message *</label>
                      <Textarea
                        required
                        value={partnerForm.message}
                        onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                        placeholder="Tell us about your partnership interests..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-secondary hover:bg-primary font-bold">
                      Submit Inquiry
                    </Button>
                  </form>
                </div>
              </TabsContent>

              {/* Fundraise Tab */}
              <TabsContent value="fundraise" className="space-y-12">
                <div className="max-w-4xl mx-auto space-y-6 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Start a Fundraiser
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground/80" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Celebrate special occasions by raising funds for MGVP. Create your personal fundraising campaign 
                    and inspire your network to support our cause.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {[
                    {
                      title: "Personal Fundraiser",
                      description: "Celebrate birthdays, anniversaries, or achievements by fundraising for our cause",
                      icon: "🎉",
                    },
                    {
                      title: "Corporate Fundraiser",
                      description: "Organize team events, challenges, or donation matching programs",
                      icon: "🏢",
                    },
                    {
                      title: "Online Campaign",
                      description: "Create social media fundraising campaigns and share with your network",
                      icon: "📱",
                    },
                    {
                      title: "In-Memory Fundraiser",
                      description: "Honor someone special while creating lasting impact in their name",
                      icon: "💐",
                    },
                  ].map((method, i) => (
                    <div key={i} className="bg-white p-8 rounded-xl shadow-soft text-center hover:shadow-elevated transition-all">
                      <div className="text-5xl mb-4">{method.icon}</div>
                      <h3 className="text-xl font-bold text-primary mb-3">{method.title}</h3>
                      <p className="text-foreground/70 mb-4">{method.description}</p>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        Get Started
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Advocate Tab */}
              <TabsContent value="advocate" className="space-y-12">
                <div className="max-w-4xl mx-auto space-y-6 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Advocate for Change
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground/80" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Use your voice to spread awareness and advocate for the causes we champion. 
                    Download resources and join our advocacy campaigns.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {[
                    {
                      title: "Share Our Story",
                      resources: ["Downloadable fact sheet", "Social media graphics", "Campaign hashtags", "Email templates"],
                    },
                    {
                      title: "Educational Materials",
                      resources: ["Infographics on our impact", "Video testimonials", "Blog articles", "Annual reports"],
                    },
                    {
                      title: "Community Campaigns",
                      resources: ["Join Talab Bachao Abhiyan", "Environmental advocacy", "Petition templates", "Awareness toolkits"],
                    },
                    {
                      title: "Policy Advocacy",
                      resources: ["Policy briefs", "Sample letters to officials", "Contact templates", "Research reports"],
                    },
                  ].map((resource, i) => (
                    <div key={i} className="bg-white border-l-4 border-secondary p-6 rounded-lg shadow-soft">
                      <h3 className="text-xl font-bold text-primary mb-4">{resource.title}</h3>
                      <ul className="space-y-2">
                        {resource.resources.map((item, j) => (
                          <li key={j} className="flex items-start">
                            <span className="text-secondary mr-2">📄</span>
                            <span className="text-foreground/70">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-white">
                        Download Resources
                      </Button>
                    </div>
                  ))}
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

export default GetInvolved;
