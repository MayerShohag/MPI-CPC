import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
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
          <header className="sticky top-0 z-50 backdrop-blur md:backdrop-blur-none">
               <div className="max-w-7xl px-5 mx-auto flex items-center justify-between">
                    <Link to={"/"}>
                         <img
                              src="MPI-CPC.png"
                              className="w-20"
                              alt="MPI-CPC logo"
                         />
                    </Link>
                    <div className="text-white md:hidden block">
                         {isShow ? (
                              <div onClick={() => setIsShow(false)}>
                                   <RxHamburgerMenu className="text-2xl text-slate-300"/>
                              </div>
                         ) : (
                              <div
                                   onClick={() => setIsShow(true)}
                                   className="relative"
                              >
                                   <HiXMark className="text-2xl text-slate-300"/>
                                   <div className="absolute top-6 right-0 bg-indigo-950 shadow-2xl backdrop-blur-2xl p-3 flex flex-col gap-2 rounded-xl">
                                        <Link
                                             to={"/profile"}
                                             className="flex gap-1 items-center bg-[#AD46FF1A] px-3 py-1 rounded-lg transition-all"
                                        >
                                             <FaUser />
                                             <span>Register</span>
                                        </Link>
                                        <Link
                                             to={"/"}
                                             className="flex gap-1 items-center bg-[#AD46FF1A] px-3 py-1 rounded-lg transition-all"
                                        >
                                             <AiFillHome />
                                             <span>Home</span>
                                        </Link>
                                        <Link
                                             to={"/contests"}
                                             className="flex gap-1 items-center bg-[#AD46FF1A] px-3 py-1 rounded-lg transition-all"
                                             href="#"
                                        >
                                             <GiTrophy />
                                             <span>Contests</span>
                                        </Link>
                                        <Link
                                             to={"/practice"}
                                             className="flex gap-1 items-center bg-[#AD46FF1A] px-3 py-1 rounded-lg transition-all"
                                             href="#"
                                        >
                                             <MdOutlineModelTraining />
                                             <span>Practice</span>
                                        </Link>
                                        <Link
                                             to={"/leaderboard"}
                                             className="flex gap-1 items-center bg-[#AD46FF1A] px-3 py-1 rounded-lg transition-all"
                                             href="#"
                                        >
                                             <PiRankingFill />
                                             <span>Leaderboard</span>
                                        </Link>
                                        <Link
                                             to={"/community"}
                                             className="flex gap-1 items-center bg-[#AD46FF1A] px-3 py-1 rounded-lg transition-all"
                                             href="#"
                                        >
                                             <IoPeople />
                                             <span>Community</span>
                                        </Link>
                                   </div>
                              </div>
                         )}
                    </div>

                    <nav className="hidden md:flex p-2 rounded-full backdrop-blur-[5px] border border-slate-700 items-center shadow-[inset_-8px_-15px_20px_#AD46FF1A] lg:gap-3 gap-1 text-sm lg:text-lg text-slate-300">
                         <Link
                              to={"/"}
                              className="flex gap-1 items-center border-transparent border hover:shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 hover:border-slate-700 lg:px-5 px-2 py-1 rounded-full transition-all"
                              href="#"
                         >
                              <AiFillHome />
                              <span>Home</span>
                         </Link>
                         <Link
                              to={"/contests"}
                              className="flex gap-1 items-center border-transparent border hover:shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 hover:border-slate-700 lg:px-5 px-2 py-1 rounded-full transition-all"
                              href="#"
                         >
                              <GiTrophy />
                              <span>Contests</span>
                         </Link>
                         <Link
                              to={"/practice"}
                              className="flex gap-1 items-center border-transparent border hover:shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 hover:border-slate-700 lg:px-5 px-2 py-1 rounded-full transition-all"
                              href="#"
                         >
                              <MdOutlineModelTraining />
                              <span>Practice</span>
                         </Link>
                         <Link
                              to={"/leaderboard"}
                              className="flex gap-1 items-center border-transparent border hover:shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 hover:border-slate-700 lg:px-5 px-2 py-1 rounded-full transition-all"
                              href="#"
                         >
                              <PiRankingFill />
                              <span>Leaderboard</span>
                         </Link>
                         <Link
                              to={"/community"}
                              className="flex gap-1 items-center border-transparent border hover:shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 hover:border-slate-700 lg:px-5 px-2 py-1 rounded-full transition-all"
                              href="#"
                         >
                              <IoPeople />
                              <span>Community</span>
                         </Link>
                    </nav>

                    <div className="md:flex hidden items-center lg:text-lg gap-3">
                         <Link
                              to={"/profile"}
                              className="border hidden md:block backdrop-blur-[5px] shadow-[inset_-8px_-15px_20px_#AD46FF1A] hover:shadow-[inset_-8px_-15px_10px_#AD46FF1A] border-r-0 border-l-0 border-slate-700 hover:border-slate-500 px-5 py-1 rounded-full transition-all"
                         >
                              Register
                         </Link>
                    </div>
               </div>
          </header>
     );
};

export default Header;
