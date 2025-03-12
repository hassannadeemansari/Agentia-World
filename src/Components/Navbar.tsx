"use client";

import { Bot, Menu } from "lucide-react"; 
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-black shadow-md shadow-[#2d0d3a]">
      {/* Outer container keeps the navbar full width */}
      <div className="mx-auto max-w-[1600px] w-full h-16 flex justify-between items-center px-4">
        
        {/* Left Section: Logo */}
        <div className="flex items-center gap-2">
          <Bot className="w-8 h-8 text-purple-500" />
          <span className="text-2xl text-white font-bold">Agentia World</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 font-sans text-[17px] text-gray-300">
          <Link href="/" className="hover:text-white transition duration-300">Features</Link>
          <Link href="/" className="hover:text-white transition duration-300">Technology</Link>
          <Link href="/" className="hover:text-white transition duration-300">Agents</Link>
          <Link href="/" className="hover:text-white transition duration-300">Pricing</Link>
          <Link href="/" className="hover:text-white transition duration-300">Contact</Link>
          <button className="w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
            Launch Console
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white text-center py-4 space-y-4">
          <Link 
            href="/" 
            className="block hover:text-white transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="/" 
            className="block hover:text-white transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Technology
          </Link>
          <Link 
            href="/" 
            className="block hover:text-white transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Agents
          </Link>
          <Link 
            href="/" 
            className="block hover:text-white transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="/" 
            className="block hover:text-white transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <button 
            className="w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
            onClick={() => setIsMenuOpen(false)}
          >
            Launch Console
          </button>
        </div>
      )}
    </div>
  );
}
