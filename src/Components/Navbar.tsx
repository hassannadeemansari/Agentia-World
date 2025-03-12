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

"use client";

import { Bot, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-20 bg-black text-white flex justify-between items-center px-6 shadow-xl sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 uppercase font-extrabold text-2xl">
        <Bot className="w-8 h-8 text-purple-500" />
        Agentia World
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex w-[30%] justify-evenly items-center text-lg">
        <Link href="/" className="hover:text-purple-400 transition duration-300">Features</Link>
        <Link href="/" className="hover:text-purple-400 transition duration-300">Technology</Link>
        <Link href="/" className="hover:text-purple-400 transition duration-300">Agents</Link>
        <Link href="/" className="hover:text-purple-400 transition duration-300">Pricing</Link>
        <Link href="/" className="hover:text-purple-400 transition duration-300">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-20 right-0 w-full bg-black text-white flex flex-col items-center py-6 shadow-2xl rounded-lg md:hidden"
        >
          {[
            { name: "Features", path: "/" },
            { name: "Technology", path: "/" },
            { name: "Agents", path: "/" },
            { name: "Pricing", path: "/" },
            { name: "Contact", path: "/" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.path}
              variants={itemVariants}
              className="py-3 text-lg font-semibold tracking-widest uppercase transform transition-all duration-300 hover:scale-110 hover:text-purple-400"
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
