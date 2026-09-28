"use client";

import React, { useState, useEffect } from "react";
import { soundManager } from "./SoundEffects";
import {
  Search,
  X,
  FileText,
  Calendar,
  Layers,
  Cpu,
  Shield,
  Briefcase,
  BookOpen,
  Mail,
  Copy,
  ExternalLink,
  Code,
  Award,
  Trophy,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenSchedule: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenResume,
  onOpenSchedule,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        soundManager.playClick();
        if (isOpen) onClose();
        else {
          // Open
          setQuery("");
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      category: "Navigation",
      items: [
        { label: "Hero & Executive Overview", href: "#", icon: Layers },
        { label: "Open For Roles & Skill Fit Matrix", href: "#roles", icon: Cpu },
        { label: "About Me & Core Pillars", href: "#about", icon: Cpu },
        { label: "3D Career Timeline", href: "#timeline", icon: Briefcase },
        { label: "Featured Projects (Paryatan, NG Global, etc.)", href: "#projects", icon: Code },
        { label: "AI Research & Automation Lab (60+ Tools)", href: "#ailab", icon: Cpu },
        { label: "Cybersecurity SOC & Threat Defense", href: "#secops", icon: Shield },
        { label: "Tech Stack & Engineering Skills", href: "#skills", icon: Code },
        { label: "Certifications & Credentials", href: "#certifications", icon: Award },
        { label: "Hackathons & Achievements", href: "#hackathons", icon: Trophy },
        { label: "Technical Blog & Insights", href: "#blog", icon: BookOpen },
        { label: "Contact Mission Deck", href: "#contact", icon: Mail },
      ],
    },
    {
      category: "Direct Actions",
      items: [
        {
          label: "Preview & Download Resume PDF",
          action: () => {
            onClose();
            onOpenResume();
          },
          icon: FileText,
        },
        {
          label: "Schedule a Conversation / Call",
          action: () => {
            onClose();
            onOpenSchedule();
          },
          icon: Calendar,
        },
        {
          label: "Copy Email (omkarsaroj2109@gmail.com)",
          action: () => {
            navigator.clipboard.writeText("omkarsaroj2109@gmail.com");
            soundManager.playSuccess();
            setCopiedText("Email Copied!");
            setTimeout(() => setCopiedText(null), 2000);
          },
          icon: Copy,
        },
        {
          label: "Copy Phone (+91 9833268778)",
          action: () => {
            navigator.clipboard.writeText("+919833268778");
            soundManager.playSuccess();
            setCopiedText("Phone Copied!");
            setTimeout(() => setCopiedText(null), 2000);
          },
          icon: Copy,
        },
        {
          label: "Open LinkedIn Profile",
          action: () => {
            window.open("https://linkedin.com/in/omkarsaroj", "_blank");
          },
          icon: ExternalLink,
        },
        {
          label: "Open GitHub Profile",
          action: () => {
            window.open("https://github.com/omkar-2109", "_blank");
          },
          icon: ExternalLink,
        },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#090d16] border border-cyan-500/40 shadow-[0_0_60px_rgba(0,240,255,0.25)] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search size={18} className="text-cyan-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or jump to section (e.g. Projects, SecOps, Resume)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none font-mono"
          />
          {copiedText && (
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              {copiedText}
            </span>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {actions.map((sec) => {
            const filteredItems = sec.items.filter((item) =>
              item.label.toLowerCase().includes(query.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={sec.category}>
                <div className="text-[10px] font-mono uppercase text-zinc-500 px-3 py-1 tracking-wider">
                  {sec.category}
                </div>
                <div className="space-y-1">
                  {filteredItems.map((item, idx) => {
                    const Icon = item.icon;
                    if ("href" in item && item.href) {
                      return (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => {
                            soundManager.playClick();
                            onClose();
                          }}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm text-zinc-300 hover:text-cyan-300 hover:bg-white/[0.05] transition-colors group"
                        >
                          <Icon size={16} className="text-zinc-500 group-hover:text-cyan-400" />
                          <span>{item.label}</span>
                        </a>
                      );
                    }
                    if ("action" in item && item.action) {
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            soundManager.playClick();
                            item.action();
                          }}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm text-zinc-300 hover:text-cyan-300 hover:bg-white/[0.05] transition-colors group text-left"
                        >
                          <Icon size={16} className="text-zinc-500 group-hover:text-cyan-400" />
                          <span>{item.label}</span>
                        </button>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span>Navigation: Click or Enter</span>
          <span>ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
}
