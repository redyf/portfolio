"use client";
import React, { useEffect, useRef, useState } from "react";
import ParticlesBg from "particles-bg";
import { motion } from "framer-motion";

export const switchPageSound = "/sounds/switch-page.mp3";
export const typingSound = "/sounds/type.wav";

const IntroScreen: React.FC = () => {
  const fullText = "Welcome to My Portfolio";
  const words = fullText.split(" ");
  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isScrollingLocked, setIsScrollingLocked] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const switchPageAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < words.length) {
        // Append the next word if within bounds
        setDisplayedText(
          (prev) => (prev ? prev + " " : "") + words[currentIndex],
        );
        if (audioRef.current) {
          audioRef.current.play();
        }
        setCurrentIndex((prev) => prev + 1); // Move to the next word
      } else {
        clearInterval(intervalId);
        if (switchPageAudioRef.current) {
          switchPageAudioRef.current.play();
        }
        setIsScrollingLocked(true);

        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight, // Scroll to the height of the viewport
            behavior: "smooth",
          });
        }, 500);
      }
    }, 400);

    return () => {
      clearInterval(intervalId);
      document.body.style.overflow = "auto";
    };
  }, [currentIndex, words]);

  useEffect(() => {
    if (isScrollingLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isScrollingLocked]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ParticlesBg type="cobweb" bg={true} />
      <audio ref={audioRef}>
        <source src={typingSound} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
      <audio ref={switchPageAudioRef}>
        <source src={switchPageSound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {displayedText}
      </motion.div>
    </div>
  );
};

export default IntroScreen;
