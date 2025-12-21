import { Link } from "react-router";

const leaderboardData = [
     { rank: 1, name: "Ayaan Khan", roll: 632580, score: 2450, solved: 312 },
     { rank: 2, name: "Riya Sharma", roll: 632570, score: 2380, solved: 298 },
     { rank: 3, name: "Arjun Patel", roll: 632560, score: 2305, solved: 287 },
     { rank: 4, name: "Sneha Verma", roll: 632520, score: 2210, solved: 275 },
     { rank: 5, name: "Rahul Mehta", roll: 632550, score: 2150, solved: 268 },
     { rank: 6, name: "Ayaan Khan", roll: 632580, score: 2450, solved: 312 },
     { rank: 7, name: "Riya Sharma", roll: 632570, score: 2380, solved: 298 },
     { rank: 8, name: "Arjun Patel", roll: 632560, score: 2305, solved: 287 },
     { rank: 9, name: "Sneha Verma", roll: 632520, score: 2210, solved: 275 },
     { rank: 10, name: "Rahul Mehta", roll: 632550, score: 2150, solved: 268 },
];

export default function Leaderboard() {
     return (
          <section className="relative py-20 px-4">
               
               <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                         <h2 className="text-6xl font-bold bg-linear-to-r from-cyan-400 via-white/50 to-pink-600 bg-clip-text text-transparent">
                              Leaderboard
                         </h2>
                         <p className="text-gray-300 mt-3">
                              See who’s dominating the MPI Competitive
                              Programming Club
                         </p>
                    </div>

                    {/* Leaderboard Card */}
                    <div className="overflow-hidden rounded-2xl bg-slate-800 backdrop-blur border border-white/10 shadow-xl">
                         <div className="grid grid-cols-5 px-6 py-4 text-sm text-gray-400 bg-slate-700">
                              <span>Rank</span>
                              <span>Name</span>
                              <span className="text-center">Solved</span>
                              <span className="text-center">Roll</span>
                              <span className="text-right">Score</span>
                         </div>

                         {leaderboardData.map((user) => (
                              <div
                                   key={user.rank}
                                   className="grid grid-cols-5 px-6 py-4 items-center text-sm hover:bg-white/5 transition"
                                   title={`click ${user.name} to view profile`}
                              >
                                   <span className="font-semibold text-white">
                                        #{user.rank}
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
                                        {user.roll}
                                   </span>

                                   <span className="text-right font-semibold text-blue-400">
                                        {user.score}
                                   </span>
                              </div>
                         ))}
                    </div>

                    <div className="text-center mt-10">
                         <button className="bg-linear-to-r from-blue-600  to-pink-600 rounded-xl cursor-pointer px-5 py-3 shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:shadow-[0_0_45px_rgba(34,211,238,0.9)] transition text-white">
                              View Full Leaderboard
                         </button>
                    </div>
               </div>

               <div className="pointer-events-none absolute md:left-0 lg:-left-30 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               <div className="pointer-events-none absolute md:right-0 lg:right-0 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
          </section>
     );
}
