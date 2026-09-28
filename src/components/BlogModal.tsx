"use client";

import React from "react";
import { BlogPost } from "@/data/portfolioData";
import { soundManager } from "./SoundEffects";
import { X, Calendar, Clock, BookOpen, Share2 } from "lucide-react";

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-cyan-500/40 p-6 sm:p-10 shadow-[0_0_50px_rgba(0,240,255,0.2)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.15] border border-white/10 text-zinc-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Category & Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4 pr-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs font-mono text-zinc-400">
            <Calendar size={13} /> {post.date}
          </span>
          <span className="flex items-center gap-1 text-xs font-mono text-zinc-400">
            <Clock size={13} /> {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
          {post.title}
        </h2>

        {/* Author Byline */}
        <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-8">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold font-mono text-xs">
            OS
          </div>
          <div>
            <div className="text-sm font-bold text-white">Omkar Saroj</div>
            <div className="text-xs text-zinc-400 font-mono">
              AI Product Builder • Full Stack Developer
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
          {post.content.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 mb-8">
          {post.tags.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-black/50 border border-white/10 text-xs font-mono text-cyan-300"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-500">
            Written by Omkar Saroj • Technical Thought Leadership
          </span>
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
}
