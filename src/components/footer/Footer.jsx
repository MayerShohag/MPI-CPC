import { IoMailOutline } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { Link } from "react-router";

const Footer = () => {
     return (
          <>
               <hr className="border-0 border-t border-slate-700 mb-10" />
               <footer className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-6 items-start lg:grid-cols-12 p-5">
                    <div className="pointer-events-none absolute md:left-0 lg:left-[35%] bottom-30 z-0 lg:h-100 md:h-80 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-75" />
                    <div className="col-span-5">
                         <div className="flex items-center">
                              <div>
                                   <img
                                        src="MPI-CPC.png"
                                        className="w-20"
                                        alt="CP-Club Logo"
                                   />
                              </div>
                              <div>
                                   <h1 className="text-lg font-semibold">
                                        MaPI Programming Club
                                   </h1>
                                   <p className="text-slate-400">
                                        Magura Polytechnic Institute
                                   </p>
                              </div>
                         </div>
                         <p className="text-slate-400 lg:pl-3 lg:pr-30 my-3">
                              Building a strong coding community through
                              competitive programming and collaborative
                              learning.
                         </p>
                    </div>
                    <div className="flex flex-col col-span-4">
                         <h1 className="font-semibold mb-5">Quick Links</h1>
                         <div className="flex flex-col gap-2 text-slate-400 w-fit">
                              <Link to={"/"}>Home</Link>
                              <Link to={"/contests"}>Contests</Link>
                              <Link to={"/practice"}>Practice</Link>
                              <Link to={"/leaderboard"}>Leaderboad</Link>
                              <Link to={"/community"}>Community</Link>
                         </div>
                    </div>
                    <div className="col-span-3 my-5">
                         <h1 className="font-semibold mb-5">Connect With Us</h1>
                         <div className="flex gap-2 text-slate-400">
                              <a
                                   target="_blank"
                                   href="mailto:shohagsreepur2021@gmail.com"
                                   className="bg-[#FFFFFF1A] hover:text-white duration-200 hover:scale-105 p-2 border border-slate-700 rounded-lg"
                              >
                                   <IoMailOutline className="text-2xl" />
                              </a>
                              <a
                                   href="/www.facebook.com"
                                   target="_blank"
                                   className="bg-[#FFFFFF1A] hover:text-white duration-200 hover:scale-105 p-2 border border-slate-700 rounded-lg"
                              >
                                   <SlSocialFacebook className="text-2xl" />
                              </a>
                              <a
                                   target="_blank"
                                   href="/www.github.com/mayershohag"
                                   className="bg-[#FFFFFF1A] hover:text-white duration-200 hover:scale-105 p-2 border border-slate-700 rounded-lg"
                              >
                                   <VscGithubAlt className="text-2xl" />
                              </a>
                         </div>
                         <div className="text-slate-400 mt-5">
                              <p>Magura Polytechnic Institute</p>
                              <p>Magura, Bangladesh</p>
                         </div>
                    </div>
               </footer>

               <div className="text-center pb-8 lg:py-10 text-slate-400">
                    &copy;{new Date().getFullYear()} MaPI Competitive
                    Programming Club. All rights reserved.
               </div>
          </>
     );
};

export default Footer;
