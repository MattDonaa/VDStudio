import React, { useState, useEffect } from "react";
import { ArrowLeft, Plus, Settings, Eye, Edit, Trash, Check, X, Sparkles, FolderPlus, Save, Layout, RefreshCw, Layers } from "lucide-react";
import { useRouter } from "../lib/router";
import { blogService, BlogPost } from "../lib/blogService";
import BlogEditor from "./BlogEditor";
import Header from "./Header";
import Footer from "./Footer";

// Selection of beautiful cabinetry / kitchen remodelling high quality royalty-free photos as suggestions.
const RECOMMENDED_STOCK_IMAGES = [
  { name: "Modern Dark Kitchen", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" },
  { name: "Luxury Solid Oak Cabinet", url: "https://images.unsplash.com/photo-1666003449012-61951d621555?q=80&w=1200" },
  { name: "Classic Woodworkshop Prep", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200" },
  { name: "Scandinavian Kitchen Islands", url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200" }
];

interface AdminBlogViewProps {
  action?: "list" | "new" | "edit";
  editId?: string;
  onStartProject?: () => void;
}

export default function AdminBlogView({ action = "list", editId, onStartProject }: AdminBlogViewProps) {
  const { navigate } = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Form states
  const [title, setTitle] = useState("");
  const [slugFieldValue, setSlugFieldValue] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("Lead Generation");
  const [featuredImage, setFeaturedImage] = useState("");
  const [authorName, setAuthorName] = useState("Veneer Team");
  const [published, setPublished] = useState(true);
  const [contentJson, setContentJson] = useState("");

  const categories = ["Lead Generation", "Craftsmanship", "Local SEO"];

  // Fetch all posts for list view or edit data
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const allPosts = await blogService.getPosts(false); // get ALL including drafts
      setPosts(allPosts);

      if (action === "edit" && editId) {
        const found = await blogService.getPostById(editId);
        if (found) {
          setTitle(found.title);
          setSlugFieldValue(found.slug);
          setExcerpt(found.excerpt);
          setCategory(found.category);
          setFeaturedImage(found.featured_image);
          setAuthorName(found.author_name);
          setPublished(found.published);
          setContentJson(found.content);
        } else {
          console.error("Editable post not found by id:", editId);
          navigate("/admin/blog");
        }
      }
      setLoading(false);
    }
    loadData();
  }, [action, editId]);

  // Handle auto slug-generation on title change
  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    if (action === "new") {
      const generated = newTitle
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "") // remove special characters
        .replace(/\s+/g, "-") // replace spaces with dashes
        .replace(/-+/g, "-") // collapse double dashes
        .trim();
      setSlugFieldValue(generated);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !slugFieldValue.trim()) {
      alert("Title and URL Slug fields are mandatory!");
      return;
    }

    setSaving(true);
    let finalContent = contentJson;
    if (!finalContent) {
      // Create empty Editor.js model fallback
      finalContent = JSON.stringify({
        blocks: [
          { type: "header", data: { text: title, level: 2 } },
          { type: "paragraph", data: { text: "Write article copy..." } }
        ]
      });
    }

    const payload = {
      title,
      slug: slugFieldValue,
      excerpt,
      category,
      featured_image: featuredImage || RECOMMENDED_STOCK_IMAGES[0].url,
      author_name: authorName,
      published,
      content: finalContent
    };

    try {
      if (action === "new") {
        await blogService.createPost(payload);
      } else if (action === "edit" && editId) {
        await blogService.updatePost(editId, payload);
      }
      navigate("/admin/blog");
    } catch (err) {
      console.error("Failed to commit post details:", err);
      alert("Could not complete database transaction.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, postTitle: string) => {
    if (confirm(`Do you want to permanently delete "${postTitle}"? This cannot be undone.`)) {
      await blogService.deletePost(id);
      const remainingResult = await blogService.getPosts(false);
      setPosts(remainingResult);
    }
  };

  const togglePublishStatus = async (post: BlogPost) => {
    const updatedStatus = !post.published;
    await blogService.updatePost(post.id, { published: updatedStatus });
    const refreshed = await blogService.getPosts(false);
    setPosts(refreshed);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-geist overflow-clip">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none"></div>
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] orange-glow pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] orange-glow pointer-events-none"></div>
      </div>

      <Header onStartProject={onStartProject || (() => navigate("/"))} />

      <main className="z-10 relative pt-28 pb-16 px-6 max-w-5xl mx-auto">
        {loading ? (
          <div className="py-32 text-center">
            <RefreshCw className="w-10 h-10 text-[#F27D26] animate-spin mx-auto mb-4" />
            <p className="text-xs font-mono tracking-widest text-white/40 uppercase">Loading VDS CMS Workspace...</p>
          </div>
        ) : action === "list" ? (
          /* ========================================================================= */
          /*                          ADMIN POSTS LISTING VIEW                         */
          /* ========================================================================= */
          <div className="animate-fade-in pt-4">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#F27D26] uppercase mb-4 py-1 px-3 bg-[#F27D26]/5 rounded-full border border-[#F27D26]/10">
                  <Settings className="w-3.5 h-3.5 animate-spin" />
                  <span>Administrative CMS Terminal</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-white leading-tight">
                  VDS Blog <span className="serif-font text-[#F27D26] italic">Data Repository</span>
                </h1>
                <p className="text-xs text-white/40 mt-1">
                  Manage the public Socio-Digital insights content database loaded on the website.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate("/blog")}
                  className="px-5 py-2.5 bg-white/5 border border-white/10 text-white hover:text-white hover:bg-white/10 text-xs font-semibold rounded-full flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Public View</span>
                </button>
                <button
                  onClick={() => navigate("/admin/blog/new")}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#F27D26] to-[#D56512] hover:brightness-110 text-black font-extrabold uppercase tracking-wider text-[10px] rounded-full flex items-center gap-2 cursor-pointer transition-transform duration-200"
                >
                  <Plus className="w-4 h-4 text-black stroke-[3]" />
                  <span>Write New Article</span>
                </button>
              </div>
            </div>

            {/* Posts Grid List admin view */}
            {posts.length === 0 ? (
              <div className="py-24 text-center border border-white/5 rounded-3xl bg-[#080808]/40">
                <p className="text-xs text-white/30 font-mono tracking-widest uppercase mb-2">No cabinetry articles created yet</p>
                <button
                  onClick={() => navigate("/admin/blog/new")}
                  className="text-xs text-[#F27D26] hover:underline"
                >
                  Bootstrap First Article Post
                </button>
              </div>
            ) : (
              <div className="border border-white/5 bg-[#080808]/55 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-white/5 bg-white/[0.02] text-white/40 font-mono uppercase tracking-widest select-none">
                        <th className="px-6 py-4">Title / Context</th>
                        <th className="px-6 py-4">Category</th>
                        <th className="px-6 py-4">Author</th>
                        <th className="px-6 py-4 text-center">Indexing status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-geist">
                      {posts.map(post => (
                        <tr key={post.id} className="hover:bg-white/[0.01] transition-colors">
                          {/* Title */}
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-10 rounded-lg overflow-hidden border border-white/5 bg-[#000] shrink-0">
                                <img
                                  src={post.featured_image}
                                  alt=""
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="min-w-0">
                                <span className="font-semibold text-white hover:text-[#F27D26] transition-colors leading-relaxed block truncate text-[13px]">
                                  {post.title}
                                </span>
                                <span className="text-[10px] text-white/30 block mt-1 truncate">
                                  /blog/{post.slug}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Category */}
                          <td className="px-6 py-5 text-white/60 font-medium">
                            <span className="px-2.5 py-0.5 bg-white/5 border border-white/5 rounded-lg text-[10px]">
                              {post.category}
                            </span>
                          </td>

                          {/* Author */}
                          <td className="px-6 py-5 text-white/50">{post.author_name}</td>

                          {/* Published Status Toggle */}
                          <td className="px-6 py-5 text-center">
                            <button
                              onClick={() => togglePublishStatus(post)}
                              className={`inline-flex items-center gap-1 py-1 px-3 rounded-full text-[9px] font-mono uppercase tracking-wider border cursor-pointer transition-all ${
                                post.published
                                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                                  : "bg-amber-500/10 border-amber-500/20 text-amber-400"
                              }`}
                            >
                              {post.published ? (
                                <>
                                  <Check className="w-3 h-3" />
                                  <span>PUBLISHED</span>
                                </>
                              ) : (
                                <>
                                  <X className="w-3 h-3" />
                                  <span>DRAFT</span>
                                </>
                              )}
                            </button>
                          </td>

                          {/* Actions */}
                          <td className="px-6 py-5 text-right space-x-2.5 shrink-0 whitespace-nowrap">
                            <button
                              onClick={() => navigate("/blog/" + post.slug)}
                              className="p-1.5 text-white/50 hover:text-[#F27D26] hover:bg-white/5 rounded-lg transition-colors"
                              title="Preview Article Page"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => navigate("/admin/blog/edit/" + post.id)}
                              className="p-1.5 text-white/50 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                              title="Edit Details"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDelete(post.id, post.title)}
                              className="p-1.5 text-white/30 hover:text-red-500 hover:bg-white/5 rounded-lg transition-colors"
                              title="Delete permanently"
                            >
                              <Trash className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* ========================================================================= */
          /*                 CREATE NEW / EDIT EXISTENT POST FORM                      */
          /* ========================================================================= */
          <div className="animate-fade-in pt-4 max-w-4xl mx-auto">
            {/* Top Navigation */}
            <button
              onClick={() => navigate("/admin/blog")}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/50 hover:text-[#F27D26] transition-colors mb-8 cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Database Console</span>
            </button>

            <form onSubmit={handleSave} className="space-y-8 font-geist">
              {/* Form Title */}
              <div className="border-b border-white/5 pb-4">
                <h1 className="text-xl sm:text-2xl font-light tracking-tight text-white flex items-center gap-2">
                  <Layout className="w-5 h-5 text-[#F27D26]" />
                  <span>{action === "new" ? "Compose New Editorial Piece" : `Modify Post: ${title}`}</span>
                </h1>
                <p className="text-xs text-white/40 mt-1">
                  Draft realistic content specifically suited to South African woodworking and cabinetry niche fields.
                </p>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-white/5">
                {/* Left hand Side meta */}
                <div className="md:col-span-8 space-y-5">
                  {/* Title field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-white/50 flex items-center gap-1">
                      <span>Article Title</span>
                      <span className="text-[#F27D26]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="e.g. Master Wood Splicing for High-End Sandton Kitchen Renovators"
                      className="w-full bg-[#080808]/80 border border-white/10 hover:border-white/20 px-4 py-3 text-sm rounded-xl text-white placeholder-white/30 outline-none focus:border-[#F27D26] transition-colors"
                    />
                  </div>

                  {/* Excerpt Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-white/50">
                      Intro Excerpt (Summarized)
                    </label>
                    <textarea
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      rows={2}
                      placeholder="Summary/pitch explaining what the carpenter or joinery audience will learn."
                      className="w-full bg-[#080808]/80 border border-white/10 hover:border-white/20 p-4 text-xs rounded-xl text-white placeholder-white/30 outline-none focus:border-[#F27D26] transition-colors resize-none font-light leading-relaxed"
                    />
                  </div>

                  {/* Featured Image input and recommender showcase */}
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-white/50">
                        Featured Image URL
                      </label>
                      <input
                        type="url"
                        value={featuredImage}
                        onChange={(e) => setFeaturedImage(e.target.value)}
                        placeholder="https://images.unsplash.com/photo-..."
                        className="w-full bg-[#080808]/80 border border-white/10 hover:border-white/20 px-4 py-2.5 text-xs rounded-xl text-white placeholder-white/30 outline-none focus:border-[#F27D26]"
                      />
                    </div>

                    {/* Stock suggestions assistant */}
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-white/30 block mb-2 select-none">
                        ✦ Recommended Showroom Stock suggestions
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {RECOMMENDED_STOCK_IMAGES.map((img, i) => (
                          <div
                            key={i}
                            onClick={() => setFeaturedImage(img.url)}
                            className={`group cursor-pointer rounded-xl overflow-hidden border p-1 bg-black transition-all ${
                              featuredImage === img.url
                                ? "border-[#F27D26] shadow-[0_0_8px_rgba(242,125,38,0.2)]"
                                : "border-white/5 hover:border-white/15"
                            }`}
                          >
                            <div className="aspect-[4/3] rounded-lg overflow-hidden shrink-0 relative bg-neutral-900">
                              <img
                                src={img.url}
                                alt=""
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-105 duration-300"
                              />
                            </div>
                            <span className="text-[9px] font-mono block mt-1 px-1 text-white/40 truncate text-center group-hover:text-white transition-colors">
                              {img.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right hand Side parameter details */}
                <div className="md:col-span-4 bg-[#080808]/30 border border-white/5 p-5 rounded-2xl h-fit space-y-4">
                  <h3 className="text-xs font-mono tracking-widest text-[#F27D26] uppercase pb-2 border-b border-white/5">
                    Metadata metrics
                  </h3>

                  {/* Category Field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-white/40">Socio Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-black border border-white/10 text-xs rounded-xl px-3 py-2 text-white/90 outline-none focus:border-[#F27D26]"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat} className="bg-black text-white">{cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Slug Field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-white/40 flex items-center gap-1">
                      <span>URL Path Slug</span>
                      <span className="text-[#F27D26]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={slugFieldValue}
                      onChange={(e) => setSlugFieldValue(e.target.value)}
                      placeholder="e.g. customized-oak-cabinet-leads"
                      className="w-full bg-black border border-white/10 text-xs rounded-xl px-3 py-2 text-white/80 outline-none focus:border-[#F27D26] font-mono"
                    />
                  </div>

                  {/* Author Field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-white/40">Article Author</label>
                    <input
                      type="text"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="e.g. Chris van der Merwe"
                      className="w-full bg-black border border-white/10 text-xs rounded-xl px-3 py-2 text-white/80 outline-none"
                    />
                  </div>

                  {/* Published Toggle checkbox */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-white/40">Indexing ready (Publish)</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={published}
                        onChange={(e) => setPublished(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white/40 after:border-white/10 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#F27D26] peer-checked:after:bg-black peer-checked:after:border-transparent"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Rich Block Editor Panel */}
              <div className="bg-[#080808]/30 border border-white/5 p-6 rounded-3xl">
                <BlogEditor
                  initialContentJson={contentJson}
                  onChange={(blocksJson) => setContentJson(blocksJson)}
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/admin/blog")}
                  className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors text-xs font-semibold cursor-pointer"
                >
                  Discard Code
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#F27D26] to-[#D56512] hover:brightness-110 disabled:opacity-50 text-black font-extrabold uppercase tracking-wider text-[10px] rounded-full transition-all cursor-pointer flex items-center gap-1.5 shadow-lg shadow-[#F27D26]/10"
                >
                  <Save className="w-3.5 h-3.5 text-black stroke-[3]" />
                  <span>{saving ? "Saving Post..." : "Save Details to CMS"}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
