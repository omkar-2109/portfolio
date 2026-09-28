"use client";

import React, { useState } from "react";
import { soundManager } from "./SoundEffects";
import { WORK_EXPERIENCES, Experience } from "@/data/portfolioData";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export default function CareerTimeline() {
  const [selectedExp, setSelectedExp] = useState<Experience>(WORK_EXPERIENCES[0]);

  return (
    <section id="timeline" className="relative py-24 bg-[#07090e] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono mb-3">
            <TrendingUp size={13} />
            <span>TRAJECTORY & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            3D Career Timeline & <br />
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Engineering Experience
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            From analyzing enterprise workflows at Turing to engineering production systems and aligning frontier LLM models.
          </p>
        </div>

        {/* Desktop Split View & Mobile Interactive Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline List */}
          <div className="lg:col-span-5 space-y-3">
            {WORK_EXPERIENCES.map((exp) => {
              const isSelected = selectedExp.id === exp.id;
              return (
                <div
                  key={exp.id}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedExp(exp);
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border relative ${
                    isSelected
                      ? "bg-white/[0.08] border-cyan-500/60 shadow-[0_0_20px_rgba(0,240,255,0.15)] translate-x-1"
                      : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                      {exp.company}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 flex items-center justify-between">
                    <span>{exp.role}</span>
                    <ChevronRight
                      size={16}
                      className={`transition-transform ${isSelected ? "text-cyan-400 translate-x-1" : "text-zinc-600"}`}
                    />
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-zinc-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${exp.badgeColor}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Spotlight Card */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none rounded-full" />
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-1 uppercase tracking-wider">
                    <Building2 size={14} />
                    <span>{selectedExp.company}</span>
                    <span>•</span>
                    <span>{selectedExp.location}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {selectedExp.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-xs font-mono text-zinc-300 bg-black/50 px-3 py-1.5 rounded-xl border border-white/10">
                    <Calendar size={13} className="text-cyan-400" />
                    <span>{selectedExp.period}</span>
                  </div>
                  <span className={`px-2.5 py-1 rounded-xl text-xs font-mono border ${selectedExp.badgeColor}`}>
                    {selectedExp.type}
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedExp.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  Key Accomplishments & Responsibilities:
                </div>
                {selectedExp.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded bg-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-zinc-300 text-sm leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skills Involved */}
              <div>
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
                  Technologies & Competencies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-black/50 border border-white/10 text-xs font-mono text-cyan-300 hover:border-cyan-400/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
