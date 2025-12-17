import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { GiTrophy } from "react-icons/gi";
import { HiXMark } from "react-icons/hi2";
import { IoPeople } from "react-icons/io5";
import { MdOutlineModelTraining } from "react-icons/md";
import { PiRankingFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

const Header = () => {
     const [isShow, setIsShow] = useState(true);
     return (
          <header className="sticky top-0 z-50 backdrop-blur">
               <div class="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
               <div className="max-w-7xl px-5 mx-auto flex items-center justify-between">
                    <div className="text-white block md:hidden">
                         {isShow ? (
                              <div
                                   onClick={() => setIsShow(false)}
                              >
                                   <RxHamburgerMenu />
                              </div>
                         ) : (
                              <div onClick={() => setIsShow(true)} className="relative">
                                   <HiXMark />
                                   <div className="absolute top-5 bg-slate-900 p-4 flex flex-col gap-2 rounded-xl">
                                        <Link
                                             to={"/"}
                                             className="flex gap-1 items-center border border-slate-700 px-3 py-1 rounded-lg transition-all"
                                        >
                                             <AiFillHome />
                                             <span>Home</span>
                                        </Link>
                                        <Link
                                             to={"/contests"}
                                             className="flex gap-1 items-center border border-slate-700 px-3 py-1 rounded-lg transition-all"
                                             href="#"
                                        >
                                             <GiTrophy />
                                             <span>Contests</span>
                                        </Link>
                                        <Link
                                             to={"/practice"}
                                             className="flex gap-1 items-center border border-slate-700 px-3 py-1 rounded-lg transition-all"
                                             href="#"
                                        >
                                             <MdOutlineModelTraining />
                                             <span>Practice</span>
                                        </Link>
                                        <Link
                                             to={"/leaderboard"}
                                             className="flex gap-1 items-center border border-slate-700 px-3 py-1 rounded-lg transition-all"
                                             href="#"
                                        >
                                             <PiRankingFill />
                                             <span>Leaderboard</span>
                                        </Link>
                                        <Link
                                             to={"/community"}
                                             className="flex gap-1 items-center border border-slate-700 px-3 py-1 rounded-lg transition-all"
                                             href="#"
                                        >
                                             <IoPeople />
                                             <span>Community</span>
                                        </Link>
                                   </div>
                              </div>
                         )}
                    </div>
                    <Link
                         to={"/"}
                         className="text-xl font-bold bg-linear-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
                    >
                         <img
                              src="MPI-CPC.png"
                              className="w-20"
                              alt="MPI-CPC logo"
                         />
                    </Link>

                    <nav className="hidden md:flex border p-2 border-slate-700 bg-slate-900 rounded-full items-center gap-2 text-sm lg:text-lg text-slate-300">
                         <Link
                              to={"/"}
                              className="flex gap-1 items-center border border-slate-700 px-3 py-1 rounded-full hover:bg-slate-700 transition-all"
                              href="#"
                         >
                              <AiFillHome />
                              <span>Home</span>
                         </Link>
                         <Link
                              to={"/contests"}
                              className="flex gap-1 items-center border border-slate-700 px-3 py-1 rounded-full hover:bg-slate-700 transition-all"
                              href="#"
                         >
                              <GiTrophy />
                              <span>Contests</span>
                         </Link>
                         <Link
                              to={"/practice"}
                              className="flex gap-1 items-center border border-slate-700 px-3 py-1 rounded-full hover:bg-slate-700 transition-all"
                              href="#"
                         >
                              <MdOutlineModelTraining />
                              <span>Practice</span>
                         </Link>
                         <Link
                              to={"/leaderboard"}
                              className="flex gap-1 items-center border border-slate-700 px-3 py-1 rounded-full hover:bg-slate-700 transition-all"
                              href="#"
                         >
                              <PiRankingFill />
                              <span>Leaderboard</span>
                         </Link>
                         <Link
                              to={"/community"}
                              className="flex gap-1 items-center border border-slate-700 px-3 py-1 rounded-full hover:bg-slate-700 transition-all"
                              href="#"
                         >
                              <IoPeople />
                              <span>Community</span>
                         </Link>
                    </nav>

                    <div className="flex items-center lg:text-lg gap-3">
                         <button className="bg-linear-to-r from-blue-600  to-pink-600 rounded-xl cursor-pointer px-5 py-2 shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:shadow-[0_0_45px_rgba(34,211,238,0.9)] text-white transition">
                              Register
                         </button>
                    </div>
               </div>
          </header>
     );
};

export default Header;
