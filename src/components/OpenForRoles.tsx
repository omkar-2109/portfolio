"use client";

import React, { useState } from "react";
import { OPEN_FOR_ROLES, OpenRole } from "@/data/portfolioData";
import { soundManager } from "./SoundEffects";
import {
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Send,
  Zap,
  Shield,
  Layers,
  Code2,
  UserCheck,
} from "lucide-react";

interface OpenForRolesProps {
  onOpenSchedule: (roleTitle?: string) => void;
}

export default function OpenForRoles({ onOpenSchedule }: OpenForRolesProps) {
  const [selectedRole, setSelectedRole] = useState<string>(OPEN_FOR_ROLES[0].id);

  const getRoleIcon = (id: string) => {
    switch (id) {
      case "ai-engineer":
        return Sparkles;
      case "full-stack":
        return Code2;
      case "ai-automation":
        return Zap;
      case "cyber-secops":
        return Shield;
      default:
        return Layers;
    }
  };

  return (
    <section id="roles" className="relative py-24 bg-[#06080e] border-y border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
            <UserCheck size={14} className="text-emerald-400" />
            <span>RECRUITER & FOUNDER MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Open For High-Impact Roles & <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Target Position Eligibility
            </span>
          </h2>

          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Based on shipped production platforms, 60+ tested AI tools, model evaluation roles, and defensive cybersecurity certifications, here is where my skillset delivers immediate value.
          </p>

          <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Eligible for Full-Time, High-Growth Startup, or Contract Engagements</span>
          </div>
        </div>

        {/* Roles Grid (5 High-Impact Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPEN_FOR_ROLES.map((role) => {
            const Icon = getRoleIcon(role.id);
            const isSelected = selectedRole === role.id;

            return (
              <div
                key={role.id}
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedRole(role.id);
                }}
                className={`p-6 sm:p-7 rounded-3xl backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? "bg-white/[0.07] border-cyan-400/60 shadow-[0_10px_40px_rgba(0,240,255,0.15)] scale-[1.01]"
                    : "bg-gradient-to-b from-white/[0.03] to-white/[0.01] border-white/10 hover:border-cyan-500/40"
                }`}
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/10 pointer-events-none rounded-full" />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon size={18} />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                        {role.badge}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                      {role.fitScore}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {role.description}
                  </p>

                  {/* Matched Capabilities */}
                  <div className="mb-5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Key Competencies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {role.matchedCapabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-black/50 border border-white/5 text-[11px] font-mono text-zinc-300"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Production Evidence */}
                  <div className="mb-6 space-y-1.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Production Proof & Artifacts
                    </div>
                    {role.evidence.map((ev, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{ev}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    soundManager.playClick();
                    onOpenSchedule(role.title);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 hover:from-cyan-500 hover:to-blue-600 border border-cyan-500/40 hover:border-transparent text-cyan-200 hover:text-white text-xs font-semibold transition-all group-hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]"
                >
                  <span>Discuss This Role</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
