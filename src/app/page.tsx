"use client";

import React, { useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OpenForRoles from "@/components/OpenForRoles";
import About from "@/components/About";
import CareerTimeline from "@/components/CareerTimeline";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectModal from "@/components/ProjectModal";
import AiLab from "@/components/AiLab";
import CybersecuritySoc from "@/components/CybersecuritySoc";
import TechStackUniverse from "@/components/TechStackUniverse";
import Certifications from "@/components/Certifications";
import Hackathons from "@/components/Hackathons";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import ResumeModal from "@/components/ResumeModal";
import ScheduleModal from "@/components/ScheduleModal";
import CommandPalette from "@/components/CommandPalette";
import { Project } from "@/data/portfolioData";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#050505] text-[#f3f4f6] selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* 3D Dynamic Particle Constellation Canvas */}
      <ParticleBackground />

      {/* Global Glassmorphic Floating Header */}
      <Navbar
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* SECTION 1: HERO DECK */}
      <Hero
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
      />

      {/* TARGET HIRING: OPEN FOR ROLES */}
      <OpenForRoles
        onOpenSchedule={() => setIsScheduleOpen(true)}
      />

      {/* SECTION 2: ABOUT ME */}
      <About />

      {/* SECTION 3: 3D CAREER TIMELINE */}
      <CareerTimeline />

      {/* SECTION 4: FEATURED PROJECTS (Now includes NG Global) */}
      <FeaturedProjects
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* SECTION 5: AI RESEARCH & AUTOMATION LAB (60+ Tools) */}
      <AiLab />

      {/* SECTION 6: CYBERSECURITY SOC COMMAND CENTER */}
      <CybersecuritySoc />

      {/* SECTION 7: TECH STACK UNIVERSE */}
      <TechStackUniverse />

      {/* SECTION 8: CERTIFICATIONS & CREDENTIALS */}
      <Certifications />

      {/* SECTION 9: HACKATHONS & ACHIEVEMENTS */}
      <Hackathons />

      {/* SECTION 10: BLOG & TECHNICAL INSIGHTS */}
      <BlogSection />

      {/* SECTION 11: MISSION CONTROL CONTACT DECK */}
      <ContactSection
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
      />

      {/* INTERACTIVE MODALS & FLOATING DIALOGS */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
      />
    </main>
  );
}
