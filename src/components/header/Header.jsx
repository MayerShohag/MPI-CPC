import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";
import { HiXMark } from "react-icons/hi2";
import { IoCodeSlashOutline, IoPeople } from "react-icons/io5";
import { PiRankingFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router";

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
                                   <RxHamburgerMenu className="text-2xl text-slate-300" />
                              </div>
                         ) : (
                              <div
                                   onClick={() => setIsShow(true)}
                                   className="relative"
                              >
                                   <HiXMark className="text-2xl text-slate-300" />
                                   <div className="absolute top-6 right-0 bg-indigo-950 shadow-2xl backdrop-blur-2xl p-3 flex flex-col gap-2 rounded-xl">
                                        <NavLink
                                             to={"/login"}
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? "flex gap-2 items-center border shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 border-slate-700 lg:px-5 px-3 py-1 rounded-xl transition-all"
                                                       : "flex gap-2 items-center bg-[#AD46FF1A] px-3 py-1 rounded-xl transition-all"
                                             }
                                        >
                                             <FaUser />
                                             <span>Login</span>
                                        </NavLink>
                                        <NavLink
                                             to={"/"}
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? "flex gap-2 items-center border shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 border-slate-700 lg:px-5 px-3 py-1 rounded-xl transition-all"
                                                       : "flex gap-2 items-center bg-[#AD46FF1A] px-3 py-1 rounded-xl transition-all"
                                             }
                                        >
                                             <AiFillHome />
                                             <span>Home</span>
                                        </NavLink>
                                        <NavLink
                                             to={"/contests"}
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? "flex gap-2 items-center border shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 border-slate-700 lg:px-5 px-3 py-1 rounded-xl transition-all"
                                                       : "flex gap-2 items-center bg-[#AD46FF1A] px-3 py-1 rounded-xl transition-all"
                                             }
                                        >
                                             <GiTrophy />
                                             <span>Contests</span>
                                        </NavLink>
                                        <NavLink
                                             to={"/practice"}
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? "flex gap-2 items-center border shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 border-slate-700 lg:px-5 px-3 py-1 rounded-xl transition-all"
                                                       : "flex gap-2 items-center bg-[#AD46FF1A] px-3 py-1 rounded-xl transition-all"
                                             }
                                        >
                                             <IoCodeSlashOutline />
                                             <span>Practice</span>
                                        </NavLink>
                                        <NavLink
                                             to={"/leaderboard"}
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? "flex gap-2 items-center border shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 border-slate-700 lg:px-5 px-3 py-1 rounded-xl transition-all"
                                                       : "flex gap-2 items-center bg-[#AD46FF1A] px-3 py-1 rounded-xl transition-all"
                                             }
                                        >
                                             <PiRankingFill />
                                             <span>Leaderboard</span>
                                        </NavLink>
                                        <NavLink
                                             to={"/community"}
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? "flex gap-2 items-center border shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 border-slate-700 lg:px-5 px-3 py-1 rounded-xl transition-all"
                                                       : "flex gap-2 items-center bg-[#AD46FF1A] px-3 py-1 rounded-xl transition-all"
                                             }
                                        >
                                             <IoPeople />
                                             <span>Community</span>
                                        </NavLink>
                                   </div>
                              </div>
                         )}
                    </div>

                    <nav className="hidden md:flex p-2 rounded-full backdrop-blur-sm border border-slate-700 items-center shadow-[inset_-8px_-15px_20px_#AD46FF1A] lg:gap-3 gap-1 text-sm lg:text-lg text-slate-300">
                         <NavLink
                              to={"/"}
                              className={({ isActive }) =>
                                   isActive
                                        ? "flex gap-1 items-center border shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 border-slate-700 lg:px-5 px-2 py-1 rounded-full transition-all"
                                        : "flex gap-1 items-center hover:shadow-[inset_-8px_-15px_20px_#AD46FF1A] hover:border hover:border-r-0 hover:border-l-0 border-slate-700 lg:px-5 px-2 py-1 rounded-full"
                              }
                         >
                              <AiFillHome />
                              <span>Home</span>
                         </NavLink>
                         <NavLink
                              to={"/contests"}
                              className={({ isActive }) =>
                                   isActive
                                        ? "flex gap-1 items-center border shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 border-slate-700 lg:px-5 px-2 py-1 rounded-full transition-all"
                                        : "flex gap-1 items-center hover:shadow-[inset_-8px_-15px_20px_#AD46FF1A] hover:border hover:border-r-0 hover:border-l-0 border-slate-700 lg:px-5 px-2 py-1 rounded-full"
                              }
                         >
                              <GiTrophy />
                              <span>Contests</span>
                         </NavLink>
                         <NavLink
                              to={"/practice"}
                              className={({ isActive }) =>
                                   isActive
                                        ? "flex gap-1 items-center border shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 border-slate-700 lg:px-5 px-2 py-1 rounded-full transition-all"
                                        : "flex gap-1 items-center hover:shadow-[inset_-8px_-15px_20px_#AD46FF1A] hover:border hover:border-r-0 hover:border-l-0 border-slate-700 lg:px-5 px-2 py-1 rounded-full"
                              }
                         >
                              <IoCodeSlashOutline className="text-xl"/>
                              <span>Practice</span>
                         </NavLink>
                         <NavLink
                              to={"/leaderboard"}
                              className={({ isActive }) =>
                                   isActive
                                        ? "flex gap-1 items-center border shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 border-slate-700 lg:px-5 px-2 py-1 rounded-full transition-all"
                                        : "flex gap-1 items-center hover:shadow-[inset_-8px_-15px_20px_#AD46FF1A] hover:border hover:border-r-0 hover:border-l-0 border-slate-700 lg:px-5 px-2 py-1 rounded-full"
                              }
                         >
                              <PiRankingFill />
                              <span>Leaderboard</span>
                         </NavLink>
                         <NavLink
                              to={"/community"}
                              className={({ isActive }) =>
                                   isActive
                                        ? "flex gap-1 items-center border shadow-[inset_-8px_-15px_20px_#AD46FF1A] border-r-0 border-l-0 border-slate-700 lg:px-5 px-2 py-1 rounded-full transition-all"
                                        : "flex gap-1 items-center hover:shadow-[inset_-8px_-15px_20px_#AD46FF1A] hover:border hover:border-r-0 hover:border-l-0 border-slate-700 lg:px-5 px-2 py-1 rounded-full"
                              }
                         >
                              <IoPeople />
                              <span>Community</span>
                         </NavLink>
                    </nav>

                    <div className="md:flex hidden items-center lg:text-lg gap-3">
                         <Link
                              to={"/login"}
                              className="border hidden text-slate-300 hover:text-white md:flex items-center gap-2 backdrop-blur-[5px] shadow-[inset_-8px_-15px_20px_#AD46FF1A] hover:shadow-[inset_-8px_-15px_10px_#AD46FF1A] border-r-0 border-l-0 border-slate-700 hover:border-slate-500 px-5 py-1 rounded-full transition-all"
                         >
                              <FaUser />
                              <span>Login</span>
                         </Link>
                    </div>
               </div>
          </header>
     );
};

export default Header;
