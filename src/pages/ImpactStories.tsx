import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import womenImage from "@/assets/hero-women-empowerment.jpg";
import childrenImage from "@/assets/children-education.jpg";
import environmentImage from "@/assets/pond-conservation.jpg";

interface Story {
  id: number;
  title: string;
  excerpt: string;
  category: "Women" | "Children" | "Environment" | "Community";
  image: string;
  date: string;
  readTime: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: "From Silence to Voice: Anita's Journey",
    excerpt: "How a young woman from a remote village found her voice through skills training and became a leader in her community, inspiring dozens of other women to start their own small businesses.",
    category: "Women",
    image: womenImage,
    date: "March 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "A Classroom Transformed",
    excerpt: "The story of how a dilapidated school in rural Darbhanga was renovated, bringing hope and quality education to over 200 children who now have access to proper learning facilities.",
    category: "Children",
    image: childrenImage,
    date: "February 2024",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Water Returns to the Village",
    excerpt: "Through the Talab Bachao Abhiyan, a dried-up pond was restored, bringing back life to the ecosystem and providing sustainable water resources to the entire village.",
    category: "Environment",
    image: environmentImage,
    date: "January 2024",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Youth Leading Conservation",
    excerpt: "Young people take charge of pond cleaning drives, demonstrating that environmental stewardship knows no age and inspiring their peers across the Mithila region.",
    category: "Environment",
    image: environmentImage,
    date: "December 2023",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Breaking the Cycle: Education Changes Everything",
    excerpt: "Meet Rajesh, the first in his family to complete high school thanks to MGVP's scholarship program. Now he's pursuing engineering and wants to give back to his community.",
    category: "Children",
    image: childrenImage,
    date: "November 2023",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Madhubani Art: Tradition Meets Empowerment",
    excerpt: "Women artisans revive the ancient Madhubani art form while creating sustainable livelihoods, showcasing their work in national exhibitions and earning fair wages.",
    category: "Women",
    image: womenImage,
    date: "October 2023",
    readTime: "7 min read",
  },
];

const ImpactStories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", "Women", "Children", "Environment", "Community"];
  
  const filteredStories = selectedCategory === "All" 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Women":
        return "bg-secondary text-white";
      case "Children":
        return "bg-accent text-accent-foreground";
      case "Environment":
        return "bg-primary text-white";
      case "Community":
        return "bg-muted-foreground text-white";
      default:
        return "bg-gray-500 text-white";
    }
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
              Impact Stories
            </h1>
            <p
              className="text-lg md:text-xl text-accent max-w-3xl mx-auto"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Real stories of transformation, hope, and lasting change from the communities we serve
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-muted border-b">
          <div className="container px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <div
                  key={story.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge
                      className={`absolute top-4 left-4 ${getCategoryColor(story.category)} font-semibold`}
                    >
                      {story.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3
                      className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {story.title}
                    </h3>
                    
                    <p
                      className="text-foreground/70 leading-relaxed mb-4 flex-1"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {story.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-foreground/60 mb-4">
                      <span>{story.date}</span>
                      <span>{story.readTime}</span>
                    </div>

                    <Button
                      variant="link"
                      className="text-secondary hover:text-primary p-0 h-auto font-semibold justify-start"
                    >
                      Read Full Story →
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredStories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-foreground/70">
                  No stories found in this category. Check back soon for more inspiring stories!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container px-4 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Be Part of These Stories
            </h2>
            <p
              className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Your support creates more success stories like these. Join us in transforming lives across the Mithila region.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-primary font-bold text-lg"
            >
              <a href="/donate">Support Our Work</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ImpactStories;
