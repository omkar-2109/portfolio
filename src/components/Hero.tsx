"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { soundManager } from "./SoundEffects";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  ArrowRight,
  Download,
  Terminal,
  Shield,
  Sparkles,
  Cpu,
  Layers,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
  onOpenSchedule: () => void;
}

export default function Hero({ onOpenResume, onOpenSchedule }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden bg-radial-vignette">
      {/* Background Accent Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-violet-600/15 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Mission Control Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Next-Gen Full-Stack & AI Product Engineer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.08]">
              OMKAR <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                SAROJ
              </span>
            </h1>

            {/* Positioning Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-zinc-300 mb-4 tracking-wide">
              AI Product Builder <span className="text-cyan-400">•</span> Full Stack Developer <span className="text-cyan-400">•</span> AI Automation Specialist <span className="text-cyan-400">•</span> Cybersecurity Enthusiast
            </p>

            {/* Value Proposition Description */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mb-8 leading-relaxed">
              Based in Mumbai, engineering products at the high-velocity intersection of frontier LLMs, autonomous workflows, full-stack systems, and defensive cybersecurity. Architected and deployed production platforms including <span className="text-cyan-300 font-semibold">PARYATAN</span>, <span className="text-cyan-300 font-semibold">Benefits Business Solutions</span>, and <span className="text-cyan-300 font-semibold">NG Global</span> while evaluating 60+ AI tools and training frontier models at Invisible Technologies and Outlier AI.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={() => soundManager.playClick()}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold text-sm hover:opacity-95 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Featured Projects</span>
                <ArrowRight size={16} />
              </a>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400 text-zinc-200 hover:text-white font-medium text-sm transition-all backdrop-blur-md"
              >
                <Download size={16} className="text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                onClick={() => soundManager.playClick()}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-cyan-300 font-medium text-sm transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Tech Highlights Badge Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-zinc-400">
              <span className="text-zinc-500">Core Arsenal:</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10">Next.js 15</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10">TypeScript</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10">Gemini 2.5 Pro</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10">Groq Llama 3</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10">Chronicle SIEM</span>
            </div>
          </div>

          {/* Right Column: 3D Holographic Avatar Card (Apple Vision Pro Inspired) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div
              className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-violet-500/20 to-transparent shadow-[0_0_50px_rgba(0,240,255,0.15)] transition-transform duration-200 ease-out group"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * -14}deg) rotateY(${mousePos.x * 14}deg)`,
              }}
            >
              {/* Glass Frame Shell */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#0a0e17]/90 border border-white/10 backdrop-blur-2xl flex flex-col justify-between p-4">
                
                {/* Top Holographic Header */}
                <div className="flex items-center justify-between z-20">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>OPERATIONAL • MUMBAI, IN</span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    SEC-ID: OS-2025
                  </div>
                </div>

                {/* Profile Photo Display */}
                <div className="relative w-full h-[76%] rounded-2xl overflow-hidden my-3 border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                  <Image
                    src={PERSONAL_INFO.profilePhoto}
                    alt="Omkar Saroj"
                    fill
                    className="object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-50" />
                  
                  {/* Floating Micro-Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white tracking-wide">Omkar Saroj</p>
                      <p className="text-[10px] text-cyan-300 font-mono">B.E. Computer Science Graduate</p>
                    </div>
                    <div className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
                      Top 1% Builder
                    </div>
                  </div>
                </div>

                {/* Bottom Holographic Telemetry Bar */}
                <div className="grid grid-cols-3 gap-2 text-center z-20">
                  <div className="bg-white/[0.03] border border-white/5 rounded-lg py-1.5 px-1">
                    <div className="text-[10px] font-mono text-zinc-400">TOOLS</div>
                    <div className="text-xs font-bold text-cyan-300">60+ Tested</div>
                  </div>
                  <div className="bg-white/[0.03] border border-white/5 rounded-lg py-1.5 px-1">
                    <div className="text-[10px] font-mono text-zinc-400">SHIPPED</div>
                    <div className="text-xs font-bold text-emerald-300">4+ Platforms</div>
                  </div>
                  <div className="bg-white/[0.03] border border-white/5 rounded-lg py-1.5 px-1">
                    <div className="text-[10px] font-mono text-zinc-400">SECOPS</div>
                    <div className="text-xs font-bold text-violet-300">Chronicle</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1 Bottom: Animated Counters Grid */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {PERSONAL_INFO.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">
                {m.label}
              </div>
              <div className="text-[11px] text-zinc-500 mt-0.5 font-mono hidden sm:block">
                {m.hint}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-cyan-400 text-xs font-mono transition-colors"
          >
            <span>DISCOVER STORY</span>
            <ChevronDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
