"use client";

import React, { useState, useEffect } from "react";
import { soundManager } from "./SoundEffects";
import {
  Terminal,
  Volume2,
  VolumeX,
  FileText,
  Menu,
  X,
  Sparkles,
  Shield,
  Layers,
  Briefcase,
  Mail,
  Search,
} from "lucide-react";

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ onOpenCommand, onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundManager.enabled = nextState;
    if (nextState) {
      soundManager.playSuccess();
    }
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Timeline", href: "#timeline" },
    { label: "Projects", href: "#projects" },
    { label: "AI Lab", href: "#ailab" },
    { label: "SecOps", href: "#secops" },
    { label: "Tech Stack", href: "#skills" },
    { label: "Credentials", href: "#certifications" },
    { label: "Insights", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={() => soundManager.playClick()}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-mono font-bold text-sm tracking-wider group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            OS
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors text-sm sm:text-base flex items-center gap-1.5">
              OMKAR SAROJ
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="text-[10px] text-zinc-400 tracking-widest font-mono uppercase hidden sm:block">
              AI • Full Stack • SecOps
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => soundManager.playHover()}
              className="text-xs font-medium text-zinc-300 hover:text-cyan-300 hover:bg-white/[0.06] px-3 py-1.5 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Icons & Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Status Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Open for Impact</span>
          </div>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            title={soundEnabled ? "Mute interface audio" : "Enable futuristic sound FX"}
            className={`p-2 rounded-lg border transition-all ${
              soundEnabled
                ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                : "bg-white/[0.04] border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
            }`}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Command Palette Trigger */}
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onOpenCommand();
            }}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/30 text-zinc-400 hover:text-white transition-all text-xs font-mono"
            title="Open Command Palette"
          >
            <Search size={14} className="text-cyan-400" />
            <span>Cmd+K</span>
          </button>

          {/* Resume Modal Trigger */}
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/40 hover:border-cyan-400 text-cyan-200 hover:text-white text-xs font-medium transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)]"
          >
            <FileText size={14} className="text-cyan-400" />
            <span className="hidden sm:inline">Resume</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#090d14]/95 border-b border-white/10 backdrop-blur-2xl">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  soundManager.playClick();
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-cyan-300 hover:bg-white/[0.06] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommand();
                }}
                className="flex items-center gap-2 text-xs font-mono text-cyan-400 py-1"
              >
                <Search size={14} /> Open Command Palette (Cmd+K)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
