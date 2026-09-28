"use client";

import React, { useState } from "react";
import { BLOG_POSTS, BlogPost } from "@/data/portfolioData";
import { soundManager } from "./SoundEffects";
import BlogModal from "./BlogModal";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="relative py-24 bg-[#07090e] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <BookOpen size={13} />
            <span>TECHNICAL THOUGHT LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineering Insights & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Architectural Breakdowns
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Technical writings on scaling multi-agent systems, empirical AI tooling evaluations, and architecting RBAC-governed enterprise software.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => {
                soundManager.playClick();
                setSelectedPost(post);
              }}
              className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    {post.category}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.snippet}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                  <Calendar size={11} /> {post.date}
                </span>
                <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Article <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      </div>
    </section>
  );
}
