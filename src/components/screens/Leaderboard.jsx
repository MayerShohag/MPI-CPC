import { BsTrophy } from "react-icons/bs";
import { CiMedal } from "react-icons/ci";
import { Link } from "react-router";

const leaderboardData = [
     {
          id: 1,
          name: "Ayaan Khan",
          roll: 632580,
          score: 2450,
          solved: 312,
          streak: 2,
     },
     {
          id: 2,
          name: "Riya Sharma",
          roll: 632570,
          score: 2380,
          solved: 298,
          streak: 4,
     },
     {
          id: 3,
          name: "Arjun Patel",
          roll: 632560,
          score: 2305,
          solved: 287,
          streak: 7,
     },
     {
          id: 4,
          name: "Sneha Verma",
          roll: 632520,
          score: 2210,
          solved: 275,
          streak: 12,
     },
     {
          id: 5,
          name: "Rahul Mehta",
          roll: 632550,
          score: 2150,
          solved: 268,
          streak: 5,
     },
     {
          id: 6,
          name: "Ayaan Khan",
          roll: 632580,
          score: 2120,
          solved: 260,
          streak: 9,
     },
     {
          id: 7,
          name: "Riya Sharma",
          roll: 632570,
          score: 2080,
          solved: 220,
          streak: 15,
     },
     {
          id: 8,
          name: "Arjun Patel",
          roll: 632560,
          score: 2034,
          solved: 198,
          streak: 18,
     },
     {
          id: 9,
          name: "Sneha Verma",
          roll: 632520,
          score: 1990,
          solved: 185,
          streak: 7,
     },
     {
          id: 10,
          name: "Rahul Mehta",
          roll: 632550,
          score: 1900,
          solved: 170,
          streak: 8,
     },
];
const leaders = leaderboardData.sort((a, b) => {
     return b.score - a.score;
});
const threeLeaders = leaders.slice(0, 3);
threeLeaders[0].icon = <BsTrophy className="text-2xl text-[#FDC700]" />;
threeLeaders[1].icon = <CiMedal className="text-3xl" />;
threeLeaders[2].icon = <CiMedal className="text-3xl text-[#FF8904]" />;

export default function Leaderboard() {
     return (
          <section className="relative min-h-screen max-w-7xl mx-auto text-gray-300 px-5 lg:px-0">
               <div className="max-w-7xl mx-auto">
                    <div className="text-center pt-10 md:pt-15 lg:pt-20">
                         <h1 className="lg:text-8xl md:text-6xl akshar-font text-5xl pb-5 font-normal">
                              Leaderboard
                         </h1>
                         <p className="lg:text-2xl mx-auto text-md px-15 md:px-20 lg:px-50">
                              Sharpen your coding skills with curated problems
                         </p>
                    </div>

                    <div className="grid grid-cols-1 relative gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 text-center content-center">
                         {threeLeaders.map((leader, idx) => (
                              <Link
                                   className="border relative border-white/15 lg:hover:scale-103 duration-300 transition-all bg-white/10 z-10 rounded-xl p-5 flex flex-col items-center"
                                   key={leader.id}
                                   to={`/${leader.name}`}
                                   title="View Profile"
                              >
                                   <div className="flex flex-col items-center gap-2">
                                        <span>{leader.icon}</span>
                                        <span className="text-4xl mt-2">
                                             #{idx + 1}
                                        </span>
                                        <span className="text-xl">
                                             {leader.name}
                                        </span>
                                        <span className="text-3xl">
                                             {leader.score}
                                        </span>
                                        <div className="flex gap-5 items-center mt-5">
                                             <div className="flex flex-col items-center">
                                                  <span>{leader.solved}</span>
                                                  <span className="text-slate-400">
                                                       Solved
                                                  </span>
                                             </div>
                                             <div className="flex flex-col">
                                                  <span>{leader.streak}</span>
                                                  <span className="text-slate-400">
                                                       Day Streak
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                              </Link>
                         ))}
                    </div>

                    <div className="rounded-2xl mt-20 bg-slate-800 backdrop-blur border border-white/10 shadow-xl">
                         <div className="grid grid-cols-5 px-6 rounded-t-[14px] py-4 text-sm text-gray-400 bg-slate-700">
                              <span>Rank</span>
                              <span>Name</span>
                              <span className="text-center">Solved</span>
                              <span className="text-center">Streak</span>
                              <span className="text-right">Score</span>
                         </div>

                         {leaders.slice(0, 10).map((user, idx) => (
                              <div
                                   key={user.id}
                                   className="grid grid-cols-5 lg:hover:scale-108 px-6 py-4 items-center text-sm hover:bg-white/5 lg:hover:translate-x-11 rounded-2xl transition"
                                   title={`click ${user.name} to view profile`}
                              >
                                   <span className="font-semibold text-white">
                                        #{idx + 1}
                                   </span>

                                   <span className="text-gray-200 font-medium">
                                        <Link
                                             to={"/profile"}
                                             title={`${user.name} Profile`}
                                        >
                                             {user.name}
                                        </Link>
                                   </span>

                                   <span className="text-center text-gray-300">
                                        {user.solved}
                                   </span>

                                   <span className="text-center text-gray-300">
                                        {user.streak} days
                                   </span>

                                   <span className="text-right font-semibold text-blue-400">
                                        {user.score}
                                   </span>
                              </div>
                         ))}
                    </div>

                    <div className="text-center my-10 mb-20">
                         <button className="rounded-xl px-4 cursor-pointer lg:px-10 py-3 relative z-10 bg-linear-to-r from-[#708FFF] to-[#771AFF] text-white font-medium transition">
                              View Full Leaderboard
                         </button>
                    </div>
               </div>

               <div className="pointer-events-none absolute md:left-0 lg:-left-30 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               <div className="pointer-events-none absolute md:right-0 lg:-right-20 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
          </section>
     );
}
