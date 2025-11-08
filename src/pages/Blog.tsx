import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { listArticleSummaries } from "@/content/articles";

const blogPosts = listArticleSummaries();

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9; // posts per page

  const categories = [
    "All",
    "Women",
    "Environment",
    "Children",
    "Community",
    "Impact",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    // articles use categoryDisplay (with emoji) in summaries
    const matchesCategory =
      selectedCategory === "All" || post.categoryDisplay === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-20">
          <div className="container px-4 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Impact Stories
            </h1>
            <p
              className="text-lg md:text-xl text-accent max-w-3xl mx-auto"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Real stories of transformation, hope, and lasting change from the
              communities we serve
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
              {paginatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  {/* Featured Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 left-4 bg-secondary text-white font-semibold">
                      {post.categoryDisplay}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h2
                      className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Meta Info */}
                    <div className="flex items-center text-sm text-foreground/60 mb-3 space-x-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <p
                      className="text-foreground/70 leading-relaxed mb-4 flex-1 line-clamp-3"
                      style={{ fontFamily: "Open Sans, sans-serif" }}
                    >
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-foreground/60">
                        {post.readTime}
                      </span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-secondary hover:text-primary font-semibold text-sm transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-foreground/70">
                  No stories found. Try a different search term or category.
                </p>
              </div>
            )}

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-3">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md border ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-primary/10"
                  }`}
                >
                  Previous
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <button
                        key={p}
                        onClick={() => setCurrentPage(p)}
                        className={`px-3 py-2 rounded-md border ${
                          p === currentPage ? "bg-primary text-white" : ""
                        }`}
                      >
                        {p}
                      </button>
                    )
                  )}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md border ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-primary/10"
                  }`}
                >
                  Next
                </button>
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
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Stay Updated
              </h2>
              <p
                className="text-lg text-accent mb-8"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Subscribe to our newsletter for the latest stories, updates, and
                insights from the field.
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
