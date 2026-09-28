"use client";

import React, { useState } from "react";
import { soundManager } from "./SoundEffects";
import { X, Calendar, Clock, Check, Video, Mail, Phone } from "lucide-react";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const [selectedSlot, setSelectedSlot] = useState<string>("30-min Strategy & Architecture Chat");
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const meetingTypes = [
    { title: "30-min Strategy & Architecture Chat", desc: "Discuss product roadmaps, AI integrations, or full-stack architectures." },
    { title: "Full-Time Engineering / AI Role Interview", desc: "Technical interview or role alignment for AI/Full-Stack openings." },
    { title: "Consulting / Contract Opportunity", desc: "Short-term advisory, workflow automation, or security posture reviews." },
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playSuccess();
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#090d16] border border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.25)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.15] border border-white/10 text-zinc-400 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono w-fit mb-3">
          <Calendar size={13} />
          <span>DIRECT CALENDAR COORDINATION</span>
        </div>

        <h3 className="text-2xl font-extrabold text-white mb-1">
          Schedule a Conversation
        </h3>
        <p className="text-xs text-zinc-400 font-mono mb-6">
          Timezone: Asia/Kolkata (IST) • Open for Global Remote Calls
        </p>

        {booked ? (
          <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check size={24} />
            </div>
            <h4 className="text-lg font-bold text-white">Call Request Sent!</h4>
            <p className="text-xs text-zinc-300">
              I have logged your request and will follow up directly at your email with an official Google Meet invite.
            </p>
          </div>
        ) : (
          <form onSubmit={handleConfirm} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-2">
                Select Discussion Objective:
              </label>
              <div className="space-y-2">
                {meetingTypes.map((type) => (
                  <div
                    key={type.title}
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedSlot(type.title);
                    }}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedSlot === type.title
                        ? "bg-cyan-500/15 border-cyan-400 text-white"
                        : "bg-white/[0.02] border-white/5 text-zinc-400 hover:border-white/20"
                    }`}
                  >
                    <div className="text-xs font-bold text-white flex items-center justify-between">
                      <span>{type.title}</span>
                      {selectedSlot === type.title && <Check size={14} className="text-cyan-400" />}
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">{type.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">
                Your Email Address:
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all"
              >
                Confirm Invitation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
