"use client";

import React from "react";
import { HACKATHONS } from "@/data/portfolioData";
import { soundManager } from "./SoundEffects";
import {
  Trophy,
  Flame,
  Calendar,
  Sparkles,
  MapPin,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export default function Hackathons() {
  return (
    <section id="hackathons" className="relative py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
            <Trophy size={13} />
            <span>COMPETITIVE ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Hackathons & <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              Engineering Breakthroughs
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Shipping autonomous agents, enterprise systems, and real-time platforms under high-pressure 36 to 48-hour competitive sprints.
          </p>
        </div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HACKATHONS.map((hack, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundManager.playHover()}
              className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-amber-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none rounded-full" />

              <div>
                {/* Event & Year */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300">
                    {hack.event}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                    <Calendar size={12} /> {hack.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {hack.title}
                </h3>
                
                {/* Role & Result */}
                <div className="flex flex-col gap-1 mb-4">
                  <div className="text-xs font-mono text-zinc-300">
                    Role: <span className="text-cyan-300">{hack.role}</span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 size={13} />
                    <span>{hack.result}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {hack.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {hack.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[10px] font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
