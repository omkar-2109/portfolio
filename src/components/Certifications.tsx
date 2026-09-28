"use client";

import React, { useState } from "react";
import { CERTIFICATIONS, Certification } from "@/data/portfolioData";
import { soundManager } from "./SoundEffects";
import {
  Award,
  CheckCircle,
  Shield,
  Cloud,
  BarChart,
  ExternalLink,
} from "lucide-react";

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Cybersecurity & SecOps",
    "Cloud & Infrastructure",
    "Data & Business Analytics",
  ];

  const filteredCerts =
    activeCategory === "All"
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Cybersecurity & SecOps":
        return Shield;
      case "Cloud & Infrastructure":
        return Cloud;
      default:
        return BarChart;
    }
  };

  return (
    <section id="certifications" className="relative py-24 bg-[#06080e] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono mb-3">
            <Award size={13} />
            <span>INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Certifications & <br />
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Verified Badges
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Rigorous hands-on labs and certifications across Google Cloud SecOps, Microsoft Sentinel, Enterprise Data Analytics, and Cisco Cybersecurity.
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
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat
                  ? "bg-violet-600 text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => {
            const Icon = getCategoryIcon(cert.category);
            return (
              <div
                key={cert.id}
                onMouseEnter={() => soundManager.playHover()}
                className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-violet-500/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle size={11} /> {cert.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {cert.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4">
                    <Icon size={14} className="text-violet-400" />
                    <span>{cert.category}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[10px] font-mono text-zinc-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>ID: {cert.badgeId || "VERIFIED"}</span>
                  <span className="text-violet-400 flex items-center gap-1">
                    Credentialed
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
