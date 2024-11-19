"use client";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { playSound, typingSound } from "./Navbar";

const Personal = () => {
  return (
    <div className="w-full h-80 bg-black flex items-start justify-center pt-16">
      <div className="container max-w-2xl mx-auto px-4">
        <h1 className="text-white font-bold text-4xl text-center mb-4">
          Mateus Alves
        </h1>
        <h2 className="text-white opacity-60 text-center mb-4">
          Software Engineering Intern
        </h2>
        <p className="text-white text-center mb-6">
          A Brazilian Computer Science student drawn to open source development
          and the art of turning difficult problems into elegant solutions.
        </p>
        <nav className="text-white opacity-60 text-center mb-6 flex justify-center gap-4">
          <HoverCard>
            <Link href="/projects" onClick={() => playSound(typingSound)}>
              <HoverCardTrigger asChild>
                <span className="cursor-pointer underline">Projects</span>
              </HoverCardTrigger>
            </Link>
            <HoverCardContent className="bg-slate-800 text-white border-none">
              Check out my projects and feel free to contribute!
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <Link href="/about" onClick={() => playSound(typingSound)}>
              <HoverCardTrigger asChild>
                <span className="cursor-pointer underline">About Me</span>
              </HoverCardTrigger>
            </Link>
            <HoverCardContent className="bg-slate-800 text-white border-none">
              Learn more about my journey and goals
            </HoverCardContent>
          </HoverCard>
        </nav>
      </div>
    </div>
  );
};

export default Personal;
