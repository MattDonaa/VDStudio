import { useState, useEffect } from "react";
import { Plus, Trash, ArrowDown, ArrowUp, Type, Heading, List, Image, Sparkles } from "lucide-react";

interface Block {
  type: "header" | "paragraph" | "list" | "image";
  data: {
    text?: string;
    level?: number;
    style?: "ordered" | "unordered";
    items?: string[];
    file?: { url: string };
    caption?: string;
  };
}

interface BlogEditorProps {
  initialContentJson: string;
  onChange: (jsonString: string) => void;
}

export default function BlogEditor({ initialContentJson, onChange }: BlogEditorProps) {
  const [blocks, setBlocks] = useState<Block[]>([]);

  // Initialize
  useEffect(() => {
    if (initialContentJson) {
      try {
        const parsed = JSON.parse(initialContentJson);
        if (parsed && Array.isArray(parsed.blocks)) {
          setBlocks(parsed.blocks);
          return;
        }
      } catch (err) {
        // If it was plain text before, initialize it as a single paragraph block
        if (initialContentJson.trim()) {
          setBlocks([
            {
              type: "paragraph",
              data: { text: initialContentJson }
            }
          ]);
          return;
        }
      }
    }

    // Default seed blocks if empty
    setBlocks([
      {
        type: "header",
        data: { text: "Premium Craftsmanship Headline", level: 2 }
      },
      {
        type: "paragraph",
        data: { text: "Start writing your article content blocks here..." }
      }
    ]);
  }, [initialContentJson]);

  // Sync back to parent
  const updateParent = (currentBlocks: Block[]) => {
    onChange(JSON.stringify({ blocks: currentBlocks }));
  };

  const addBlock = (type: "header" | "paragraph" | "list" | "image") => {
    let newBlock: Block;
    if (type === "header") {
      newBlock = { type, data: { text: "Subheading title", level: 3 } };
    } else if (type === "list") {
      newBlock = { type, data: { style: "unordered", items: ["List item 1"] } };
    } else if (type === "image") {
      newBlock = {
        type,
        data: {
          file: { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" },
          caption: "Beautiful custom wooden kitchen showcase"
        }
      };
    } else {
      newBlock = { type, data: { text: "" } };
    }

    const updated = [...blocks, newBlock];
    setBlocks(updated);
    updateParent(updated);
  };

  const deleteBlock = (index: number) => {
    const updated = blocks.filter((_, idx) => idx !== index);
    setBlocks(updated);
    updateParent(updated);
  };

  const moveBlock = (index: number, direction: "up" | "down") => {
    if (direction === "up" && index === 0) return;
    if (direction === "down" && index === blocks.length - 1) return;

    const targetIndex = direction === "up" ? index - 1 : index + 1;
    const updated = [...blocks];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;

    setBlocks(updated);
    updateParent(updated);
  };

  const updateBlockData = (index: number, field: string, value: any) => {
    const updated = blocks.map((block, idx) => {
      if (idx === index) {
        if (field.startsWith("file.")) {
          return {
            ...block,
            data: {
              ...block.data,
              file: { url: value }
            }
          };
        }
        return {
          ...block,
          data: {
            ...block.data,
            [field]: value
          }
        };
      }
      return block;
    });
    setBlocks(updated);
    updateParent(updated);
  };

  const updateListItem = (blockIdx: number, itemIdx: number, value: string) => {
    const updated = blocks.map((block, idx) => {
      if (idx === blockIdx && block.type === "list") {
        const items = [...(block.data.items || [])];
        items[itemIdx] = value;
        return {
          ...block,
          data: {
            ...block.data,
            items
          }
        };
      }
      return block;
    });
    setBlocks(updated);
    updateParent(updated);
  };

  const addListItem = (blockIdx: number) => {
    const updated = blocks.map((block, idx) => {
      if (idx === blockIdx && block.type === "list") {
        return {
          ...block,
          data: {
            ...block.data,
            items: [...(block.data.items || []), "New list item"]
          }
        };
      }
      return block;
    });
    setBlocks(updated);
    updateParent(updated);
  };

  const removeListItem = (blockIdx: number, itemIdx: number) => {
    const updated = blocks.map((block, idx) => {
      if (idx === blockIdx && block.type === "list") {
        const items = (block.data.items || []).filter((_, i) => i !== itemIdx);
        return {
          ...block,
          data: {
            ...block.data,
            items
          }
        };
      }
      return block;
    });
    setBlocks(updated);
    updateParent(updated);
  };

  return (
    <div className="space-y-6 font-geist text-white">
      <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-[#F27D26] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Editor.js Rich Content Blocks</span>
          </h3>
          <p className="text-[11px] text-white/40 mt-1">
            Build premium editorial pieces by managing modular headings, paragraphs, bullet points, and photos.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {blocks.map((block, idx) => (
          <div
            key={idx}
            className="group relative bg-[#0a0a0a]/80 border border-white/5 hover:border-white/10 rounded-2xl p-4 sm:p-5 transition-all duration-300"
          >
            {/* Action Bar */}
            <div className="absolute right-3 top-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                type="button"
                onClick={() => moveBlock(idx, "up")}
                disabled={idx === 0}
                className="p-1 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors disabled:opacity-20"
                title="Move block up"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => moveBlock(idx, "down")}
                disabled={idx === blocks.length - 1}
                className="p-1 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors disabled:opacity-20"
                title="Move block down"
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => deleteBlock(idx)}
                className="p-1 text-red-500/65 hover:text-red-500 bg-red-500/5 hover:bg-red-500/10 rounded-md transition-colors"
                title="Delete block"
              >
                <Trash className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Block Icon Label */}
            <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest uppercase text-white/30 mb-3 select-none">
              {block.type === "header" && (
                <>
                  <Heading className="w-3 h-3 text-[#F27D26]" />
                  <span>Subheading (H{block.data.level})</span>
                </>
              )}
              {block.type === "paragraph" && (
                <>
                  <Type className="w-3 h-3 text-[#F27D26]/70" />
                  <span>Paragraph Text</span>
                </>
              )}
              {block.type === "list" && (
                <>
                  <List className="w-3 h-3 text-cyan-400" />
                  <span>List Group</span>
                </>
              )}
              {block.type === "image" && (
                <>
                  <Image className="w-3 h-3 text-emerald-400" />
                  <span>Showcase Gallery Image</span>
                </>
              )}
            </div>

            {/* Block Input Content */}
            {block.type === "header" && (
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  value={block.data.level || 3}
                  onChange={(e) => updateBlockData(idx, "level", parseInt(e.target.value))}
                  className="w-full sm:w-28 text-xs font-semibold bg-white/5 border border-white/10 rounded-xl px-2.5 py-2 text-white/80 focus:border-[#F27D26] outline-none"
                >
                  <option value={2} className="bg-black text-white">Heading 2</option>
                  <option value={3} className="bg-black text-white">Heading 3</option>
                </select>
                <input
                  type="text"
                  value={block.data.text || ""}
                  onChange={(e) => updateBlockData(idx, "text", e.target.value)}
                  placeholder="Enter subheading title..."
                  className="flex-1 text-xs bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/30 focus:border-[#F27D26] outline-none transition-color"
                />
              </div>
            )}

            {block.type === "paragraph" && (
              <textarea
                value={block.data.text || ""}
                onChange={(e) => updateBlockData(idx, "text", e.target.value)}
                placeholder="Write clear, engaging paragraph copy (HTML like <b>bold</b> or <a>links</a> are supported)..."
                rows={3}
                className="w-full text-xs bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-4 text-white/90 placeholder-white/30 focus:border-[#F27D26] outline-none transition-color resize-y font-light leading-relaxed"
              />
            )}

            {block.type === "list" && (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <select
                    value={block.data.style || "unordered"}
                    onChange={(e) => updateBlockData(idx, "style", e.target.value)}
                    className="text-xs bg-white/5 border border-white/10 rounded-xl px-2.5 py-1 text-white/70 focus:border-[#F27D26] outline-none"
                  >
                    <option value="unordered" className="bg-black text-white">Unordered Bullets</option>
                    <option value="ordered" className="bg-black text-white">Ordered Numbers</option>
                  </select>
                </div>
                <div className="space-y-2 pl-3">
                  {(block.data.items || []).map((item, idy) => (
                    <div key={idy} className="flex items-center gap-2">
                      <span className="text-white/30 text-[10px] font-mono">
                        {block.data.style === "ordered" ? `${idy + 1}.` : "✦"}
                      </span>
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => updateListItem(idx, idy, e.target.value)}
                        placeholder="Bullet list point..."
                        className="flex-1 text-xs bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-3 py-1.5 text-white/80 focus:border-[#F27D26] outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => removeListItem(idx, idy)}
                        className="p-1.5 text-red-500/40 hover:text-red-500 bg-white/5 hover:bg-white/10 rounded-lg"
                        title="Remove point"
                      >
                        <Trash className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addListItem(idx)}
                    className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider font-semibold text-[#F27D26]/75 hover:text-[#F27D26] transition-colors mt-1 hover:underline"
                  >
                    <Plus className="w-3 h-3" />
                    <span>ADD LIST ITEM</span>
                  </button>
                </div>
              </div>
            )}

            {block.type === "image" && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label className="text-[10px] text-white/40 uppercase font-mono">Unsplash/External Image URL</label>
                    <input
                      type="url"
                      value={block.data.file?.url || ""}
                      onChange={(e) => updateBlockData(idx, "file.url", e.target.value)}
                      placeholder="https://images.unsplash.com/photo-..."
                      className="w-full text-xs bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-3 py-2 text-white/80 focus:border-[#F27D26] outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-white/40 uppercase font-mono">Image Description Caption</label>
                    <input
                      type="text"
                      value={block.data.caption || ""}
                      onChange={(e) => updateBlockData(idx, "caption", e.target.value)}
                      placeholder="e.g. Red Kiaat wood grain cabinet detailing"
                      className="w-full text-xs bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-3 py-2 text-white/80 focus:border-[#F27D26] outline-none"
                    />
                  </div>
                </div>

                {block.data.file?.url && (
                  <div className="w-24 h-16 rounded-xl overflow-hidden border border-white/10 bg-[#000]">
                    <img
                      src={block.data.file.url}
                      alt="Preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add New Block Controls */}
      <div className="border border-dashed border-white/10 rounded-2xl p-4 sm:p-5 text-center bg-[#070707]/30">
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 block mb-3">
          Insert Content Block
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => addBlock("paragraph")}
            className="px-3 py-2 bg-white/5 border border-white/10 hover:border-[#F27D26]/20 rounded-xl hover:bg-[#F27D26]/5 text-xs font-semibold tracking-wide text-white/70 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Type className="w-3.5 h-3.5 text-[#F27D26]/80" />
            <span>Paragraph</span>
          </button>
          <button
            type="button"
            onClick={() => addBlock("header")}
            className="px-3 py-2 bg-white/5 border border-white/10 hover:border-[#F27D26]/20 rounded-xl hover:bg-[#F27D26]/5 text-xs font-semibold tracking-wide text-white/70 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Heading className="w-3.5 h-3.5 text-[#F27D26]" />
            <span>Subheading</span>
          </button>
          <button
            type="button"
            onClick={() => addBlock("list")}
            className="px-3 py-2 bg-white/5 border border-white/10 hover:border-cyan-400/20 rounded-xl hover:bg-cyan-400/5 text-xs font-semibold tracking-wide text-white/70 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <List className="w-3.5 h-3.5 text-cyan-400" />
            <span>List Group</span>
          </button>
          <button
            type="button"
            onClick={() => addBlock("image")}
            className="px-3 py-2 bg-white/5 border border-white/10 hover:border-emerald-400/20 rounded-xl hover:bg-emerald-400/5 text-xs font-semibold tracking-wide text-white/70 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Image className="w-3.5 h-3.5 text-emerald-400" />
            <span>Image</span>
          </button>
        </div>
      </div>
    </div>
  );
}
