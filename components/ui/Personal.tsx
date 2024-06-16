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
          Student & Software Developer
        </h2>
        <p className="text-white text-center mb-6">
          I'm Mateus Alves, a Brazilian student passionate about open source and
          solving problems with code.
        </p>
        <div className="text-white opacity-60 text-center mb-6">
          <Link
            href="/projects"
            className="underline"
            onClick={() => playSound(typingSound)}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer underline">
                My Projects
              </HoverCardTrigger>
              <HoverCardContent>
                Here are my projects, feel free to contribute!
              </HoverCardContent>
            </HoverCard>
          </Link>
          <Link
            href="/about"
            className="underline"
            onClick={() => playSound(typingSound)}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer underline ml-4">
                About me
              </HoverCardTrigger>
              <HoverCardContent>
                Here's a little bit about me, my journey and my goals...
              </HoverCardContent>
            </HoverCard>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Personal;
