"use client";

import React from "react";
import { soundManager } from "./SoundEffects";
import { X, Download, ExternalLink, FileText, CheckCircle2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const resumeUrl = "/assets/Omkar_Saroj_Resume.pdf";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl h-[90vh] rounded-3xl bg-[#090d16] border border-cyan-500/40 p-4 sm:p-6 shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Omkar Saroj — Executive Resume
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                  Updated 2026
                </span>
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                B.E. Computer Science • AI Product Builder • Full Stack • SecOps
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              download="Omkar_Saroj_Resume.pdf"
              onClick={() => soundManager.playSuccess()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundManager.playClick()}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-300 hover:text-white transition-colors"
              title="Open in new browser tab"
            >
              <ExternalLink size={16} />
            </a>

            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="my-3 flex-1 w-full rounded-2xl overflow-hidden border border-white/10 bg-black/60 relative">
          <iframe
            src={`${resumeUrl}#toolbar=0&navpanes=0`}
            className="w-full h-full border-0"
            title="Omkar Saroj Resume"
          />
        </div>

        {/* Bottom Quick Highlights */}
        <div className="flex flex-wrap items-center justify-between text-xs text-zinc-400 font-mono pt-3 border-t border-white/10">
          <div className="flex items-center gap-4">
            <span className="text-cyan-400">✓ Mumbai, India</span>
            <span>✓ +91 9833268778</span>
            <span>✓ omkarsaroj2109@gmail.com</span>
          </div>
          <div className="text-zinc-500 hidden sm:block">
            Press ESC or click close to dismiss
          </div>
        </div>
      </div>
    </div>
  );
}
