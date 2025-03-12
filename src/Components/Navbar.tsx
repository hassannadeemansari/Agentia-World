'use client'

// import { Bot } from "lucide-react";
// import Link from "next/link";

// export default function Navbar(){
//     return(
//         <div className="2xl:w-[1600px] h-16 flex bg-black shadow-md shadow-[#2d0d3a] justify-center sticky top-0 ">
//             <div className="w-[77%] h-full bg-black text-white flex justify-between items-center">

//                 <div className="flex gap-2">
//                     <div><Bot className="w-8 h-8 text-purple-500" /></div>
//                     <div className="text-2xl text-white font-bold">Agentia World</div>
//                 </div>
//                 <div className="font-sans text-[17px] flex items-center gap-7 text-gray-300">
//                     <Link href={"/"} className="hover:text-white transition duration-300">Features</Link>
//                     <Link href={"/"} className="hover:text-white transition duration-300">Technology</Link>
//                     <Link href={"/"} className="hover:text-white transition duration-300">Agents</Link>
//                     <Link href={"/"} className="hover:text-white transition duration-300">Pricing</Link>
//                     <Link href={"/"} className="hover:text-white transition duration-300">Contact</Link>
//                     <button className="w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">Launch Console</button>
//                 </div>

//             </div>
//         </div>
//     )
// }


import { Bot, Menu, X } from "lucide-react"; // Import X icon for closing
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full h-16 flex bg-black shadow-md shadow-[#2d0d3a] justify-center sticky top-0 z-50">
            <div className="w-[77%] h-full bg-black text-white flex justify-between items-center relative">
                
                {/* Logo */}
                <div className="flex gap-2">
                    <Bot className="w-8 h-8 text-purple-500" />
                    <span className="text-2xl font-bold">Agentia World</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-7 text-gray-300 font-sans text-[17px]">
                    <Link href="/" className="hover:text-white transition duration-300">Features</Link>
                    <Link href="/" className="hover:text-white transition duration-300">Technology</Link>
                    <Link href="/" className="hover:text-white transition duration-300">Agents</Link>
                    <Link href="/" className="hover:text-white transition duration-300">Pricing</Link>
                    <Link href="/" className="hover:text-white transition duration-300">Contact</Link>
                    <button className="w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">Launch Console</button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-6 space-y-4">
                        <Link href="/" className="hover:text-purple-400 transition duration-300">Features</Link>
                        <Link href="/" className="hover:text-purple-400 transition duration-300">Technology</Link>
                        <Link href="/" className="hover:text-purple-400 transition duration-300">Agents</Link>
                        <Link href="/" className="hover:text-purple-400 transition duration-300">Pricing</Link>
                        <Link href="/" className="hover:text-purple-400 transition duration-300">Contact</Link>
                        <button className="w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
                            Launch Console
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
