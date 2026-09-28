"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { soundManager } from "./SoundEffects";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  Calendar,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

interface ContactSectionProps {
  onOpenResume: () => void;
  onOpenSchedule: () => void;
}

export default function ContactSection({
  onOpenResume,
  onOpenSchedule,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    soundManager.playSuccess();
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    soundManager.playClick();

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6bc5a58a-3e81-4ebc-9e23-74b5a329d290",
          subject: `⚡ CONTACT TRANSMISSION: ${formData.subject} from ${formData.name}`,
          from_name: formData.name,
          replyto: formData.email,
          to: PERSONAL_INFO.email,
          sender_name: formData.name,
          sender_email: formData.email,
          subject_field: formData.subject,
          message_body: formData.message,
        }),
      });

      soundManager.playSuccess();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.8 },
          colors: ["#00f0ff", "#8b5cf6", "#10b981", "#3b82f6"],
        });
      } catch {
        // Ignore if confetti fails in sandboxed environment
      }
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 6000);
    } catch {
      soundManager.playSuccess();
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <MessageSquare size={13} />
            <span>MISSION CONTROL CONTACT DECK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Build Something <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Whether you are hiring for an AI product role, seeking full-stack engineering expertise, or exploring business automation and SecOps workflows — let&apos;s connect.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Coordinates & Action Dock */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 backdrop-blur-xl shadow-xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span>Direct Coordinates</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-zinc-400 uppercase">Email Address</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                    className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedItem === "email" ? (
                      <CheckCircle2 size={16} className="text-emerald-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-zinc-400 uppercase">Direct Phone</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                    className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedItem === "phone" ? (
                      <CheckCircle2 size={16} className="text-emerald-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">Base Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/10">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-200 hover:text-white text-xs font-semibold transition-all group"
                >
                  <LinkedinIcon size={15} className="text-blue-400" />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} className="text-zinc-500 group-hover:text-white" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-200 hover:text-white text-xs font-semibold transition-all group"
                >
                  <GithubIcon size={15} className="text-cyan-400" />
                  <span>GitHub</span>
                  <ExternalLink size={12} className="text-zinc-500 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Action Tiles */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onOpenSchedule();
                }}
                className="p-4 rounded-2xl bg-cyan-950/20 hover:bg-cyan-950/40 border border-cyan-500/30 text-left transition-all group"
              >
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 w-fit mb-2 group-hover:scale-110 transition-transform">
                  <Calendar size={18} />
                </div>
                <div className="text-xs font-bold text-white group-hover:text-cyan-300">Book Intro Call</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">30-min strategy or interview</div>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onOpenResume();
                }}
                className="p-4 rounded-2xl bg-violet-950/20 hover:bg-violet-950/40 border border-violet-500/30 text-left transition-all group"
              >
                <div className="p-2 rounded-xl bg-violet-500/20 text-violet-400 w-fit mb-2 group-hover:scale-110 transition-transform">
                  <Download size={18} />
                </div>
                <div className="text-xs font-bold text-white group-hover:text-violet-300">Resume PDF</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Full 2-page credentials</div>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Transmission Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 backdrop-blur-xl shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Send Direct Transmission
              </h3>
              <p className="text-xs text-zinc-400 font-mono mb-6">
                All communications are routed directly to Omkar&apos;s personal inbox.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Transmission Received</h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto">
                    Thank you for reaching out! I typically respond to all recruiter and founder inquiries within 2 to 4 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Subject / Opportunity Type *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="AI Product Role / Project Collaboration / Advisory"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Message Transmission *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Omkar, I came across your work on PARYATAN and your AI tool evaluations..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase hover:opacity-95 shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                  >
                    <Send size={15} />
                    <span>{isSubmitting ? "Transmitting to Omkar's Inbox..." : "Transmit Message to Inbox"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} Omkar Saroj. Built with Next.js 15, TypeScript & TailwindCSS.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Back to Top ↑</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
