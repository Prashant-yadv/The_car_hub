import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import { toast } from "sonner";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background font-inter">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-orbitron font-black gradient-text mb-4">
            Article Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 font-orbitron">
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />

      {/* Hero Image */}
      <section className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Link to="/blog">
              <Button
                variant="ghost"
                className="mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>

            <div className="mb-8">
              <div className="inline-block bg-primary/10 text-primary text-xs font-inter uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                {post.category}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black gradient-text mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-inter">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-inter">{post.readTime}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-foreground leading-relaxed mb-6 font-inter"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Related Articles */}
            <div className="mt-16 pt-16 border-t border-border">
              <h2 className="text-2xl sm:text-3xl font-orbitron font-black gradient-text mb-8">
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((p) => p.id !== post.id && p.category === post.category)
                  .slice(0, 3)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="bg-card rounded-xl overflow-hidden border border-border card-hover block"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-orbitron font-bold text-foreground line-clamp-2 mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
