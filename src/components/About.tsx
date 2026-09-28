"use client";

import React from "react";
import { soundManager } from "./SoundEffects";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Sparkles,
  Shield,
  Layers,
  Cpu,
  GraduationCap,
  MapPin,
  CheckCircle2,
  Workflow,
  Lock,
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Sparkles,
      title: "Frontier AI & Autonomous Agents",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      accentText: "text-cyan-400",
      description:
        "Trained frontier LLMs, authored gold-standard coding benchmarks, and integrated multi-agent architectures (Gemini 2.5 Pro, Groq, Claude 3.5 Sonnet) into production applications.",
      tags: ["Prompt Engineering", "LLM Evaluation", "Grounded Search", "Autonomous Agents"],
    },
    {
      icon: Layers,
      title: "Production Full-Stack Systems",
      color: "from-blue-500/20 to-violet-500/20",
      borderColor: "border-blue-500/30",
      accentText: "text-blue-400",
      description:
        "Engineered scalable web applications with Next.js 15, React, Node.js, and Firestore/PostgreSQL, prioritizing low-latency query speeds, clean component modularity, and high-converting UX.",
      tags: ["Next.js 15", "TypeScript", "RESTful APIs", "Relational & Document DBs"],
    },
    {
      icon: Workflow,
      title: "Enterprise Automation & CRM",
      color: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30",
      accentText: "text-violet-400",
      description:
        "Designed comprehensive enterprise pipelines replacing fragmented spreadsheets with automated hiring CRMs, traveler inquiry tracking, and multi-tenant onboarding workflows.",
      tags: ["RBAC Architecture", "Candidate Pipelines", "n8n / Zapier", "Business Logic"],
    },
    {
      icon: Lock,
      title: "Cybersecurity & SecOps Acumen",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      accentText: "text-emerald-400",
      description:
        "Hands-on expertise in enterprise security monitoring: Google SecOps (Chronicle SIEM/SOAR), Microsoft Sentinel, OSINT threat intelligence, and contactless biometric facial authentication.",
      tags: ["Chronicle SIEM", "Microsoft Sentinel", "Threat Intel", "Biometrics"],
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Cpu size={13} />
            <span>EXECUTIVE PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Building at the Intersection of <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              AI, Systems & Defensive Security
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            I am a Computer Science Engineering graduate based in Mumbai with hands-on experience taking complex products from initial whiteboard diagrams to production deployment.
          </p>
        </div>

        {/* Narrative & Story Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-xl mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 blur-[80px] pointer-events-none rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                My journey spans full-stack development, AI training, LLM evaluation, workflow automation, cybersecurity operations, and product architecture. Rather than building textbook tutorials, I focus on shipping real platforms that handle real traffic and sensitive data.
              </p>
              <p>
                I have built and deployed platforms including <strong className="text-white font-semibold">PARYATAN</strong> (an AI-powered tourism ecosystem with multi-role RBAC), <strong className="text-white font-semibold">Benefits Business Solutions</strong> (an enterprise candidate tracking & operations CRM), and <strong className="text-white font-semibold">NG Global</strong> (enterprise digital hub), while working with frontier AI models such as ChatGPT, Claude 3.5 Sonnet, Gemini 2.5 Pro, Groq, and Google AI Studio.
              </p>
              <p>
                To date, I have personally evaluated over <strong className="text-cyan-400 font-semibold font-mono">60+ AI tools</strong> to understand how generative AI actually speeds up real software delivery rather than just producing synthetic noise.
              </p>
            </div>

            {/* Academic & Geographic Anchor Card */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-black/40 border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase">Degree & Specialization</div>
                  <div className="text-sm font-bold text-white leading-snug">
                    {PERSONAL_INFO.education.degree}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    {PERSONAL_INFO.education.institution} • {PERSONAL_INFO.education.period}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase">Base Location</div>
                  <div className="text-sm font-bold text-white">Mumbai, Maharashtra, India</div>
                  <div className="text-xs text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Available for Remote & Relocation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid (3D Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundManager.playHover()}
                className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-br ${pillar.color} border ${pillar.borderColor} backdrop-blur-md hover:scale-[1.01] hover:border-cyan-400/60 transition-all duration-300 shadow-lg group`}
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`p-2.5 rounded-xl bg-black/40 border border-white/10 ${pillar.accentText} group-hover:scale-110 transition-transform`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                  {pillar.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {pillar.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-black/40 border border-white/5 text-[11px] font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
