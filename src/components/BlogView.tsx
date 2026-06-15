import { useState, useEffect } from "react";
import { ArrowLeft, BookOpen, Clock, Calendar, User, Search, ArrowRight, Share2, Facebook, Twitter, Linkedin, Link, Check, ExternalLink } from "lucide-react";
import { useRouter, scrollToElement } from "../lib/router";
import { blogService, BlogPost } from "../lib/blogService";
import EditorJSView from "./EditorJSView";
import { WhatsAppVDSCTA } from "./BlogCTABlocks";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

interface BlogViewProps {
  slug?: string;
  onStartProject?: () => void;
}

interface ArticleShareBlockProps {
  post: BlogPost;
  position: "top" | "bottom";
}

function ArticleShareBlock({ post, position }: ArticleShareBlockProps) {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = typeof window !== "undefined" ? (`${window.location.origin}/blog/${post.slug}`) : "";
  const shareTitle = post.title;
  
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(shareTitle);
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const hasExternalUrls = !!(post.medium_url || post.facebook_post_url || post.x_post_url || post.linkedin_post_url);

  return (
    <div className={`py-5 my-5 border-y border-white/5 bg-white/[0.01] rounded-2xl px-5 sm:px-6 ${position === "bottom" ? "mt-10" : "mb-6"}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h5 className="text-[11px] font-mono tracking-widest text-[#F27D26] uppercase mb-1 flex items-center gap-1.5">
            <Share2 className="w-3.5 h-3.5" />
            <span>Share This Article</span>
          </h5>
          <p className="text-[10px] text-white/40 font-light">
            Spread premium South African cabinetry & digital growth knowledge
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          {/* Share Facebook */}
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/70 hover:text-white hover:bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg transition-all"
          >
            <Facebook className="w-3.5 h-3.5 text-blue-500" />
            <span>Facebook</span>
          </a>

          {/* Share X */}
          <a
            href={shareLinks.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/70 hover:text-white hover:bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg transition-all"
          >
            <Twitter className="w-3.5 h-3.5 text-sky-400" />
            <span>X</span>
          </a>

          {/* Share LinkedIn */}
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/70 hover:text-white hover:bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg transition-all"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
          </a>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            aria-label="Copy link to clipboard"
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/70 hover:text-white hover:bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span className="text-green-500 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Link className="w-3.5 h-3.5 text-orange-400" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>

      {hasExternalUrls && (
        <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-y-2 gap-x-6 text-[11px] font-light text-white/50">
          {post.medium_url && (
            <div className="flex items-center gap-1">
              <span>Also published on</span>
              <a
                href={post.medium_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F27D26] underline inline-flex items-center gap-0.5"
              >
                Medium <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          )}

          {(post.facebook_post_url || post.x_post_url || post.linkedin_post_url) && (
            <div className="flex items-center flex-wrap gap-1.5">
              <span>View discussion on:</span>
              <div className="flex gap-2">
                {post.facebook_post_url && (
                  <a
                    href={post.facebook_post_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#F27D26] border-b border-white/10 hover:border-[#F27D26] pb-px"
                  >
                    Facebook
                  </a>
                )}
                {post.x_post_url && (
                  <a
                    href={post.x_post_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#F27D26] border-b border-white/10 hover:border-[#F27D26] pb-px"
                  >
                    X
                  </a>
                )}
                {post.linkedin_post_url && (
                  <a
                    href={post.linkedin_post_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#F27D26] border-b border-white/10 hover:border-[#F27D26] pb-px"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function BlogView({ slug, onStartProject }: BlogViewProps) {
  const { navigate } = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Single post states
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  // Category tags
  const categories = ["All", "Lead Generation", "Craftsmanship", "Local SEO"];

  // Fetch posts
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const allPosts = await blogService.getPosts(true); // only published
      setPosts(allPosts);

      if (slug) {
        const found = await blogService.getPostBySlug(slug);
        setCurrentPost(found);

        // Filter related posts (exclude current, share category or random other)
        if (found) {
          const related = allPosts.filter(
            p => p.id !== found.id && (p.category === found.category || p.category !== "")
          ).slice(0, 3);
          setRelatedPosts(related);
        }
      }
      setLoading(false);
    }
    loadData();
  }, [slug]);

  // Set SEO metadata and titles dynamically based on slug vs list view
  useEffect(() => {
    if (slug && currentPost) {
      document.title = `${currentPost.seo_title || currentPost.title} | Veneer Digital Studio`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", currentPost.meta_description || currentPost.excerpt || "");
      }
    } else {
      document.title = "Kitchen & Joinery Blog | Veneer Digital Studio";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Website, SEO, and lead-generation advice for kitchen remodelers, cabinet makers, and premium joinery businesses in South Africa."
        );
      }
    }
  }, [slug, currentPost]);

  // Clean form navigation handlers
  const handleStartProject = () => {
    console.log("[BlogView handleStartProject] Clicked! onStartProject propensity passed?", !!onStartProject);
    if (onStartProject) {
      onStartProject();
    } else {
      console.log("[BlogView handleStartProject] Fallback navigate and scroll inside BlogView");
      navigate("/");
      setTimeout(() => {
        scrollToElement("contact");
      }, 150);
    }
  };

  // Filter logic
  const filteredPosts = posts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-ZA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (e) {
      return dateString;
    }
  };

  const hasContentBlocks = (() => {
    if (!currentPost) return false;
    let data = currentPost.content_json;
    if (!data && currentPost.content) {
      try {
        data = JSON.parse(currentPost.content);
      } catch {
        return !!currentPost.content.trim();
      }
    }
    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch {
        return !!data.trim();
      }
    }
    const blocks = data?.blocks || [];
    return Array.isArray(blocks) && blocks.length > 0;
  })();

  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-geist overflow-clip">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none"></div>
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] orange-glow pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] orange-glow pointer-events-none"></div>
      </div>

      <Header onStartProject={handleStartProject} />

      <main className="z-10 relative pt-28 pb-16 px-6 max-w-5xl mx-auto">
        {loading ? (
          <div className="py-32 text-center">
            <div className="w-10 h-10 border-2 border-[#F27D26] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xs font-mono tracking-widest text-white/40 uppercase">Loading VDS blog files...</p>
          </div>
        ) : slug && currentPost ? (
          /* ========================================================================= */
          /*                       SINGLE POST DETAIL VIEW (/blog/:slug)                 */
          /* ========================================================================= */
          <article className="animate-fade-in font-geist max-w-4xl mx-auto pt-4">
            {/* Navigation back and Category */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <button
                onClick={() => navigate("/blog")}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/50 hover:text-[#F27D26] transition-colors cursor-pointer group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to Woodwork Insights</span>
              </button>

              <span className="text-[10px] font-mono tracking-widest uppercase text-white/30 bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                {currentPost.category}
              </span>
            </div>

            {/* Header Area */}
            <header className="mb-10 text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight mb-6">
                {currentPost.title}
              </h1>

              {/* Excerpt */}
              <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light mb-8 italic">
                "{currentPost.excerpt}"
              </p>

              {/* Author & Meta */}
              <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-white/40 border-y border-white/5 py-4 font-mono uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>By {currentPost.author_name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#F27D26]/70" />
                  <span>{formatDate(currentPost.published_at || currentPost.created_at)}</span>
                </div>
                {currentPost.read_time && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F27D26]/70" />
                    <span>{currentPost.read_time}</span>
                  </div>
                )}
              </div>
            </header>

            {/* Featured Image */}
            <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden border border-white/5 mb-12 shadow-2xl relative">
              <img
                src={currentPost.featured_image}
                alt={currentPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Content Blocks */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 blog-content-renderer">
                <ArticleShareBlock post={currentPost} position="top" />

                <EditorJSView contentJsonString={currentPost.content} contentJson={currentPost.content_json} />

                {hasContentBlocks && (
                  <ArticleShareBlock post={currentPost} position="bottom" />
                )}

                <div className="border-t border-white/5 pt-8 mt-12">
                  <h4 className="text-sm font-mono tracking-widest text-[#F27D26] uppercase mb-4">
                    About Veneer Digital Studio
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed font-light mb-6">
                    We build specialized lead-qualified pipeline systems, bespoke showroom portals, and custom web designs for South African woodworkers, cupboard makers, joiners, shopfitters, and home decorators. Learn how to stop under-pricing and win custom cabinetry blueprints.
                  </p>
                </div>
              </div>

              {/* Sticky Sidebar with CTAs */}
              <aside className="lg:col-span-4 space-y-6">
                <div className="bg-[#080808]/50 border border-white/5 rounded-2xl p-5 sticky top-28">
                  <h4 className="text-xs font-mono tracking-widest uppercase text-white/30 mb-4 pb-2 border-b border-white/5">
                    Direct Actions
                  </h4>

                  <WhatsAppVDSCTA />
                </div>
              </aside>
            </div>

            {/* Related Posts Section */}
            {relatedPosts.length > 0 && (
              <section className="border-t border-white/5 pt-16 mt-20">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white">
                      Related <span className="serif-font text-[#F27D26] italic">Joinery Insights</span>
                    </h3>
                    <p className="text-xs text-white/40 mt-1">Further reading in cabinetry business growth</p>
                  </div>
                  <button
                    onClick={() => navigate("/blog")}
                    className="text-xs font-mono tracking-widest uppercase text-[#F27D26] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {relatedPosts.map(post => (
                    <div
                      key={post.id}
                      onClick={() => navigate("/blog/" + post.slug)}
                      className="bg-[#080808]/50 border border-white/5 hover:border-[#F27D26]/20 rounded-2xl p-4 cursor-pointer transition-all duration-300 group flex flex-col h-full hover:scale-[1.01]"
                    >
                      <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 border border-white/5 shrink-0">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#F27D26] mb-2 font-semibold">
                          {post.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-200 line-clamp-2 leading-snug mb-2 mb-auto">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-3 text-[10px] font-mono text-white/30 pt-3 border-t border-white/5">
                          <span>{post.read_time || "4 min"}</span>
                          <span>•</span>
                          <span>{formatDate(post.published_at || post.created_at)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>
        ) : (
          /* ========================================================================= */
          /*                          BLOG LISTS VIEW (/blog)                          */
          /* ========================================================================= */
          <div className="animate-fade-in pt-4">
            {/* Breadcrumb / Top label */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#F27D26] uppercase mb-4 py-1 px-3 bg-[#F27D26]/5 rounded-full border border-[#F27D26]/10">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Socio-Digital Craft Insights</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
                Kitchen & <span className="serif-font text-[#F27D26] italic">Joinery Blog</span>
              </h1>
              <p className="mt-4 text-xs sm:text-sm text-white/50 leading-relaxed font-light">
                Website, SEO, and lead-generation advice for kitchen remodelers, cabinet makers, and premium joinery businesses.
              </p>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[#080808]/80 backdrop-blur-xl border border-white/5 p-4 rounded-2xl mb-12">
              {/* Category selector */}
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 text-[11px] font-semibold tracking-wider rounded-xl transition-all uppercase font-mono cursor-pointer border ${
                      activeCategory === cat
                        ? "bg-[#F27D26] border-[#F27D26] text-black"
                        : "bg-white/5 border-white/5 text-white/55 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Field */}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Query woodwork insights..."
                  className="w-full pl-9 pr-4 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 outline-none focus:border-[#F27D26] transition-colors"
                />
              </div>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="py-24 text-center border border-white/5 rounded-3xl bg-[#080808]/40">
                <p className="text-xs text-white/30 font-mono tracking-widest uppercase mb-2">No cabinetry articles found</p>
                <p className="text-white/60 text-xs font-light">Try adjusting your search filters or browse another category.</p>
              </div>
            ) : (
              /* Grid Layout of Posts */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, idx) => (
                  <div
                    key={post.id}
                    onClick={() => navigate("/blog/" + post.slug)}
                    className="bg-[#080808]/50 border border-white/5 hover:border-[#F27D26]/20 rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full transition-all duration-300 group hover:scale-[1.01] hover:shadow-[0_10px_35px_-10px_rgba(242,125,38,0.1)]"
                  >
                    {/* Featured Image */}
                    <div className="aspect-[16/10] w-full relative overflow-hidden bg-[#0c0c0c] border-b border-white/5">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 border border-white/10 rounded-lg">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#F27D26]">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-4 text-[9px] font-mono text-white/30 uppercase tracking-widest">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#F27D26]/50" />
                            {post.read_time || "4 min"}
                          </span>
                          <span>•</span>
                          <span>{formatDate(post.published_at || post.created_at)}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold text-white/90 group-hover:text-[#F27D26] tracking-tight transition-colors duration-200 line-clamp-2 leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-white/50 text-[11px] sm:text-xs leading-relaxed font-light line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Read More button inline */}
                      <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono font-bold tracking-widest text-[#F27D26]/80 group-hover:text-[#F27D26] uppercase">
                        <span className="group-hover:translate-x-1 transition-transform">READ ARTICLE</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}


          </div>
        )}
      </main>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}
