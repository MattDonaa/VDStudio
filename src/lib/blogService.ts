import { getSupabase } from "./supabase";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // JSON string of Editor.js state: { blocks: [...] }
  featured_image: string;
  category: string;
  author_name: string;
  published: boolean;
  created_at: string;
  published_at?: string;
  read_time?: string;
  featured_image_url?: string;
  content_json?: any;
  status?: string;
  updated_at?: string;
  seo_title?: string;
  meta_description?: string;
  medium_url?: string;
  facebook_post_url?: string;
  x_post_url?: string;
  linkedin_post_url?: string;
}

// 3 High-quality premium South African cabinetry and digital marketing seed posts
const SEED_POSTS: BlogPost[] = [
  {
    id: "seed-1",
    title: "How to Turn Kitchen Cabinet Enquiries into High-Ticket Custom Commissions",
    slug: "kitchen-cabinet-enquiries-high-ticket-commissions",
    excerpt: "Why traditional brochure websites fail South African cabinetry studios, and the exact lead-qualification pipeline that filters out low-budget tire-kickers.",
    category: "Lead Generation",
    featured_image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    author_name: "Chris van der Merwe",
    published: true,
    created_at: "2026-06-10T10:00:00Z",
    published_at: "2026-06-11T08:00:00Z",
    read_time: "5 min read",
    content: JSON.stringify({
      blocks: [
        {
          type: "header",
          data: {
            text: "Why Standard brochure Websites Cost Carpenters Thousands in Lost Commissions",
            level: 2
          }
        },
        {
          type: "paragraph",
          data: {
            text: "Most carpentry and built-in cupboard companies in South Africa list their services on a basic website and hope for the best. They display a handful of gallery pictures, put up an 'Inquire Now' button, and get flooded with people asking for 'cheap kitchen refacing' or 'R15,000 wardrobe setups.'"
          }
        },
        {
          type: "paragraph",
          data: {
            text: "This wastes your valuable time. Veneer Digital Studio's custom lead systems qualify prospects before they reach your phone. We gather dimensions, budget expectations, and wood preferences automatically, sorting real commissions from low-margin DIY leads."
          }
        },
        {
          type: "header",
          data: {
            text: "The Three pillars of Kitchen Lead Qualification",
            level: 3
          }
        },
        {
          type: "paragraph",
          data: {
            text: "To build a brand that captures high-budget projects (R150k - R500k+) in areas like Constantia, Steyn City, or Umhlanga Rocks, your digital presence must focus on three essential points:"
          }
        },
        {
          type: "list",
          data: {
            style: "ordered",
            items: [
              "<strong>Visual Authority:</strong> Showing details instead of raw boards. Your website must spotlight joinery craftsmanship, woodgrain finishes, and high-quality runners (Grass, Blum).",
              "<strong>Friction-Balanced Forms:</strong> Asking for budget brackets and installation timelines to filter projects naturally.",
              "<strong>WhatsApp Conversion Paths:</strong> Directing qualified leads from the form straight to a descriptive chat so they can't slip away."
            ]
          }
        }
      ]
    })
  },
  {
    id: "seed-2",
    title: "Selecting Premium Wood Veneers: A Joiner's Guide to South African Hardwoods",
    slug: "selecting-wood-veneers-south-african-hardwoods",
    excerpt: "From Solid Oak and Kiaat to Walnut veneers—how displaying lumber details on your website establishes premium luxury positioning.",
    category: "Craftsmanship",
    featured_image: "https://images.unsplash.com/photo-1666003449012-61951d621555?q=80&w=1200&auto=format&fit=crop",
    author_name: "Dieter du Plessis",
    published: true,
    created_at: "2026-06-12T09:15:00Z",
    published_at: "2026-06-12T14:30:00Z",
    read_time: "4 min read",
    content: JSON.stringify({
      blocks: [
        {
          type: "header",
          data: {
            text: "The Premium Value of Material Display",
            level: 2
          }
        },
        {
          type: "paragraph",
          data: {
            text: "When a homeowner decides to remodel their kitchen, they aren't just buying cupboards. They are buying an experience of space. If your portfolio displays unnamed MDF boards, customers will price-shop you against flat-pack retailers."
          }
        },
        {
          type: "paragraph",
          data: {
            text: "But when your website educates them on the difference between quarter-cut Kiaat, book-matched American Walnut, and durable Solid Oak, you establish yourself as an artisan wood sculptor. You command R250,000+ per project because your online catalogue proves the value."
          }
        },
        {
          type: "header",
          data: {
            text: "Sourcing and SEO alignment on Wood Types",
            level: 3
          }
        },
        {
          type: "paragraph",
          data: {
            text: "By referencing local woodworking keywords naturally inside your project specs, you also win local rankings. Homeowners in Pretoria East, Sandton, and Stellenbosch search specifically for 'custom solid wood furniture' or 'luxury cabinetry builders'. Aligning materials in your CMS builds dual value—expert education and flawless local search visibility."
          }
        }
      ]
    })
  },
  {
    id: "seed-3",
    title: "The South African Local SEO Blueprint: Dominating Luxury Cabinetry Keywords",
    slug: "south-african-local-seo-blueprint-cabinetry-keywords",
    excerpt: "Step-by-step metadata, nesting schemas, and city targeting secrets that put your cabinetry studio in front of high-end home developments.",
    category: "Local SEO",
    featured_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    author_name: "Chris van der Merwe",
    published: true,
    created_at: "2026-06-14T08:00:00Z",
    published_at: "2026-06-14T11:00:00Z",
    read_time: "6 min read",
    content: JSON.stringify({
      blocks: [
        {
          type: "header",
          data: {
            text: "How Premium Local SEO Powers Cabinetry Showrooms",
            level: 2
          }
        },
        {
          type: "paragraph",
          data: {
            text: "Unlike a fast-food chain, a bespoke shopfitting or cabinetry studio relies on high-ticket, local contracts. You don't need millions of global visitors. You need 10 to 15 serious architects, interior designers, or luxury homeowners from Sandton, Constantia, Pretoria, or Stellenbosch searching for top-tier cabinets this month."
          }
        },
        {
          type: "paragraph",
          data: {
            text: "Nesting customized 'LocalBusiness' schemas specifying SA cities (Johannesburg, Knysna, Pretoria) inside your HTML structure alerts Googlebot that you serve these exact metros, displaying your workshop precisely when luxury renovations are planned."
          }
        }
      ]
    })
  }
];

// Helper to interact with LocalStorage
function getLocalPosts(): BlogPost[] {
  const postsJson = localStorage.getItem("vds_blog_posts");
  if (!postsJson) {
    localStorage.setItem("vds_blog_posts", JSON.stringify(SEED_POSTS));
    return SEED_POSTS;
  }
  try {
    return JSON.parse(postsJson);
  } catch (err) {
    console.error("Failed to parse local posts", err);
    return SEED_POSTS;
  }
}

function saveLocalPosts(posts: BlogPost[]) {
  localStorage.setItem("vds_blog_posts", JSON.stringify(posts));
}

function mapToBlogPost(item: any): BlogPost {
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt || "",
    category: item.category || "General",
    featured_image: item.featured_image_url || item.featured_image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    featured_image_url: item.featured_image_url || item.featured_image,
    content: typeof item.content_json === "string" ? item.content_json : JSON.stringify(item.content_json || { blocks: [] }),
    content_json: item.content_json || null,
    author_name: item.author_name || "Veneer Digital Studio",
    published: item.status === "published" || !!item.published,
    status: item.status || (item.published ? "published" : "draft"),
    published_at: item.published_at || item.created_at,
    created_at: item.created_at,
    updated_at: item.updated_at,
    read_time: item.read_time || "4 min read",
    medium_url: item.medium_url,
    facebook_post_url: item.facebook_post_url,
    x_post_url: item.x_post_url,
    linkedin_post_url: item.linkedin_post_url
  };
}

export const blogService = {
  // Get all blog posts
  async getPosts(onlyPublished: boolean = true): Promise<BlogPost[]> {
    const supabase = getSupabase();
    if (supabase) {
      try {
        let query = supabase
          .from("blog_posts")
          .select("*");
        
        if (onlyPublished) {
          query = query.eq("status", "published");
        }
        
        // Order by published_at descending
        query = query.order("published_at", { ascending: false });

        const { data, error } = await query;
        if (error) {
          console.error("Supabase blog fetch error:", error);
        } else if (data) {
          console.log("Supabase blog posts:", data);
          if (data.length > 0) {
            return data.map(mapToBlogPost);
          }
        }
      } catch (err) {
        console.error("Supabase fetch failed, falling back to LocalStorage:", err);
      }
    }

    // Fallback LocalStorage Engine
    const posts = getLocalPosts();
    const mapped = posts.map(mapToBlogPost);
    return onlyPublished ? mapped.filter(p => p.published) : mapped;
  },

  // Get post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const supabase = getSupabase();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", slug)
          .maybeSingle();

        if (error) {
          console.error("Supabase single fetch error:", error);
        } else if (data) {
          console.log("Supabase blog post by slug:", data);
          return mapToBlogPost(data);
        }
      } catch (err) {
        console.error("Supabase fetch by slug failed:", err);
      }
    }

    const posts = getLocalPosts();
    const found = posts.find(p => p.slug === slug);
    return found ? mapToBlogPost(found) : null;
  },

  // Get post by id
  async getPostById(id: string): Promise<BlogPost | null> {
    const supabase = getSupabase();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("id", id)
          .maybeSingle();

        if (error) {
          console.error("Supabase getPostById fetch error:", error);
        } else if (data) {
          return mapToBlogPost(data);
        }
      } catch (err) {
        console.error("Supabase single get failed:", err);
      }
    }

    const posts = getLocalPosts();
    const found = posts.find(p => p.id === id);
    return found ? mapToBlogPost(found) : null;
  },

  // Create post
  async createPost(postInput: Omit<BlogPost, "id" | "created_at">): Promise<BlogPost> {
    const rawPostObj: any = {
      title: postInput.title,
      slug: postInput.slug,
      excerpt: postInput.excerpt,
      category: postInput.category,
      featured_image_url: postInput.featured_image_url || postInput.featured_image,
      content_json: postInput.content_json || (postInput.content ? JSON.parse(postInput.content) : null),
      status: postInput.status || (postInput.published ? "published" : "draft"),
      published_at: postInput.published_at || (postInput.published ? new Date().toISOString() : null)
    };

    const supabase = getSupabase();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .insert(rawPostObj)
          .select()
          .single();
        if (error) {
          console.error("Supabase write failed:", error);
        } else if (data) {
          return mapToBlogPost(data);
        }
      } catch (err) {
        console.error("Supabase create failed:", err);
      }
    }

    // fallback write to localstorage
    const newPost: BlogPost = {
      ...postInput,
      id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substr(2, 9),
      created_at: new Date().toISOString(),
      published_at: postInput.published ? new Date().toISOString() : undefined,
      read_time: postInput.read_time || "4 min read"
    };
    const posts = getLocalPosts();
    posts.unshift(newPost);
    saveLocalPosts(posts);
    return mapToBlogPost(newPost);
  },

  // Update post
  async updatePost(id: string, updatedFields: Partial<BlogPost>): Promise<BlogPost> {
    const dbUpdates: any = {};
    if (updatedFields.title !== undefined) dbUpdates.title = updatedFields.title;
    if (updatedFields.slug !== undefined) dbUpdates.slug = updatedFields.slug;
    if (updatedFields.excerpt !== undefined) dbUpdates.excerpt = updatedFields.excerpt;
    if (updatedFields.category !== undefined) dbUpdates.category = updatedFields.category;
    if (updatedFields.featured_image_url !== undefined) dbUpdates.featured_image_url = updatedFields.featured_image_url;
    if (updatedFields.featured_image !== undefined) dbUpdates.featured_image_url = updatedFields.featured_image;
    if (updatedFields.content_json !== undefined) dbUpdates.content_json = updatedFields.content_json;
    if (updatedFields.content !== undefined) {
      try {
        dbUpdates.content_json = JSON.parse(updatedFields.content);
      } catch (e) {
        dbUpdates.content_json = updatedFields.content;
      }
    }
    if (updatedFields.published !== undefined) {
      dbUpdates.status = updatedFields.published ? "published" : "draft";
    }
    if (updatedFields.status !== undefined) {
      dbUpdates.status = updatedFields.status;
    }
    if (updatedFields.published_at !== undefined) {
      dbUpdates.published_at = updatedFields.published_at;
    }

    const supabase = getSupabase();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .update(dbUpdates)
          .eq("id", id)
          .select()
          .single();
        if (error) {
          console.error("Supabase update query failed:", error);
        } else if (data) {
          return mapToBlogPost(data);
        }
      } catch (err) {
        console.error("Supabase update failed:", err);
      }
    }

    const posts = getLocalPosts();
    const idx = posts.findIndex(p => p.id === id);
    if (idx === -1) throw new Error("Blog post not found to update");
    
    const updatedPost = {
      ...posts[idx],
      ...updatedFields,
      published_at: updatedFields.published && !posts[idx].published_at 
        ? new Date().toISOString() 
        : updatedFields.published === false 
          ? undefined 
          : posts[idx].published_at || updatedFields.published_at
    };

    posts[idx] = updatedPost;
    saveLocalPosts(posts);
    return mapToBlogPost(updatedPost);
  },

  // Delete post
  async deletePost(id: string): Promise<boolean> {
    const supabase = getSupabase();
    if (supabase) {
      try {
        const { error } = await supabase.from("blog_posts").delete().eq("id", id);
        if (!error) return true;
        console.error("Supabase delete failed:", error);
      } catch (err) {
        console.error("Supabase delete connection failed:", err);
      }
    }

    const posts = getLocalPosts();
    const remaining = posts.filter(p => p.id !== id);
    saveLocalPosts(remaining);
    return true;
  }
};
