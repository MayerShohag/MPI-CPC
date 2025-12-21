import { BsCalendar2Event } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";
import { GoPeople, GoTrophy } from "react-icons/go";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { IoPeopleOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const Contest = () => {
     return (
          <div className="min-h-screen">
               <div className="relative text-gray-300 max-w-7xl mx-auto">
                    <div className="text-center pt-10 md:pt-15 lg:pt-20">
                         <h1 className="lg:text-8xl md:text-6xl akshar-font text-5xl pb-5 font-normal">
                              Upcomming Contests
                         </h1>
                         <p className="lg:text-2xl mx-auto text-md px-15 md:px-20 lg:px-50 lg:my-5">
                              Participate in exciting programming contests and{" "}
                              <br />
                              compete with fellow students.
                         </p>
                    </div>
                    <div className="pointer-events-none absolute md:left-0 lg:-left-30 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
                    <div className="pointer-events-none absolute md:right-0 lg:-right-20 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               </div>
               <section className="max-w-7xl mx-auto px-5 my-20">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                         <div className="border border-[#F941D1] rounded-2xl p-5 relative overflow-hidden hover:scale-105 transition-all duration-400">
                              <div className="absolute bg-[#F941D1] blur-[70px] w-50 h-20 top-0 right-0"></div>
                              <div className="flex items-center justify-between">
                                   <span className="bg-[#F941D1] rounded-full px-3 py-1 text-sm">
                                        Upcomming
                                   </span>
                                   <span>
                                        <GoTrophy className="text-3xl" />
                                   </span>
                              </div>
                              <h1 className="text-2xl font-bold mt-5 mb-3">
                                   MPI Weekly Coding Contest #12
                              </h1>
                              <p className="text-gray-400">
                                   A 2-hour competitive programming contest
                                   featuring algorithmic and data structure
                                   problems.
                              </p>
                              <div className="mt-3 flex flex-col gap-2">
                                   <div className="flex items-center gap-2">
                                        <span>
                                             <FaRegCalendarCheck />
                                        </span>
                                        <span>March 22, 2026</span>
                                   </div>

                                   <div className="flex items-center gap-2">
                                        <span>
                                             <LuClock4 />
                                        </span>
                                        <span>7:00 PM – 9:00 PM</span>
                                   </div>
                                   <div className="flex items-center gap-2 mb-10">
                                        <span>
                                             <GoPeople />
                                        </span>
                                        <span>128 participants</span>
                                   </div>
                                   <div className="w-full mt-2">
                                        <Link
                                             to={"/register"}
                                             className="border absolute bottom-5 w-11/12 mx-auto border-slate-700 rounded-xl bg-linear-to-r from-[#708FFF] to-[#771AFF] hover:border-transparent duration-300 text-white text-center py-2"
                                        >
                                             Register Now
                                        </Link>
                                   </div>
                              </div>
                         </div>

                         <div className="border border-[#FA967E] lg:scale-103 rounded-2xl p-5 relative overflow-hidden hover:scale-105 transition-all duration-400">
                              <div className="absolute bg-[#FA967E] blur-[70px] w-50 h-20 top-0 right-0"></div>
                              <div className="flex items-center justify-between">
                                   <span className="bg-[#FA967E] rounded-full px-3 py-1 text-sm">
                                        Upcomming
                                   </span>
                                   <span>
                                        <GoTrophy className="text-3xl" />
                                   </span>
                              </div>
                              <h1 className="text-2xl font-bold mt-5 mb-3">
                                   Beginner Friendly Contest
                              </h1>
                              <p className="text-gray-400">
                                   Perfect for newcomers. Focuses on basic
                                   problem-solving and implementation skills.
                              </p>
                              <div className="mt-3 flex flex-col gap-2">
                                   <div className="flex items-center gap-2">
                                        <span>
                                             <FaRegCalendarCheck />
                                        </span>
                                        <span>March 29, 2026</span>
                                   </div>

                                   <div className="flex items-center gap-2">
                                        <span>
                                             <LuClock4 />
                                        </span>
                                        <span>6:00 PM – 8:00 PM</span>
                                   </div>
                                   <div className="flex items-center gap-2 mb-10">
                                        <span>
                                             <GoPeople />
                                        </span>
                                        <span>67 participants</span>
                                   </div>
                                   <div className="w-full mt-2">
                                        <Link
                                             to={"/register"}
                                             className="border absolute bottom-5 w-11/12 mx-auto border-slate-700 rounded-xl bg-linear-to-r from-[#708FFF] to-[#771AFF] hover:border-transparent duration-300 text-white text-center py-2"
                                        >
                                             Register Now
                                        </Link>
                                   </div>
                              </div>
                         </div>

                         <div className="border border-[#3FA7FF] backdrop-blur-md rounded-xl p-5 relative overflow-hidden hover:scale-105 transition-all duration-400">
                              <div className="absolute bg-[#3FA7FF] blur-[70px] w-50 h-20 top-0 right-0"></div>
                              <div className="flex items-center justify-between">
                                   <span className="bg-[#3FA7FF] rounded-full px-3 py-1 text-sm">
                                        Upcomming
                                   </span>
                                   <span>
                                        <GoTrophy className="text-3xl" />
                                   </span>
                              </div>
                              <h1 className="text-2xl font-bold mt-5 mb-3">
                                   Inter-College Challenge
                              </h1>
                              <p className="text-gray-400">
                                   Compete with teams from other colleges and
                                   climb the live leaderboard.
                              </p>
                              <div className="mt-3 flex flex-col gap-2">
                                   <div className="flex items-center gap-2">
                                        <span>
                                             <FaRegCalendarCheck />
                                        </span>
                                        <span>April 04, 2026</span>
                                   </div>

                                   <div className="flex items-center gap-2">
                                        <span>
                                             <LuClock4 />
                                        </span>
                                        <span>7:00 PM – 9:00 PM</span>
                                   </div>
                                   <div className="flex items-center gap-2 mb-10">
                                        <span>
                                             <GoPeople />
                                        </span>
                                        <span>228 participants</span>
                                   </div>
                                   <div className="w-full mt-2">
                                        <Link
                                             to={"/register"}
                                             className="border absolute bottom-5 w-11/12 mx-auto border-slate-700 rounded-xl bg-linear-to-r from-[#708FFF] to-[#771AFF] hover:border-transparent duration-300 text-white text-center py-2"
                                        >
                                             Register Now
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="max-w-7xl border mb-20 bg-slate-900 p-5 border-slate-700 mx-5 lg:mx-auto md:flex gap-3 rounded-2xl">
                    <div>
                         <span className="bg-linear-to-b from-[#FF2056] to-[#F6339A] inline-block rounded-2xl p-3">
                              <GoTrophy className="text-3xl" />
                         </span>
                    </div>
                    <div>
                         <h1 className="text-lg font-semibold">
                              Contest Guideline
                         </h1>
                         <ul className="text-slate-400 list-disc pl-4">
                              <li>
                                   All contests are conducted online through our
                                   platform
                              </li>
                              <li>
                                   Participants must register before the contest
                                   begins
                              </li>
                              <li>
                                   Fair play and academic integrity are strictly
                                   enforced
                              </li>
                              <li>
                                   Winners will be announced on the leaderboard
                                   after each contest
                              </li>
                         </ul>
                    </div>
               </section>
          </div>
     );
};

export default Contest;
