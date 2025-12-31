import { BsCalendar2Event } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";
import { GoPeople, GoTrophy } from "react-icons/go";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { LuClock4 } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";

const code = `function promiseDay() {
     let yourLove = false;
     const commit_a_promise = new Promise((turuLove, fakeLove) => {
          if (yourLove)
               turuLove("Today I promise you, I will be with you until my last breath.");
          else
               fakeLove("Honey, today is the last time.");
     });
     return commit_a_promise;
}

promiseDay()
     .then(turuLove => console.log(turuLove))
     .catch(fakeLove => console.log(fakeLove));`;

const Home = () => {
     const [text, setText] = useState("");
     const [index, setIndex] = useState(0);

     useEffect(() => {
          const timeout = setTimeout(() => {
               if (index < code.length) {
                    setText((prev) => prev + code[index]);
                    setIndex(index + 1);
               } else {
                    setText("");
                    setIndex(0);
               }
          }, 5);
          return () => clearTimeout(timeout);
     }, [index]);

     return (
          <div className="text-white relative">
               
               <div className="hidden lg:block pointer-events-none relative z-0 lg:-top-22 lg:h-180 opacity-50 md:h-100 right-0 lg:bg-[repeating-linear-gradient(to_right,#06081C,#1D142D_5%)] max-w-screen h-50 brightness-200 md:brightness-100" />
               <div className="pointer-events-none absolute md:left-0 lg:-left-30 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               <div className="pointer-events-none absolute md:right-0 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />

               <div className="text-gray-300 max-w-7xl mx-auto">
                    <div className="lg:absolute top-0 max-w-7xl mx-auto">
                         <div className="text-center pt-10 md:pt-15 lg:pt-20">
                              <h1 className="lg:text-8xl md:text-6xl akshar-font text-5xl pb-5 font-normal">
                                   MaPI Competitive <br /> Programming Club
                              </h1>
                              <p className="lg:text-2xl mx-auto text-md px-10 md:px-20 lg:px-50 lg:my-8">
                                   A platform for sharpening problem-solving
                                   skills, hosting competitive programming
                                   contests, and building a strong coding
                                   community at MPI.
                              </p>
                              <div className="flex gap-5 justify-center mt-10">
                                   <Link
                                        to={"/contests"}
                                        className="rounded-xl px-4 lg:px-10 py-3 bg-linear-to-r from-[#708FFF] to-[#771AFF] text-white font-medium transition"
                                   >
                                        Upcoming Contests
                                   </Link>
                                   <Link
                                        to={"/community"}
                                        className="border hover:bg-white/90 transition-all border-l-[#771AFF] duration-200 border-b-[#771AFF] hover:border-l-5 hover:text-black cursor-pointer px-4 lg:px-10 py-3 rounded-xl"
                                   >
                                        Join the Club
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>

               {/* hero  */}
               <div className="lg:absolute w-full top-120">
                    <section className="max-w-7xl lg:h-130 md:h-120 h-60 border shadow-[-5px_-5px_10px_indigo] md:shadow-[-5px_-5px_40px_indigo] lg:border-t-8 border-t-5 border-x-5 lg:border-x-8 border-b-0 border-b-transparent border-x-[#771AFF] border-t-[#771AFF] gap-5 rounded-[35px] lg:rounded-[50px] mx-5 md:mx-10 lg:mx-auto my-20">
                         <div className="lg:h-180 md:h-155 h-80 p-3 md:p-10 bg-slate-900 rounded-[30px] lg:rounded-[42px]">
                              <div className="border border-slate-600 w-full h-full bg-[#101E2C] p-3 md:p-10 rounded-[20px] lg:rounded-[35px]">
                                   <Highlight
                                        code={text}
                                        language="javascript"
                                        theme={themes.vsDark}
                                   >
                                        {({ tokens, getTokenProps }) => (
                                             <pre
                                                  className={` text-[11px] md:text-lg lg:text-2xl text-wrap lg:leading-10 overflow-auto w-full`}
                                             >
                                                  {tokens.map((line, idx) => (
                                                       <div key={idx}>
                                                            {line.map(
                                                                 (
                                                                      token,
                                                                      key
                                                                 ) => (
                                                                      <span
                                                                           key={
                                                                                key
                                                                           }
                                                                           {...getTokenProps(
                                                                                {
                                                                                     token,
                                                                                     key,
                                                                                }
                                                                           )}
                                                                      />
                                                                 )
                                                            )}
                                                       </div>
                                                  ))}
                                             </pre>
                                        )}
                                   </Highlight>
                              </div>
                         </div>
                    </section>
               </div>

               {/* sharpening skill  */}
               <section className="md:mt-60 lg:mt-180 my-30 mt-40 px-5">
                    <h1 className="text-center md:text-8xl text-5xl px-5 akshar-font font-normal">
                         Sharpen your coding skills
                    </h1>
                    <div className="max-w-7xl border overflow-hidden mt-15 p-5 pr-0 border-[#3FA7FF] md:p-15 gap-5 backdrop-blur rounded-2xl md:pr-0 mx-auto grid items-center lg:grid-cols-2 grid-cols-1">
                         <div className="mb-2 lg:mb-0">
                              <LiaLaptopCodeSolid className="hidden lg:block lg:text-8xl text-[#3FA7FF]" />
                              <p className="pr-5 text-sm md:text-lg text-white pb-8">
                                   Level up your coding skills with fun,
                                   bite-sized challenges called kata at MPI
                                   Competitive Programming Club. Built by
                                   developers for developers, each kata focuses
                                   on a specific skill to help you grow. Master
                                   the language you love or explore one of 20+
                                   supported languages.
                              </p>
                              <Link
                                   to="/community"
                                   className="relative z-10 border p-3 px-4 rounded-xl border-slate-700 hover:bg-slate-700 cursor-pointer"
                              >
                                   Join Our Community
                              </Link>
                         </div>
                         <div className="p-5 h-75 lg:h-80 md:h-115 rounded-l-xl bg-[#101E2C]">
                              <Highlight
                                   code={text}
                                   language="javascript"
                                   theme={themes.vsDark}
                              >
                                   {({ tokens, getTokenProps }) => (
                                        <pre
                                             className={` text-[11px] md:text-lg lg:text-sm text-wrap lg:leading-5 overflow-auto w-full`}
                                        >
                                             {tokens.map((line, idx) => (
                                                  <div key={idx}>
                                                       {line.map(
                                                            (token, key) => (
                                                                 <span
                                                                      key={key}
                                                                      {...getTokenProps(
                                                                           {
                                                                                token,
                                                                                key,
                                                                           }
                                                                      )}
                                                                 />
                                                            )
                                                       )}
                                                  </div>
                                             ))}
                                        </pre>
                                   )}
                              </Highlight>
                         </div>

                         <div className="h-100 absolute left-0 top-0 z-0 border w-50 bg-cyan-600 blur-[200px]  brightness-75"></div>
                    </div>
               </section>

               {/* Services Section  */}
               <section>
                    <h1 className="text-center md:text-8xl text-5xl mb-5 akshar-font font-normal">
                         Our assets!
                    </h1>
                    <p className="text-lg text-center px-5 md:px-20 lg:px-100">
                         A platform for sharpening problem-solving skills,
                         hosting competitive programming contests, and building
                         a strong coding community at MaPI.
                    </p>
                    <div className="max-w-7xl px-5 lg:px-0 mt-19 mx-auto grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-5">
                         <div className="border border-[#F941D1] rounded-3xl p-5 relative overflow-hidden hover:scale-105 transition-all duration-400">
                              <div className="absolute bg-[#F941D1] blur-[80px] z-0 w-30 h-30 top-0 right-0"></div>
                              <HiOutlineCodeBracket className="text-5xl mb-5 text-[#F941D1]" />
                              <h1 className="text-2xl font-bold">
                                   Practice Problems
                              </h1>
                              <p className="text-gray-400">
                                   Curated problems ranging from beginner to
                                   advanced level.
                              </p>
                              <Link
                                   to={"/practice"}
                                   className="flex items-center gap-2 mt-5"
                              >
                                   <span>Learn more</span>
                                   <MdOutlineArrowOutward />
                              </Link>
                         </div>
                         <div className="border border-[#FA967E] rounded-3xl p-5 relative overflow-hidden hover:scale-105 transition-all duration-400">
                              <div className="absolute bg-[#FA967E] blur-[80px] z-0 w-30 h-30 top-0 right-0"></div>
                              <GoTrophy className="text-5xl mb-5 p-1 text-[#FA967E]" />
                              <h1 className="text-2xl font-bold">Contests</h1>
                              <p className="text-gray-400">
                                   Regular intra-college contests with live
                                   rankings.
                              </p>

                              <Link
                                   to={"/contests"}
                                   className="flex items-center gap-2 mt-5"
                              >
                                   <span>Learn more</span>
                                   <MdOutlineArrowOutward />
                              </Link>
                         </div>
                         <div className="border border-[#AD59FF] rounded-3xl p-5 relative overflow-hidden hover:scale-105 transition-all duration-400">
                              <div className="absolute bg-[#AD59FF] blur-[80px] z-0 w-30 h-30 top-0 right-0"></div>
                              <IoPeopleOutline className="text-5xl mb-5 text-[#AD59FF]" />
                              <h1 className="text-2xl font-bold">Community</h1>
                              <p className="text-gray-400">
                                   Learn and grow together with fellow
                                   competitive programmers.
                              </p>

                              <Link
                                   to={"/community"}
                                   className="flex items-center gap-2 mt-5"
                              >
                                   <span>Learn more</span>
                                   <MdOutlineArrowOutward />
                              </Link>
                         </div>
                         <div className="border border-[#3FA7FF] rounded-3xl p-5 relative overflow-hidden hover:scale-105 transition-all duration-400">
                              <div className="absolute bg-[#3FA7FF] blur-[80px] z-0 w-30 h-30 top-0 right-0"></div>
                              <BsCalendar2Event className="text-5xl p-1.5 mb-5 text-[#3FA7FF]" />
                              <h1 className="text-2xl font-bold">Events</h1>
                              <p className="text-gray-400">
                                   Workshops, bootcamps, and guest lectures by
                                   experts.
                              </p>

                              <Link
                                   to={"/community"}
                                   className="flex items-center gap-2 mt-5"
                              >
                                   <span>Learn more</span>
                                   <MdOutlineArrowOutward />
                              </Link>
                         </div>
                    </div>
               </section>

               {/* Contest Section  */}
               <section className="max-w-7xl mx-auto my-30 px-5">
                    <h1 className="text-center md:text-8xl md:mb-20 text-5xl px-5 akshar-font font-normal">
                         Upcomming Contest
                    </h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
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

               {/* Competing section */}
               <section className="px-5">
                    <section className="border relative grid md:grid-cols-12 lg:p-10 p-5 items-center gap-5 overflow-hidden my-20 rounded-3xl max-w-7xl mx-auto border-[#F941D1]">
                         <div className="col-span-12 md:col-span-5">
                              <h2 className="text-4xl md:text-5xl lg:text-7xl akshar-font font-normal mb-4">
                                   Ready to start competing?
                              </h2>
                              <p className="text-white mb-5 text-lg lg:pr-30">
                                   Join MPI Competitive Programming Club and
                                   take your coding skills to the next level.
                              </p>
                              <Link
                                   to={"/practice"}
                                   className="bg-linear-to-r flex items-center relative z-10 gap-1 max-w-80 from-[#708FFF] to-[#771AFF] hover:border-transparent rounded-xl px-5 py-3 transition"
                              >
                                   <span>Get Started Now</span>
                                   <IoIosArrowRoundForward className="text-2xl" />
                              </Link>

                              <div className="h-50 absolute right-[45%] top-[20%] border w-80 bg-[#F941D1] blur-[150px] brightness-75"></div>
                         </div>
                         <div className="border col-span-12 md:col-span-7 border-[#F941D1] w-full h-80 md:h-90 lg:h-80 bg-[#101E2C] p-5 z-10 rounded-[20px] lg:rounded-3xl">
                              <Highlight
                                   code={text}
                                   language="javascript"
                                   theme={themes.vsDark}
                              >
                                   {({ tokens, getTokenProps }) => (
                                        <pre
                                             className={` text-[11px] md:text-sm text-wrap lg:leading-5 overflow-auto w-full`}
                                        >
                                             {tokens.map((line, idx) => (
                                                  <div key={idx}>
                                                       {line.map(
                                                            (token, key) => (
                                                                 <span
                                                                      key={key}
                                                                      {...getTokenProps(
                                                                           {
                                                                                token,
                                                                                key,
                                                                           }
                                                                      )}
                                                                 />
                                                            )
                                                       )}
                                                  </div>
                                             ))}
                                        </pre>
                                   )}
                              </Highlight>
                         </div>
                    </section>
               </section>
          </div>
     );
};

export default Home;
