"use client";

import React, { useState } from "react";
import { AI_LAB_TOOLS, AiTool } from "@/data/portfolioData";
import { soundManager } from "./SoundEffects";
import {
  Cpu,
  Sparkles,
  Zap,
  Code2,
  Terminal,
  Search,
  Workflow,
  Network,
  Layers,
  Bot,
  CheckCircle2,
  Sliders,
} from "lucide-react";

export default function AiLab() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalTool, setActiveModalTool] = useState<AiTool | null>(null);

  const categories = [
    "All",
    "Frontier LLM",
    "Code Intelligence",
    "Agents & Reasoning",
    "Automation & Pipelines",
  ];

  const filteredTools =
    selectedCategory === "All"
      ? AI_LAB_TOOLS
      : AI_LAB_TOOLS.filter((t) => t.category === selectedCategory);

  const getToolIcon = (name: string) => {
    switch (name) {
      case "ChatGPT (GPT-4o)":
        return Bot;
      case "Claude 3.5 Sonnet":
        return Sparkles;
      case "Gemini 2.5 Pro":
        return Cpu;
      case "Groq (Llama 3 / 3.3)":
        return Zap;
      case "Cursor":
        return Code2;
      case "Google AI Studio":
        return Terminal;
      case "Perplexity AI":
        return Search;
      case "n8n":
        return Workflow;
      case "Zapier & Make":
        return Network;
      default:
        return Layers;
    }
  };

  return (
    <section id="ailab" className="relative py-24 bg-[#06080e] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Cpu size={13} />
            <span>AI COMMAND CENTER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            AI Research & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Automation Lab
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Personally evaluated over <span className="text-cyan-300 font-mono font-bold">60+ AI tools</span> to distill what genuinely accelerates engineering velocity, automated reasoning, and enterprise productivity.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                soundManager.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-violet-600 text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Floating Tool Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const Icon = getToolIcon(tool.name);
            return (
              <div
                key={tool.name}
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => {
                  soundManager.playClick();
                  setActiveModalTool(tool);
                }}
                className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-violet-500/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)]"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 text-cyan-400 group-hover:scale-110 group-hover:text-violet-300 transition-all">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300">
                      {tool.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mb-4">
                    {tool.tagline}
                  </p>

                  {/* Strengths */}
                  <div className="mb-4">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      Key Strengths
                    </div>
                    <div className="space-y-1.5">
                      {tool.strengths.slice(0, 2).map((s, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Workflow Experience Quote */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-300 leading-relaxed mb-4">
                    <span className="text-cyan-400 font-mono font-semibold">Workflow: </span>
                    {tool.workflowExperience}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Category: {tool.category}</span>
                  <span className="text-violet-400 group-hover:translate-x-1 transition-transform">
                    Inspect Specs →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tool Details Modal */}
        {activeModalTool && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
            <div
              className="relative w-full max-w-lg rounded-3xl bg-[#0b0f19] border border-violet-500/40 p-6 sm:p-7 shadow-[0_0_50px_rgba(139,92,246,0.3)] text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-violet-300 px-3 py-1 rounded-full bg-violet-950/50 border border-violet-500/30">
                  {activeModalTool.status} • {activeModalTool.category}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    setActiveModalTool(null);
                  }}
                  className="text-zinc-400 hover:text-white p-1"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {activeModalTool.name}
              </h3>
              <p className="text-xs text-zinc-400 font-mono mb-6">
                {activeModalTool.tagline}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">
                    Core Strengths
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {activeModalTool.strengths.map((s, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">
                    Production Use Cases
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {activeModalTool.useCases.map((u, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">
                    Omkar&apos;s Hands-On Experience
                  </h4>
                  <p className="p-3 rounded-xl bg-black/50 border border-white/10 text-xs text-zinc-300 leading-relaxed">
                    {activeModalTool.workflowExperience}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setActiveModalTool(null);
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-xs transition-opacity hover:opacity-95"
              >
                Close Inspector
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
