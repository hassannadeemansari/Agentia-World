"use client";

// import { Bot, Menu } from "lucide-react"; 
// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="sticky top-0 z-50 bg-black shadow-md shadow-[#2d0d3a]">
//       {/* Outer container keeps the navbar full width */}
//       <div className="mx-auto max-w-[1600px] w-full h-16 flex justify-between items-center px-4">
        
//         {/* Left Section: Logo */}
//         <div className="flex items-center gap-2">
//           <Bot className="w-8 h-8 text-purple-500" />
//           <span className="text-2xl text-white font-bold">Agentia World</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-7 font-sans text-[17px] text-gray-300">
//           <Link href="/" className="hover:text-white transition duration-300">Features</Link>
//           <Link href="/" className="hover:text-white transition duration-300">Technology</Link>
//           <Link href="/" className="hover:text-white transition duration-300">Agents</Link>
//           <Link href="/" className="hover:text-white transition duration-300">Pricing</Link>
//           <Link href="/" className="hover:text-white transition duration-300">Contact</Link>
//           <button className="w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
//             Launch Console
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             <Menu className="w-8 h-8 text-white" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu (Dropdown) */}
//       {isMenuOpen && (
//         <div className="hidden bg-black text-white text-center py-4 space-y-4">
//           <Link 
//             href="/" 
//             className="block hover:text-white transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Features
//           </Link>
//           <Link 
//             href="/" 
//             className="block hover:text-white transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Technology
//           </Link>
//           <Link 
//             href="/" 
//             className="block hover:text-white transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Agents
//           </Link>
//           <Link 
//             href="/" 
//             className="block hover:text-white transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Pricing
//           </Link>
//           <Link 
//             href="/" 
//             className="block hover:text-white transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Contact
//           </Link>
//           <button 
//             className="w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Launch Console
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }




// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Bot, Menu } from "lucide-react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navVariants = {
//     hidden: { opacity: 0, x: "100%", filter: "blur(20px)" },
//     visible: { 
//       opacity: 1, 
//       x: 0, 
//       filter: "blur(0px)", 
//       transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 } 
//     },
//     exit: { opacity: 0, x: "100%", transition: { duration: 0.5, ease: "easeIn" } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { 
//         duration: 0.5, 
//         ease: "easeOut", 
//         delay: 0.2 
//       } 
//     },
//   };

//   return (
//     <div className="sticky top-0 z-50 bg-black shadow-md shadow-[#2d0d3a]">
//       {/* Outer container keeps the navbar full width */}
//       <div className="mx-auto max-w-[1600px] w-full h-16 flex justify-between items-center px-4">
        
//         {/* Left Section: Logo */}
//         <div className="flex items-center gap-2">
//           <Bot className="w-8 h-8 text-purple-500" />
//           <span className="text-2xl text-white font-bold">Agentia World</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-7 font-sans text-[17px] text-gray-300">
//           {["Features", "Technology", "Agents", "Pricing", "Contact"].map((item, index) => (
//             <Link key={index} href="/" className="hover:text-white transition duration-300">
//               {item}
//             </Link>
//           ))}
//           <button className="w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
//             Launch Console
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             <Menu className="w-8 h-8 text-white" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu (Animated with Framer Motion) */}
//       {isOpen && (
//         <motion.div
//           variants={navVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="absolute top-16 right-0 w-full bg-gradient-to-t from-black opacity-85 to-purple-600 text-white flex flex-col items-center py-6 shadow-2xl rounded-lg md:hidden"
//         >
//           {["Features", "Technology", "Agents", "Pricing", "Contact"].map((item, index) => (
//             <motion.a
//               key={index}
//               href="#Tech"
//               variants={itemVariants}
//               className="py-3 text-lg font-semibold tracking-widest text-shadow-lg uppercase transform transition-all duration-300 hover:scale-110 hover:text-blue-800"
//               onClick={() => setIsOpen(false)}
//             >
//               {item}
//             </motion.a>
//           ))}
//           <button
//             className="mt-3 w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
//             onClick={() => setIsOpen(false)}
//           >
//             Launch Console
//           </button>
//         </motion.div>
//       )}
//     </div>
//   );
// }





import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, x: "100%", filter: "blur(20px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.5, ease: "easeIn" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <div className="sticky top-0 z-50 bg-black shadow-md shadow-[#2d0d3a]">
      <div className="mx-auto max-w-[1600px] w-full h-16 flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2">
          <Bot className="w-8 h-8 text-purple-500" />
          <span className="text-2xl text-white font-bold">Agentia World</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 font-sans text-[17px] text-gray-300">
          {["Features", "Technology", "Agents", "Pricing", "Contact"].map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`} className="hover:text-white transition duration-300">
              {item}
            </a>
          ))}
          
          <button  className="w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
            Launch Console
          
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated with Framer Motion) */}
      {isOpen && (
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-16 right-0 w-full bg-purple-950 text-white flex flex-col items-center py-6 shadow-2xl rounded-lg md:hidden"
        >
          {["Features", "Technology", "Agents", "Pricing", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              variants={itemVariants}
              className="py-3 text-lg font-semibold tracking-widest uppercase transform transition-all duration-300 hover:scale-110 hover:text-blue-800"
              onClick={() => setIsOpen(false)} // Close menu when clicked
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
