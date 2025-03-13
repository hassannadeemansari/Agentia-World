'use client'

// import Navbar from "@/Components/Navbar";
import { Bot, Menu ,X  } from "lucide-react";
import { Brain } from "lucide-react";
import TypingBox from "@/Components/TypingBox";
import { Cpu } from "lucide-react";
import { CodeXml } from "lucide-react";
import { Earth } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Shield } from "lucide-react";
import { Terminal } from "lucide-react";
import { Server } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react"; 
import { motion } from "framer-motion";
import { useState } from "react";




const navVariants = {
  hidden: { opacity: 0, x: "100%", filter: "blur(20px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 },
  },
  exit: { opacity: 0, x: "100%", transition: { duration: 0.5, ease: "easeIn" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

export default function Home(){


  
  const [isOpen, setIsOpen] = useState(false);



  return (
      <div>
          {/* <Navbar /> */}





 {/* navbar */}

 <nav className="fixed top-0 left-0 w-full bg-black z-50 shadow-lg shadow-[#1f113f] text-gray-400 flex justify-between items-center px-4 md:px-6 h-16 md:h-20">
      <div className="flex items-center gap-2">
        <span className="text-2xl text-white font-bold">Agentia World</span>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-wrap w-[60%] lg:w-[50%] justify-evenly items-center font-sans text-lg">
        {["Features", "Technology", "Agents", "Pricing", "Contact"].map((item, index) => (
          <a key={index} href={`#${item.toLowerCase()}`} className="hover:text-white transition-all">
            {item}
          </a>
        ))}
        <a href="#pricing">
          <button className="w-32 md:w-40 h-10 text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
            Launch Console
          </button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-20 right-0 w-full bg-purple-600 text-white flex flex-col items-center py-6 shadow-2xl rounded-lg md:hidden"
        >
          {["About", "Skills", "Work", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              variants={itemVariants}
              className="py-3 text-lg font-semibold tracking-widest text-shadow-lg uppercase transform transition-all duration-300 hover:scale-110 hover:text-blue-800"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </nav>


          









          {/**Hero */}

{/*remove w for responsive*/}
          <div className="2xl:w-[1600px] h-[89vh] bg-gradient-to-b from-black to-[#120022] flex justify-center items-center">


              <div className=" w-[50%] h-[80%] flex flex-col items-center justify-center gap-9" >

                <div className="flex items-center h-8 gap-2 bg-[#0D0D0D] justify-center w-[260px] rounded-full">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <p className="text-purple-500 mt-1 text-sm">POWERED BY PANAVERSITY</p>
                </div>
                  
                 <div className="flex flex-col items-center gap-1">
                  <h1 className="sm:text-6xl text-5xl font- font-semibold text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 bg-clip-text">
                    Enterprise AI Agents
                  </h1>
                  <h1 className="sm:text-6xl text-5xl font- font-semibold text-white">
                  for the Future
                  </h1>
                 </div>

                  <div className="sm:w-[87%] w-[160%] sm:h-[100px] h-[120px] bg-[#100E12] rounded-xl flex items-center gap-1 border border-purple-950">
                     <div className="w-12 h-12 bg-gradient-to-l to-purple-700 via-indigo-700 from-blue-700 flex justify-center items-center rounded-full ml-7"><Bot className="w-8 h-8 text-white" /></div>
                       <TypingBox />
                  </div>



                  <div className="flex justify-center gap-6 grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 md:gap-32 lg:gap-6 grid-rows-2 justify-center ">
                  <button className="w-[250px] h-14 bg-gradient-to-r to-purple-600 via-indigo-600 from-blue-600 rounded-lg text-white font-bold transition-shadow duration-300 hover:shadow-[0_0_25px_10px_rgba(80,0,110,0.7)] transition-transform duration-500 hover:scale-105">
                    Deploy Your AI Agent
                  </button>
                  <div className="flex justify-center">
                 <button className="w-[180px] h-14 border border-purple-800 hover:border-purple-500 rounded-l transition-border duration-300 text-white font-bold hover:shadow-[0_0_25px_10px_rgba(60,0,90,0.7)] transition-shadow duration-300">Watch Demo</button>
                 </div>
                  </div>


              </div>


          </div>

          {/*middle*/}

          {/*Powered by Advanced AI*/}

          <div id="technology" className="2xl:w-[1600px] sm:h-[445vh] h-[700vh] bg-black flex flex-col items-center gap-32">          <div className="w-[77%] flex flex-col gap-12 mt-12">
                    <div className="flex flex-col items-center font-sans gap-4">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-600 bg-clip-text text-transparent">Powered by Advanced AI</h1>
                        <p className="text-gray-500 text-[21px] font-sans ">Built on cutting-edge neural architectures</p>
                    </div>


                    <div className="w-[98%] grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 text-white flex justify-center gap-7">

                         <div className="sm:w-[100%]  lg:w-[83%] h-[187px] bg-[#0D0D0D] rounded-xl flex flex-col items-center text-center justify-center gap-2 border border-[#1b0b2b] hover:border-purple-950 transition-transform duration-300 hover:scale-105">
                            <div className="w-[54px] h-[55px] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white rounded-xl flex justify-center items-center">  <Brain />  </div>
                            <h2>Neural Networks</h2>
                            <p className="text-[12px] font-thin text-gray-400 pr-3 pl-3">Advanced neural architectures for complex decision making</p>
                         </div>

                         <div className="sm:w-[100%] lg:w-[83%] h-[187px] bg-[#0D0D0D] rounded-xl flex flex-col items-center text-center justify-center gap-2 border border-[#1b0b2b] hover:border-purple-950 transition-transform duration-300 hover:scale-105">
                            <div className="w-[54px] h-[55px] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white rounded-xl flex justify-center items-center">  <Cpu />  </div>
                            <h2>Deep Learning</h2>
                            <p className="text-[12px] font-thin text-gray-400 pr-3 pl-3">Sophisticated deep learning models for pattern recognition</p>
                         </div>

                         <div className="sm:w-[100%] lg:w-[83%] h-[187px] bg-[#0D0D0D] rounded-xl flex flex-col items-center text-center justify-center gap-2 border border-[#1b0b2b] hover:border-purple-950 transition-transform duration-300 hover:scale-105">
                            <div className="w-[54px] h-[55px] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white rounded-xl flex justify-center items-center">  <CodeXml />  </div>
                            <h2>Advanced ML</h2>
                            <p className="text-[12px] font-thin text-gray-400 pr-3 pl-3">Cutting-edge machine learning algorithms</p>
                         </div>

                         <div className="sm:w-[100%] lg:w-[83%] h-[187px] bg-[#0D0D0D] rounded-xl flex flex-col items-center text-center justify-center gap-2 border border-[#1b0b2b] hover:border-purple-950 transition-transform duration-300 hover:scale-105">
                            <div className="w-[54px] h-[55px] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white rounded-xl flex justify-center items-center">  <Earth />  </div>
                            <h2>Global Scale</h2>
                            <p className="text-[12px] font-thin text-gray-400 pr-3 pl-3">Distributed AI processing across global networks</p>
                         </div>


                    </div>


               </div>

                       
              {/*Neural Capabilities*/}



            <div id="features" className="w-[77%]  flex flex-col gap-12">
                    <div className="flex flex-col items-center font-sans gap-4">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-600 bg-clip-text text-transparent">Neural Capabilities</h1>
                        <p className="text-gray-500 text-[21px] font-sans ">Powered by next-generation artificial intelligence</p>
                    </div>


                  <div className="w-[98%] grid xl:grid-cols-4 xl:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-4 text-white flex justify-center gap-7">

                         <div className="w-[100%] h-[240px] pr-4 bg-[#0D0D0D] rounded-lg flex flex-col text-center justify-center gap-2 border border-[#1b0b2b] hover:border-purple-950 transition-transform duration-300 hover:scale-105">
                            <div className="w-[45px] h-[45px] ml-5  bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white rounded-lg flex justify-center items-center">  <Brain />  </div>
                            <h2 className="text-left ml-5 font-bold">Autonomous Learning</h2>
                            <p className="text-[12px] font-thin text-gray-400 text-left ml-5">Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning</p>
                         </div>

                         <div className="w-[100%] h-[240px] pr-4 bg-[#0D0D0D] rounded-lg flex flex-col text-center justify-center gap-2 border border-[#1b0b2b] hover:border-purple-950 transition-transform duration-300 hover:scale-105">
                            <div className="w-[45px] h-[45px] ml-5  bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white rounded-lg flex justify-center items-center">  <MessageSquare />  </div>
                            <h2 className="text-left ml-5 font-bold">Multi-Modal Intelligence</h2>
                            <p className="text-[12px] font-thin text-gray-400 text-left ml-5">Advanced agents capable of processing text, voice, and visual data for comprehensive understanding</p>
                         </div>

                         <div className="w-[100%] h-[240px] pr-4 bg-[#0D0D0D] rounded-lg flex flex-col text-center justify-center gap-2 border border-[#1b0b2b] hover:border-purple-950 transition-transform duration-300 hover:scale-105">
                            <div className="w-[45px] h-[45px] ml-5  bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white rounded-lg flex justify-center items-center">  <Terminal />  </div>
                            <h2 className="text-left ml-5 font-bold">Cognitive Integration</h2>
                            <p className="text-[12px] font-thin text-gray-400 text-left ml-5">Seamless integration with existing systems through advanced cognitive APIs and neural bridges</p>
                         </div>

                         <div className="w-[100%] h-[240px] pr-4 bg-[#0D0D0D] rounded-lg flex flex-col text-center justify-center gap-2 border border-[#1b0b2b] hover:border-purple-950 transition-transform duration-300 hover:scale-105">
                            <div className="w-[45px] h-[45px] ml-5  bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white rounded-lg flex justify-center items-center">  <Shield />  </div>
                            <h2 className="text-left ml-5 font-bold">Ethical AI Framework</h2>
                            <p className="text-[12px] font-thin text-gray-400 text-left ml-5">Built-in ethical guidelines and safety protocols ensuring responsible AI deployment</p>
                         </div>


                  </div>


            </div>

            {/*Ai Solution*/}


            <div id="agents" className="sm:w-[77%] w-[95%]  flex flex-col gap-12">
                    <div className="flex flex-col items-center font-sans gap-4">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-600 bg-clip-text text-transparent">AI Solutions</h1>
                        <p className="text-gray-500 text-[21px] font-sans ">Transforming industries with intelligent agents</p>
                    </div>


                  <div className="sm:w-[98%] text-white flex justify-center gap-7 grid sm:grid-cols-3 sm:grid-rows-1 grid-rows-3 grid-cols-1">

                         <div className="sm:w-[100%] w-[100%] h-[170px] sm:h-[195px] md:h-[175px] pr-4 bg-[#0D0D0D] rounded-lg flex flex-col text-center justify-center gap-2 border border-[#1b0b2b] hover:border-purple-950 transition duration-500">
                            <div className="w-[45px] h-[45px] ml-5  bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white rounded-lg flex justify-center items-center">  <Earth />  </div>
                            <h2 className="text-left ml-5 font-bold">Enterprise AI</h2>
                            <p className="text-[12px] font-thin text-gray-400 text-left ml-5">Custom AI agents designed for enterprise-scale operations and decision-making</p>
                         </div>

                         <div className="sm:w-[100%] w-[100%] h-[170px] sm:h-[195px] md:h-[175px] pr-4 bg-[#0D0D0D] rounded-lg flex flex-col text-center justify-center gap-2 border border-[#1b0b2b] hover:border-purple-950 transition duration-500">
                            <div className="w-[45px] h-[45px] ml-5  bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white rounded-lg flex justify-center items-center">  <Server />  </div>
                            <h2 className="text-left ml-5 font-bold">Neural Operations</h2>
                            <p className="text-[12px] font-thin text-gray-400 text-left ml-5">Automated workflow optimization through distributed neural networks</p>
                         </div>

                         <div className="sm:w-[100%] w-[100%] h-[170px] sm:h-[195px] md:h-[175px] pr-4 bg-[#0D0D0D] rounded-lg flex flex-col text-center justify-center gap-2 border border-[#1b0b2b] hover:border-purple-950 transition duration-500">
                            <div className="w-[45px] h-[45px] ml-5  bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white rounded-lg flex justify-center items-center">  <Shield />  </div>
                            <h2 className="text-left ml-5 font-bold">Secure Intelligence</h2>
                            <p className="text-[12px] font-thin text-gray-400 text-left ml-5">Privacy-first AI solutions with military-grade security protocols</p>
                         </div>


                  </div>


            </div>


            {/*Choose your plan*/}


            <div id="pricing" className="w-[77%] md:h-[700px] flex flex-col gap-12">
                    <div className="flex flex-col items-center font-sans gap-4">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-600 bg-clip-text text-transparent">Choose Your Plan</h1>
                        <p className="text-gray-500 text-[21px] font-sans ">Scale your AI capabilities with our flexible pricing</p>
                    </div>


                  <div className="sm:w-[98%] md:w-[110%] lg:w-[98%] text-white flex  gap-7 grid grid-cols-1
                   md:grid-rows-3 md:grid-cols-3 grid-rows-1">

                         <div className="sm:w-[100%] h-[535px] md:h-[600px] xl:h-[535px] pr-4 bg-[#0D0D0D] rounded-lg flex flex-col text-center  gap-2 border border-[#1b0b2b] transition-transform hover:scale-105 duration-500">
                            <ol className="text-left p-7 flex flex-col gap-4 md:gap-2 xl:gap-4 mt-2">
                               <h1 className="text-2xl font-bold"> Starter</h1>
                               <li className="flex items-end">
                                 <span className="text-4xl font-bold">$499</span>
                                 <span className="text-gray-400 text-e">/month</span>
                               </li>
                               <li className="flex gap-2" > <CircleCheck className="text-purple-700" /> 2 AI Agent Instances</li>
                               <li className="flex gap-2" > <CircleCheck className="text-purple-700" /> Basic Neural Processing</li>
                               <li className="flex gap-2" > <CircleCheck className="text-purple-700" /> 24/7 Support</li>
                               <li className="flex gap-2" > <CircleCheck className="text-purple-700" /> Weekly Analytics</li>
                               <li className="flex gap-2" > <CircleCheck className="text-purple-700" /> Basic Integration Support</li>
                            </ol>
                            <button className="w-[90%] ml-6 h-14 border border-[#351542] hover:border-[#9727c4] rounded-lg transition-border duration-300 text-white font-bold duration-300">Watch Demo</button>

                         </div>

                         <div className="sm:w-[100%] h-[535px] md:h-[600px] xl:h-[535px] pr-4 bg-[#280E40] rounded-xl flex flex-col text-center gap-2 border-[2px] border-purple-500 transition-transform hover:scale-105 duration-500">
                            <ol className="text-left p-7 flex flex-col gap-4 md:gap-2 xl:gap-4 mt-2">
                                  <h1 className="text-2xl font-bold"> Professional</h1>
                                  <li className="flex items-end">
                                    <span className="text-4xl font-bold">$999</span>
                                    <span className="text-gray-400 text-e">/month</span>
                                  </li>
                                  <li className="flex gap-2" > <CircleCheck className="text-purple-700" /> 10 AI Agents Instances</li>
                                  <li className="flex gap-2" > <CircleCheck className="text-purple-700" /> Advanced Neural Networks</li>
                                  <li className="flex gap-2" > <CircleCheck className="text-purple-700" /> priority Support</li>
                                  <li className="flex gap-2" > <CircleCheck className="text-purple-700" /> Real-time Analytics</li>
                                  <li className="flex gap-2" > <CircleCheck className="text-purple-700" /> Custom Integration</li>
                                  <li className="flex gap-2" > <CircleCheck className="text-purple-700" /> API Access</li>
                                  <li className="flex gap-2" > <CircleCheck className="text-purple-700" /> Advanced Security</li>
                               </ol>
                               <button className="w-[88%] ml-7 h-14 bg-gradient-to-r to-purple-600 via-indigo-600 from-blue-600 rounded-lg text-white font-bold hover:to-purple-700 hover:via-indigo-600 hover:from-blue-700">
                                  Deploy Your AI Agent
                               </button>
                         </div>

                         <div className="sm:w-[100%] h-[580px] md:h-[600px] xl:h-[535px] pr-4 bg-[#0D0D0D] rounded-lg flex flex-col text-center  gap-2 border border-[#1b0b2b] transition-transform hover:scale-105 duration-500">
                            <ol className="text-left p-7 flex flex-col gap-4 md:gap-2 xl:gap-4 mt-2">
                               <h1 className="text-2xl font-bold"> Enterprise</h1>
                               <li className="text-4xl font-bold">$Custom</li>
                               <li className="flex gap-2"> <CircleCheck className="text-purple-700" /> Unlimited Agents</li>
                               <li className="flex gap-2"> <CircleCheck className="text-purple-700" /> Full Neural Suite</li>
                               <li className="flex gap-2"> <CircleCheck className="text-purple-700" /> Dedicated Support Team</li>
                               <li className="flex gap-2"> <CircleCheck className="text-purple-700" /> Advanced Analytics Dashboard</li>
                               <li className="flex gap-2"> <CircleCheck className="text-purple-700" /> Custom Development</li>
                               <li className="flex gap-2"> <CircleCheck className="text-purple-700" /> Full API Access</li>
                               <li className="flex gap-2"> <CircleCheck className="text-purple-700" /> Enterprise Security</li>
                               <li className="flex gap-2"> <CircleCheck className="text-purple-700" /> Custom Training</li>
                            </ol>
                            <button className="w-[90%] ml-6 h-14 border border-[#351542] hover:border-[#9727c4] rounded-lg transition-border duration-300 text-white font-bold duration-300">Watch Demo</button>

                         </div>


                  </div>


            </div>



           {/*Contact Information*/}


           <div id="contact" className="w-[76%] flex flex-col gap-12 bg-black ">
                    <div className="flex flex-col items-center font-sans gap-4">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-600 bg-clip-text text-transparent">Get in Touch</h1>
                        <p className="text-gray-500 text-[21px] font-sans ">Ready to transform your business with AI?</p>
                    </div>

              <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 sm:gap-5">
                    <div className="sm:w-[50%] flex flex-col gap-8 text-white mt-5">
                             <h1 className="text-2xl font-semibold">Conatact Information</h1>
                           <p className="flex flex-col gap-4">
                             <span className="flex gap-3"> <Mail className="text-purple-600" /> contact@agentiaworld.com</span>
                             <span className="flex gap-3"><Earth className="text-purple-600" /> www.agentiaworld.com</span>
                           </p>
                             <ol className="flex gap-3 text-gray-200">
                                <li><Github/></li>
                                <li><Linkedin/></li>
                                <li><Twitter/></li>
                             </ol>
                         </div>

                         <div className="sm:w-[100%]  p-5"> 
                         <form className="space-y-4">
                                   <div className="flex space-x-4">
                                     <input
                                       type="text"
                                       name="firstName"
                                       placeholder="First Name"
                                       className="w-1/2 p-3 bg-[#0D0D0D] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 border border-[#200f2b]"
                                       required
                                     />
                                     <input
                                       type="text"
                                       name="lastName"
                                       placeholder="Last Name"
                                       className="w-1/2 p-3 bg-[#0D0D0D] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 border border-[#200f2b]"
                                       required
                                     />
                                   </div>
                                   <input
                                     type="email"
                                     name="email"
                                     placeholder="Email Address"
                                     className="w-full p-3 bg-[#0D0D0D] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 border border-[#200f2b]"
                                     required
                                   />
                                   <textarea
                                     name="message"
                                     placeholder="Your Message"
                                     className="w-full p-3 bg-[#0D0D0D] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 border border-[#200f2b]"
                                     rows={4}
                                     required
                                   ></textarea>
                                   <button
                                     type="submit"
                                     className="w-full p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md text-white font-semibold hover:opacity-90 transition"
                                   >
                                     Send Message
                                   </button>
                          </form>
                         </div>
                    </div>


            </div>



            <footer className="w-full bg-black flex flex-col items-center">
    <hr className="w-full h-[1px] border-t-2 border-[#2a0c47] opacity-50" />

    <div className="max-w-[1600px] w-[90%] text-gray-400 flex grid sm:grid-cols-4 sm:grid-rows-1 grid-col-1 grid-rows-4 justify-between py-16">
        {/* Left Section - Logo & Description */}
        <div className="max-w-[300px] flex flex-col ">
            <h2 className="flex items-center text-lg text-white font-semibold">
                <Bot className="text-purple-500 mr-2" /> Agentia World
            </h2>
            <p className="mt-3">
                Next-generation AI agents powering <br />
                the future of enterprise intelligence.
            </p>
            <div className="flex gap-4 mt-4 text-purple-600">
                <Linkedin size={24} />
                <Github size={24} />
                <Twitter size={24} />
            </div>
        </div>

        {/* Product Links */}
        <div>
            <h3 className="text-lg text-white font-semibold">Product</h3>
            <ul className="flex flex-col gap-2 mt-3">
                <li>Features</li>
                <li>Pricing</li>
                <li>Documentation</li>
                <li>API</li>
            </ul>
        </div>

        {/* Company Links */}
        <div>
            <h3 className="text-lg text-white font-semibold">Company</h3>
            <ul className="flex flex-col gap-2 mt-3">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Legal Links */}
        <div>
            <h3 className="text-lg text-white font-semibold">Legal</h3>
            <ul className="flex flex-col gap-2 mt-3">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
                <li>Compliance</li>
            </ul>
        </div>
    </div>

    {/* Copyright Section */}
    <hr className="w-[90%] h-[1px] bg-[#29163f] opacity-50" />
    <p className="text-gray-400 text-sm py-6">
        © 2025 Agentia World. Powered by Panaversity. All rights reserved.
    </p>
</footer>









      </div>



  
   </div>
  )
}