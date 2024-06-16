"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Icon from "@mdi/react";
import { mdiEmail, mdiMenu } from "@mdi/js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 bg-black sticky top-0 flex items-center z-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-full">
          <Link href={"https://github.com/redyf"}>
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/98139059?v=4"
                alt="Avatar"
              />
              <AvatarFallback>BR</AvatarFallback>
            </Avatar>
          </Link>
          <ul className="hidden md:flex gap-x-6 text-white opacity-60 items-center">
            <li>
              <Link href="/">
                <Button variant={"outline"} className="bg-black border-black">
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <Button variant={"outline"} className="bg-black border-black">
                  About Me
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <Button variant={"outline"} className="bg-black border-black">
                  Projects
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <Button variant={"outline"} className="bg-black border-black">
                  Blog
                </Button>
              </Link>
            </li>
          </ul>
          <Link href={"mailto:mateusalvespereira7@gmail.com"}>
            <Icon
              path={mdiEmail}
              title="Email"
              size={1}
              color="white"
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
          </Link>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon path={mdiMenu} size={1} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur flex flex-col items-center justify-center z-20">
          <ul className="text-white opacity-100">
            <li className="py-2">
              <Link href="/">
                <Button
                  variant={"outline"}
                  className="bg-black border-black w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Button>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/about">
                <Button
                  variant={"outline"}
                  className="bg-black border-black w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Me
                </Button>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/projects">
                <Button
                  variant={"outline"}
                  className="bg-black border-black w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Button>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/blog">
                <Button
                  variant={"outline"}
                  className="bg-black border-black w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
