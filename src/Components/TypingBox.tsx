"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TypingBox() {
  const texts = [
    "Hello! I'm your AI agent. How can I enhance your business today? ",
    "Let me assist you with advanced data analytics.",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Change message every 4 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="bg-[#1E1B21] text-white p-4 rounded-md w-[80%] max-w-lg mx-auto pl-3">
      <p className="text-sm text-gray-300">
        <Typewriter
          words={[texts[index]]}
          loop={false}
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={2000}
        />
      </p>
    </div>
  );
}
