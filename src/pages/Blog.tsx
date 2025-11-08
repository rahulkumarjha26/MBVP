import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import womenImage from "@/assets/hero-women-empowerment.jpg";
import childrenImage from "@/assets/children-education.jpg";
import environmentImage from "@/assets/pond-conservation.jpg";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Power of Self-Help Groups in Rural Transformation",
    excerpt: "Exploring how women-led self-help groups are becoming engines of economic growth and social change in Mithila villages, creating ripple effects across entire communities.",
    category: "Women Stories",
    image: womenImage,
    author: "Priya Sharma",
    date: "March 15, 2024",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Talab Bachao Abhiyan: A Model for Water Conservation",
    excerpt: "How our pond conservation campaign has become a blueprint for sustainable water management, attracting attention from environmental experts and policymakers nationwide.",
    category: "Environment",
    image: environmentImage,
    author: "Dr. Rajesh Kumar",
    date: "March 10, 2024",
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "Education as the Great Equalizer",
    excerpt: "A deep dive into how quality education is breaking cycles of poverty in rural Bihar, with real data and stories from children whose lives have been transformed.",
    category: "Education",
    image: childrenImage,
    author: "Anita Verma",
    date: "March 5, 2024",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Madhubani Art: Preserving Heritage, Creating Livelihoods",
    excerpt: "The revival of traditional Madhubani art is not just about cultural preservation—it's creating sustainable income for hundreds of women artisans across the region.",
    category: "Women Stories",
    image: womenImage,
    author: "Kavita Jha",
    date: "February 28, 2024",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Community-Led Development: The MGVP Approach",
    excerpt: "Why we believe the best solutions come from communities themselves, and how our participatory approach is yielding better, more sustainable outcomes.",
    category: "Impact",
    image: environmentImage,
    author: "Narayan Ji Chaudhary",
    date: "February 20, 2024",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Breaking Barriers: Girls' Education in Rural Bihar",
    excerpt: "Addressing the unique challenges facing girls' education and how targeted interventions are helping more girls stay in school and complete their education.",
    category: "Education",
    image: childrenImage,
    author: "Sunita Singh",
    date: "February 15, 2024",
    readTime: "7 min read",
  },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Women Stories", "Environment", "Education", "Impact", "News"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Blog & News
            </h1>
            <p
              className="text-lg md:text-xl text-accent max-w-3xl mx-auto"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Stories, insights, and updates from the field
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-muted border-b">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/40" />
                <Input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-white text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  {/* Featured Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 left-4 bg-secondary text-white font-semibold">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h2
                      className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {post.title}
                    </h2>

                    {/* Meta Info */}
                    <div className="flex items-center text-sm text-foreground/60 mb-3 space-x-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <p
                      className="text-foreground/70 leading-relaxed mb-4 flex-1 line-clamp-3"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-foreground/60">{post.readTime}</span>
                      <button className="text-secondary hover:text-primary font-semibold text-sm transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-foreground/70">
                  No blog posts found. Try a different search term or category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Stay Updated
              </h2>
              <p
                className="text-lg text-accent mb-8"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                Subscribe to our newsletter for the latest stories, updates, and insights from the field.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 sm:w-80"
                />
                <button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-3 rounded-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
