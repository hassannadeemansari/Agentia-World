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


import { Bot, Menu, X } from "lucide-react"; // Import Menu and Close (X) icon
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full h-16 flex bg-black shadow-md shadow-[#2d0d3a] justify-center sticky top-0 z-50">
            <div className="w-[90%] md:w-[77%] h-full bg-black text-white flex justify-between items-center">
                
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Bot className="w-8 h-8 text-purple-500" />
                    <div className="text-2xl font-bold">Agentia World</div>
                </div>

                {/* Desktop Menu - Hidden on Mobile */}
                <div className="hidden md:flex items-center gap-7 text-gray-300 text-[17px]">
                    {["Features", "Technology", "Agents", "Pricing", "Contact"].map((item, index) => (
                        <Link key={index} href={"/"} className="hover:text-white transition duration-300">
                            {item}
                        </Link>
                    ))}
                    <button className="w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition">
                        Launch Console
                    </button>
                </div>

                {/* Mobile Menu Icon (Only Visible on Mobile) */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? (
                            <X className="w-8 h-8 text-white" /> // Close Icon
                        ) : (
                            <Menu className="w-8 h-8 text-white" /> // Menu Icon
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black bg-opacity-80 transition-all duration-500 ${
                isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            } md:hidden`} onClick={() => setIsMenuOpen(false)}>

                {/* Mobile Menu (Slide in from Right) */}
                <div className={`absolute top-0 right-0 w-64 h-full bg-[#111] shadow-lg transition-transform duration-500 transform ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`} onClick={(e) => e.stopPropagation()}>

                    {/* Close Button */}
                    <div className="flex justify-end p-4">
                        <button onClick={() => setIsMenuOpen(false)}>
                            <X className="w-8 h-8 text-white" />
                        </button>
                    </div>

                    {/* Menu Links */}
                    <div className="flex flex-col items-center gap-6 py-6 text-lg text-gray-300">
                        {["Features", "Technology", "Agents", "Pricing", "Contact"].map((item, index) => (
                            <Link 
                                key={index} 
                                href={"/"} 
                                className="hover:text-white transition duration-300"
                                onClick={() => setIsMenuOpen(false)} // Close menu on click
                            >
                                {item}
                            </Link>
                        ))}
                        <button 
                            className="w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Launch Console
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
