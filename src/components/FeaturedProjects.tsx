"use client";

import React, { useState } from "react";
import { FEATURED_PROJECTS, Project } from "@/data/portfolioData";
import { soundManager } from "./SoundEffects";
import {
  Code,
  ExternalLink,
  Layers,
  ArrowUpRight,
  Shield,
  Sparkles,
  Cpu,
  ChevronRight,
} from "lucide-react";

interface FeaturedProjectsProps {
  onSelectProject: (p: Project) => void;
}

export default function FeaturedProjects({ onSelectProject }: FeaturedProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "AI & Full-Stack",
    "Enterprise CRM",
    "AI & Browser",
    "Cyber & Biometrics",
    "Autonomous Agents",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Layers size={13} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Production Systems & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              High-Impact Engineering
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Real products built with resilient architectures, sub-second latency, and role-based access security.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                soundManager.playClick();
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
                activeCategory === cat
                  ? "bg-cyan-500 text-black font-semibold shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                  : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid (Responsive 2 / 3 Column Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => soundManager.playHover()}
              className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] relative overflow-hidden"
            >
              {/* Card Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none rounded-full" />

              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 mb-4 font-mono">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics Highlight Pills */}
                <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-black/40 border border-white/5 mb-6 text-center">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                      <div className="text-xs font-mono font-bold text-cyan-300">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-zinc-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-zinc-400">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      soundManager.playClick();
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                  >
                    <span>Live Platform</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    onSelectProject(project);
                  }}
                  className={`${
                    project.liveUrl ? "flex-1" : "w-full"
                  } flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/[0.05] group-hover:bg-cyan-500/20 border border-white/10 group-hover:border-cyan-400/50 text-white group-hover:text-cyan-200 text-xs font-medium transition-all`}
                >
                  <span>{project.liveUrl ? "Case Study" : "View Architecture & Case Study"}</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
