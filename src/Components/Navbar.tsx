'use client'


import { Bot, Menu } from "lucide-react";  // Import the Menu icon for the hamburger
import Link from "next/link";
import { useState } from "react"; // Import useState to manage menu toggle

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

    return (
        <div className="2xl:w-[1600px] h-16 flex bg-black shadow-md shadow-[#2d0d3a] justify-center sticky top-0 ">
            <div className="w-[77%] h-full bg-black text-white flex justify-between items-center">
                
                <div className="flex gap-2">
                    <div><Bot className="w-8 h-8 text-purple-500" /></div>
                    <div className="text-2xl text-white font-bold">Agentia World</div>
                </div>

                {/* Menu for larger screens */}
                <div className="font-sans text-[17px] flex items-center gap-7 text-gray-300 hidden md:flex">
                    <Link href={"/"} className="hover:text-white transition duration-300">Features</Link>
                    <Link href={"/"} className="hover:text-white transition duration-300">Technology</Link>
                    <Link href={"/"} className="hover:text-white transition duration-300">Agents</Link>
                    <Link href={"/"} className="hover:text-white transition duration-300">Pricing</Link>
                    <Link href={"/"} className="hover:text-white transition duration-300">Contact</Link>
                    <button className="w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">Launch Console</button>
                </div>

                {/* Hamburger icon for smaller screens */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu className="w-8 h-8 text-white" />
                    </button>
                </div>

            </div>

            {/* Menu for mobile devices */}
            {isMenuOpen && (
                <div className="md:hidden bg-black text-white text-center py-4 space-y-4">
                    <Link href={"/"} className="block hover:text-white transition duration-300">Features</Link>
                    <Link href={"/"} className="block hover:text-white transition duration-300">Technology</Link>
                    <Link href={"/"} className="block hover:text-white transition duration-300">Agents</Link>
                    <Link href={"/"} className="block hover:text-white transition duration-300">Pricing</Link>
                    <Link href={"/"} className="block hover:text-white transition duration-300">Contact</Link>
                    <button className="w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
                        Launch Console
                    </button>
                </div>
            )}
        </div>
    );
}
