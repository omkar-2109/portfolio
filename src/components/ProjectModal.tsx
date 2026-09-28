"use client";

import React from "react";
import { Project } from "@/data/portfolioData";
import { soundManager } from "./SoundEffects";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Server,
  Database,
  Cpu,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] text-left"
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

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              Category: {project.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-1">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-cyan-300 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Metrics Banner */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/50 border border-white/10 mb-8 text-center">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-2">
              <div className="text-lg sm:text-2xl font-mono font-bold text-white">
                {m.value}
              </div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Description */}
        <div className="space-y-4 mb-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            System Overview & Engineering Objectives
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Architecture Breakdown Diagram Block */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
            <Layers size={14} className="text-cyan-400" />
            <span>Architecture & Multi-Tier Topology</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold">
                <Cpu size={14} /> Client & UI Layer
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed">
                {project.architecture.client}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-violet-400 text-xs font-mono font-semibold">
                <Server size={14} /> Backend & Middleware
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed">
                {project.architecture.backend}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-semibold">
                <Database size={14} /> Database & Storage
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed">
                {project.architecture.database}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                <Shield size={14} /> AI Engine & Security Layer
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed">
                {project.architecture.aiOrSec}
              </p>
            </div>
          </div>
        </div>

        {/* Key Features List */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
            Core Features & Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                <div className="p-0.5 rounded bg-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                  <CheckCircle2 size={13} />
                </div>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
            Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-black/60 border border-white/10 text-xs font-mono text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div className="text-xs text-zinc-400 font-mono">
            Architected & Built by Omkar Saroj
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playClick()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-medium transition-colors"
              >
                <GithubIcon size={14} />
                <span>GitHub Repository</span>
              </a>
            )}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
