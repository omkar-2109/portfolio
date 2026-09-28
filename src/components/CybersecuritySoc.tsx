"use client";

import React, { useState, useEffect } from "react";
import { CYBER_METRICS, CYBER_CAPABILITIES } from "@/data/portfolioData";
import { soundManager } from "./SoundEffects";
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  Radar,
  Eye,
  Terminal,
  Activity,
  AlertTriangle,
  Server,
  Radio,
} from "lucide-react";

export default function CybersecuritySoc() {
  const [logs, setLogs] = useState<string[]>([
    "INIT: Chronicle UDM parser pipeline initialized...",
    "INGEST: Streaming cloud audit logs from GCP & Azure...",
    "RULE: YARA-L detection rule 'Privilege_Escalation_Anomaly' validated.",
    "STATUS: Microsoft Sentinel analytics rule sync OK.",
    "SOC: Zero anomalous egress vectors detected.",
  ]);

  useEffect(() => {
    const mockEvents = [
      "AUDIT: RBAC token hash validated for service account.",
      "CHRONICLE: Correlating 24-hour entity graph for anomalous logins.",
      "SENTINEL: KQL hunting query executed with 0 true-positive alarms.",
      "OSINT: External DNS & TLS endpoint exposure rating: A+.",
      "BIOMETRIC: OpenCV 128D facial feature vectors encrypted with AES-256.",
      "THREAT INTEL: IoC blocklist updated from global feed.",
    ];

    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      const randomEvent = mockEvents[Math.floor(Math.random() * mockEvents.length)];
      setLogs((prev) => [`[${now}] ${randomEvent}`, ...prev.slice(0, 4)]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case "ShieldCheck":
        return ShieldCheck;
      case "Lock":
        return Lock;
      case "Radar":
        return Radar;
      default:
        return Eye;
    }
  };

  return (
    <section id="secops" className="relative py-24 bg-[#050608] border-y border-emerald-500/10 scanlines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
            <Radio size={13} className="animate-pulse" />
            <span>SECURITY OPERATIONS CENTER (SOC)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Cybersecurity & <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Threat Defense Command
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Architecting defensible enterprise perimeters using Google SecOps (Chronicle), Microsoft Sentinel, Threat Intelligence, and biometric authentication models.
          </p>
        </div>

        {/* Live SOC Dashboard Display */}
        <div className="p-6 sm:p-8 rounded-3xl bg-black/80 border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl mb-12">
          
          {/* Top Telemetry Ticker */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-emerald-500/20 mb-6 font-mono text-center">
            <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="text-[10px] text-zinc-400 uppercase">SIEM POSTURE</div>
              <div className="text-sm sm:text-base font-bold text-emerald-400 flex items-center justify-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                {CYBER_METRICS.siemStatus}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="text-[10px] text-zinc-400 uppercase">CHRONICLE UDM</div>
              <div className="text-sm sm:text-base font-bold text-cyan-300 mt-0.5">
                {CYBER_METRICS.chronicleScore}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="text-[10px] text-zinc-400 uppercase">DETECTION RULES</div>
              <div className="text-sm sm:text-base font-bold text-emerald-300 mt-0.5">
                {CYBER_METRICS.rulesLoaded}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="text-[10px] text-zinc-400 uppercase">ACTIVE RADAR</div>
              <div className="text-sm sm:text-base font-bold text-teal-300 mt-0.5">
                {CYBER_METRICS.activeSensors}
              </div>
            </div>
          </div>

          {/* Interactive Radar & Terminal Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Animated Radar Graphic */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/60 border border-emerald-500/20 relative overflow-hidden">
              <div className="relative w-56 h-56 rounded-full border border-emerald-500/40 flex items-center justify-center">
                {/* Concentric rings */}
                <div className="absolute w-44 h-44 rounded-full border border-emerald-500/25" />
                <div className="absolute w-28 h-28 rounded-full border border-emerald-500/20" />
                <div className="absolute w-12 h-12 rounded-full border border-emerald-500/30" />
                <div className="absolute w-full h-[1px] bg-emerald-500/20" />
                <div className="absolute h-full w-[1px] bg-emerald-500/20" />

                {/* Rotating sweep line */}
                <div className="absolute inset-0 rounded-full animate-radar bg-gradient-to-tr from-emerald-500/30 via-transparent to-transparent pointer-events-none" />

                {/* Center Pulse Node */}
                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981]" />

                {/* Mock Radar Targets */}
                <div className="absolute top-12 right-14 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <div className="absolute bottom-14 left-16 w-2 h-2 rounded-full bg-emerald-300" />
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Radar size={14} className="animate-spin text-emerald-400" />
                <span>CHRONICLE / SENTINEL CONTINUOUS TELEMETRY SCAN</span>
              </div>
            </div>

            {/* Right: Live Terminal Log Feed */}
            <div className="lg:col-span-7 p-5 rounded-2xl bg-[#030607] border border-emerald-500/30 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20 mb-3 text-zinc-400">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">SOAR TELEMETRY STREAM</span>
                </div>
                <span className="text-[10px] text-zinc-500">LIVE FEED • 100ms TICK</span>
              </div>

              <div className="space-y-2.5 min-h-[160px]">
                {logs.map((log, i) => (
                  <div key={i} className="flex items-start gap-2 text-zinc-300">
                    <span className="text-emerald-400 shrink-0 font-bold">›</span>
                    <span className="leading-relaxed font-mono">{log}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Vulnerability Surface: Zero Ingress Exposure</span>
                <span className="text-emerald-400 font-bold">POSTURE OPTIMAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core SecOps Competencies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CYBER_CAPABILITIES.map((cap, idx) => {
            const Icon = getPillarIcon(cap.icon);
            return (
              <div
                key={idx}
                onMouseEnter={() => soundManager.playHover()}
                className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-black border border-white/10 hover:border-emerald-500/50 backdrop-blur-xl transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {cap.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                    {cap.badge}
                  </span>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                  {cap.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cap.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-black/60 border border-white/5 text-[11px] font-mono text-zinc-300"
                    >
                      {s}
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
