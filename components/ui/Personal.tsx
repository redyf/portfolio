import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

const Personal = () => {
  return (
    <div className="w-full h-80 bg-black flex items-start justify-center pt-16">
      <div className="container max-w-2xl mx-auto px-4">
        <h1 className="text-white font-bold text-4xl text-center mb-4">
          Mateus Alves
        </h1>
        <h2 className="text-white opacity-60 text-center mb-4">
          Student & software developer
        </h2>
        <p className="text-white text-center mb-6">
          I'm Mateus Alves, a Brazilian student passionate about open source and
          solving problems with code.
        </p>
        <div className="text-white opacity-60 text-center mb-6">
          <HoverCard>
            <Link href="/projects" className="underline">
              <HoverCardTrigger className="cursor-pointer underline">
                My Projects
              </HoverCardTrigger>
            </Link>
            <HoverCardContent>
              Here are my projects, feel free to contribute!
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <Link href="/about" className="underline">
              <HoverCardTrigger className="cursor-pointer underline ml-4">
                About me
              </HoverCardTrigger>
            </Link>
            <HoverCardContent>
              Here's a little bit about me, my journey and my goals...
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default Personal;
