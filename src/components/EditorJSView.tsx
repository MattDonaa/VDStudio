import React from "react";

interface EditorBlock {
  type: string;
  data: {
    text?: string;
    level?: number;
    style?: "ordered" | "unordered";
    items?: string[];
    file?: { url: string };
    caption?: string;
    alignment?: "left" | "center" | "right";
  };
}

interface EditorJSViewProps {
  contentJsonString?: string;
  contentJson?: any;
}

export default function EditorJSView({ contentJsonString, contentJson }: EditorJSViewProps) {
  if (!contentJsonString && !contentJson) {
    return <p className="text-white/40 italic text-xs">No article content blocks available.</p>;
  }

  let data: { blocks?: EditorBlock[] } = {};
  if (contentJson) {
    if (typeof contentJson === "string") {
      try {
        data = JSON.parse(contentJson);
      } catch (err) {
        return <div className="text-white/70 leading-relaxed text-sm whitespace-pre-line">{contentJson}</div>;
      }
    } else {
      data = contentJson;
    }
  } else if (contentJsonString) {
    try {
      data = JSON.parse(contentJsonString);
    } catch (err) {
      // If it is just normal plain text/HTML, render it directly
      return <div className="text-white/70 leading-relaxed text-sm whitespace-pre-line">{contentJsonString}</div>;
    }
  }

  const blocks = data?.blocks || [];

  if (blocks.length === 0) {
    return <p className="text-white/40 italic text-xs">This post does not contain any content blocks yet.</p>;
  }

  return (
    <div className="space-y-6 text-white/80 font-geist text-[14px] sm:text-base leading-relaxed tracking-wide">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "header": {
            const level = block.data.level || 2;
            const text = block.data.text || "";
            if (level === 1) {
              return (
                <h1
                  key={idx}
                  className="text-2xl sm:text-3xl font-light text-white tracking-tight mt-8 mb-4 border-l-2 border-[#F27D26] pl-3"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              );
            }
            if (level === 2) {
              return (
                <h2
                  key={idx}
                  className="text-xl sm:text-2xl font-light text-white tracking-tight mt-10 mb-4"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              );
            }
            return (
              <h3
                key={idx}
                className="text-base sm:text-lg font-semibold text-[#F27D26] mt-8 mb-3"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            );
          }

          case "paragraph": {
            const text = block.data.text || "";
            return (
              <p
                key={idx}
                className="leading-relaxed text-white/70 font-light mb-4 text-xs sm:text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            );
          }

          case "list": {
            const isOrdered = block.data.style === "ordered";
            const items = block.data.items || [];
            const Tag = isOrdered ? "ol" : "ul";
            return (
              <Tag
                key={idx}
                className={`pl-5 mb-4 space-y-2 text-xs sm:text-sm text-white/70 ${isOrdered ? "list-decimal" : "list-disc"}`}
              >
                {items.map((item, idy) => (
                  <li key={idy} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </Tag>
            );
          }

          case "image": {
            const url = block.data.file?.url || "";
            const caption = block.data.caption || "";
            return (
              <figure key={idx} className="my-8 text-center bg-[#080808] border border-white/5 rounded-2xl overflow-hidden p-2">
                <img
                  src={url}
                  alt={caption || "VDS Blog image"}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[450px] object-cover rounded-xl"
                />
                {caption && (
                  <figcaption className="text-[11px] text-white/40 mt-3 italic">
                    {caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
