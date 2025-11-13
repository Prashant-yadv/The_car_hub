import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-orbitron font-black gradient-text mb-6">
            News & Insights
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay updated with the latest automotive news, reviews, and expert insights
            from the world of high-performance sports cars.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-card rounded-2xl overflow-hidden border border-border card-hover">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-4 lg:space-y-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1 w-fit">
                    <span className="text-xs font-inter text-primary uppercase tracking-wide">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-black gradient-text">
                    {featuredPost.title}
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 font-orbitron w-fit group">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-xl overflow-hidden border border-border card-hover"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className="p-6 space-y-4">
                  <div className="inline-block bg-primary/10 text-primary text-xs font-inter uppercase tracking-wide px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-orbitron font-bold text-foreground line-clamp-2 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button
                      variant="link"
                      className="text-primary p-0 h-auto font-inter text-sm group"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
