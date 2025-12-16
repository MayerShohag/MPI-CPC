import { BsCalendar2Event } from "react-icons/bs";
import { CiTrophy } from "react-icons/ci";
import { GoTrophy } from "react-icons/go";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { Link } from "react-router";

const Home = () => {
     return (
          <div className="relative text-gray-300">
               <div class="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[40px_40px]"></div>

               {/* Hero section  */}
               <div>
                    <div className="text-center pt-20">
                         <p className="lg:text-7xl md:text-6xl text-4xl pb-5 font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-indigo-400 to-fuchsia-600 inline-block">
                              MPI Competitive Programming Club
                         </p>
                         <p className="lg:text-2xl mx-auto lg:max-w-4xl px-10">
                              A platform for sharpening problem-solving skills,
                              hosting competitive programming contests, and
                              building a strong coding community at MPI.
                         </p>

                         <div className="flex justify-center my-5">
                              <img
                                   src="/public/MPI-CPC.png"
                                   className="w-70"
                                   alt=""
                              />
                         </div>
                         <div className="flex gap-5 justify-center">
                              <button className="bg-linear-to-r from-blue-600  to-pink-600 rounded-xl cursor-pointer px-5 py-3 shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:shadow-[0_0_45px_rgba(34,211,238,0.9)] transition">
                                   Upcoming Contests
                              </button>
                              <button className="border hover:bg-white transition-all hover:text-black cursor-pointer px-5 py-3 rounded-xl">
                                   Join the Club
                              </button>
                         </div>
                    </div>

                    <div className="h-100 absolute left-0 top-0 border w-50 bg-cyan-600 blur-[150px] -rotate-45 brightness-75"></div>
                    <div className="h-100 absolute right-0 top-70 border w-50 bg-pink-600 blur-[150px]  brightness-75"></div>
               </div>

               {/* sharpening skill  */}
               <div className="max-w-7xl border overflow-hidden p-7 pr-0 border-slate-700 md:p-15 gap-5 backdrop-blur rounded-2xl md:pr-0 mx-auto my-20 grid items-center lg:grid-cols-2 grid-cols-1">
                    <div>
                         <LiaLaptopCodeSolid className="text-7xl" />
                         <h1 className="md:text-4xl font-bold pb-3">
                              Sharpen your coding skills
                         </h1>
                         <p className="pr-10 text-lg text-gray-400 pb-5">
                              Level up your coding skills with fun, bite-sized
                              challenges called kata at MPI Competitive
                              Programming Club. Built by developers for
                              developers, each kata focuses on a specific skill
                              to help you grow. Master the language you love or
                              explore one of 20+ supported languages.
                         </p>
                         <Link
                              to={"/community"}
                              className="border p-3 px-4 rounded-xl border-slate-700 hover:bg-slate-700 cursor-pointer"
                         >
                              Join Our Community
                         </Link>
                    </div>
                    <div>
                         <img
                              src="sharpe-skill.png"
                              className="rounded-l-2xl contrast-125"
                              alt=""
                         />
                    </div>

                    <div className="h-100 absolute left-0 top-0 border w-50 bg-cyan-600 blur-[200px]  brightness-75"></div>
               </div>

               {/* Services Section  */}
               <div className="max-w-7xl mt-19 mx-auto grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 px-10 gap-5">
                    <div className="border border-gray-700 backdrop-blur-md rounded-xl p-5 relative overflow-hidden hover:scale-105 transition-all duration-400">
                         <div className="absolute bg-pink-600 blur-[70px] w-30 h-20 top-0 right-0"></div>
                         <HiOutlineCodeBracket className="text-5xl mb-5" />
                         <h1 className="text-2xl font-bold">
                              Practice Problems
                         </h1>
                         <p className="text-gray-400">
                              Curated problems ranging from beginner to advanced
                              level.
                         </p>
                    </div>
                    <div className="border border-gray-700 backdrop-blur-md rounded-xl p-5 relative overflow-hidden hover:scale-105 transition-all duration-400">
                         <div className="absolute bg-cyan-600 blur-[70px] w-30 h-20 top-0 right-0"></div>
                         <GoTrophy className="text-5xl mb-5" />
                         <h1 className="text-2xl font-bold">Contests</h1>
                         <p className="text-gray-400">
                              Regular intra-college contests with live rankings.
                         </p>
                    </div>
                    <div className="border border-gray-700 backdrop-blur-md rounded-xl p-5 relative overflow-hidden hover:scale-105 transition-all duration-400">
                         <div className="absolute bg-pink-600 blur-[70px] w-30 h-20 top-0 right-0"></div>
                         <IoPeopleOutline className="text-5xl mb-5" />
                         <h1 className="text-2xl font-bold">Community</h1>
                         <p className="text-gray-400">
                              Learn and grow together with fellow competitive
                              programmers.
                         </p>
                    </div>
                    <div className="border border-gray-700 backdrop-blur-md rounded-xl p-5 relative overflow-hidden hover:scale-105 transition-all duration-400">
                         <div className="absolute bg-cyan-600 blur-[70px] w-30 h-20 top-0 right-0"></div>
                         <BsCalendar2Event className="text-5xl mb-5" />
                         <h1 className="text-2xl font-bold">Events</h1>
                         <p className="text-gray-400">
                              Workshops, bootcamps, and guest lectures by
                              experts.
                         </p>
                    </div>
               </div>

               {/* Competing section */}
               <section className="border relative overflow-hidden my-22 rounded-xl max-w-7xl mx-auto border-slate-700 backdrop-blur-md">
                    <div className="max-w-5xl mx-auto px-6 py-20 text-center">
                         <h2 className="text-3xl md:text-5xl font-bold mb-6">
                              Ready to start competing?
                         </h2>
                         <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
                              Join MPI Competitive Programming Club and take
                              your coding skills to the next level.
                         </p>
                         <button className="bg-linear-to-r from-blue-600  to-pink-600 rounded-xl cursor-pointer px-5 py-3 shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:shadow-[0_0_45px_rgba(34,211,238,0.9)] transition">
                              Get Started Now
                         </button>

                         <div className="h-100 absolute left-0 top-0 border w-50 bg-cyan-600 blur-[150px] -rotate-45 brightness-75"></div>
                         <div className="h-100 absolute right-0 top-50 border w-50 bg-pink-600 blur-[150px]  brightness-75"></div>
                    </div>
               </section>

               {/* Footer */}
               <footer className="py-8 text-center text-slate-500 text-sm">
                    © {new Date().getFullYear()}{" "}
                    <span className="animate-pulse">
                         MPI Competitive Programming Club
                    </span>
                    . All rights reserved.
               </footer>
          </div>
     );
};

export default Home;
