"use client";

import React, { useState } from "react";
import { TECH_STACK } from "@/data/portfolioData";
import { soundManager } from "./SoundEffects";
import {
  Code,
  Globe,
  Server,
  Database,
  Sparkles,
  Shield,
  Wrench,
  Search,
  Check,
} from "lucide-react";

export default function TechStackUniverse() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { title: "Languages", icon: Code, skills: TECH_STACK.languages, color: "text-cyan-400 border-cyan-500/30" },
    { title: "Frontend", icon: Globe, skills: TECH_STACK.frontend, color: "text-blue-400 border-blue-500/30" },
    { title: "Backend & Systems", icon: Server, skills: TECH_STACK.backend, color: "text-violet-400 border-violet-500/30" },
    { title: "Databases & Storage", icon: Database, skills: TECH_STACK.databases, color: "text-purple-400 border-purple-500/30" },
    { title: "AI & LLM Engineering", icon: Sparkles, skills: TECH_STACK.aiAutomation, color: "text-emerald-400 border-emerald-500/30" },
    { title: "Cybersecurity & SecOps", icon: Shield, skills: TECH_STACK.cyberSecurity, color: "text-teal-400 border-teal-500/30" },
    { title: "DevOps & Tools", icon: Wrench, skills: TECH_STACK.devopsTools, color: "text-amber-400 border-amber-500/30" },
  ];

  return (
    <section id="skills" className="relative py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Code size={13} />
            <span>TECHNICAL MULTIVERSE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tech Stack & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Engineered Competencies
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            A comprehensive overview of programming languages, modern frameworks, cloud architectures, and AI systems in my production arsenal.
          </p>

          {/* Live Skill Search Bar */}
          <div className="relative mt-8 w-full max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Filter technologies (e.g. Next.js, Python, Chronicle)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400/60 transition-colors backdrop-blur-md"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const matchingSkills = cat.skills.filter((s) =>
              s.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && matchingSkills.length === 0) return null;

            return (
              <div
                key={idx}
                onMouseEnter={() => soundManager.playHover()}
                className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-xl bg-black/50 border ${cat.color} group-hover:scale-110 transition-transform`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {matchingSkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase())
                            ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                            : "bg-white/[0.03] text-zinc-300 border border-white/5 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 text-[10px] font-mono text-zinc-400">
                  {matchingSkills.length} competencies registered
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
