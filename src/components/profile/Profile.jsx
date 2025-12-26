import React from "react";

const user = {
     name: "Jane Doe",
     handle: "janedoe123",
     avatar: "https://i.pravatar.cc/150?img=12",
     bio: "Competitive programmer & problem solver. Loves DP and Graphs!",
     location: "New York, USA",
     timezone: "GMT-5",
     ratings: {
          codeforces: 1800,
          leetcode: 2200,
          atcoder: 1700,
     },
     contestHistory: [
          { name: "CF Round 890", rank: 45, platform: "Codeforces" },
          { name: "LeetCode Weekly 300", rank: 12, platform: "LeetCode" },
     ],
     skills: ["Dynamic Programming", "Graphs", "Math"],
     languages: ["C++", "Python", "Java"],
     badges: ["Top 10 Club", "Contest Master", "Graph Guru"],
     social: {
          codeforces: "https://codeforces.com/profile/janedoe123",
          leetcode: "https://leetcode.com/janedoe123",
          github: "https://github.com/janedoe123",
     },
};

export default function Profile() {
     return (
          <div className="max-w-4xl mx-auto p-6 rounded-2xl shadow-xl text-white">
               {/* Header */}
               <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-6">
                    <div className="relative">
                         <img
                              src={user.avatar}
                              alt="Avatar"
                              className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-purple-400 shadow-lg"
                         />
                         <span className="absolute bottom-0 right-0 w-6 h-6 bg-green-400 rounded-full border-2 border-purple-700 animate-pulse"></span>
                    </div>
                    <div>
                         <h1 className="text-3xl font-bold">{user.name}</h1>
                         <p className="text-purple-300 font-semibold text-lg">
                              @{user.handle}
                         </p>
                         <p className="mt-2 text-gray-300">{user.bio}</p>
                         <p className="text-gray-400 text-sm mt-1">
                              {user.location} | {user.timezone}
                         </p>
                    </div>
               </div>

               {/* Ratings */}
               <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    {Object.entries(user.ratings).map(([platform, rating]) => (
                         <div
                              key={platform}
                              className="bg-purple-800/50 backdrop-blur-md p-4 rounded-xl border border-purple-400 shadow-md hover:scale-105 transform transition-all duration-300"
                         >
                              <p className="text-gray-400 uppercase text-sm">
                                   {platform}
                              </p>
                              <p className="text-2xl font-bold text-purple-300">
                                   {rating}
                              </p>
                         </div>
                    ))}
               </div>

               {/* Skills & Languages */}
               <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-purple-200">
                         Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                         {user.skills.map((skill) => (
                              <span
                                   key={skill}
                                   className="bg-purple-600/30 text-purple-100 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:scale-105 transform transition"
                              >
                                   {skill}
                              </span>
                         ))}
                    </div>
                    <h2 className="text-xl font-semibold mt-4 mb-2 text-purple-200">
                         Languages
                    </h2>
                    <div className="flex flex-wrap gap-2">
                         {user.languages.map((lang) => (
                              <span
                                   key={lang}
                                   className="bg-indigo-600/30 text-indigo-100 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:scale-105 transform transition"
                              >
                                   {lang}
                              </span>
                         ))}
                    </div>
               </div>

               {/* Contest History */}
               <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-purple-200">
                         Recent Contests
                    </h2>
                    <div className="space-y-3">
                         {user.contestHistory.map((contest, index) => (
                              <div
                                   key={index}
                                   className="flex justify-between bg-purple-800/50 p-4 rounded-xl border-l-4 border-purple-400 shadow-md hover:bg-purple-700/60 transition-colors"
                              >
                                   <div>
                                        <p className="font-medium text-purple-100">
                                             {contest.name}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                             {contest.platform}
                                        </p>
                                   </div>
                                   <p className="font-bold text-green-400">
                                        Rank {contest.rank}
                                   </p>
                              </div>
                         ))}
                    </div>
               </div>

               {/* Badges */}
               <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-purple-200">
                         Badges
                    </h2>
                    <div className="flex flex-wrap gap-2">
                         {user.badges.map((badge) => (
                              <span
                                   key={badge}
                                   className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold shadow-sm hover:scale-110 transform transition"
                              >
                                   {badge}
                              </span>
                         ))}
                    </div>
               </div>

               {/* Social Links */}
               <div className="flex space-x-6 mt-4">
                    {Object.entries(user.social).map(([platform, link]) => (
                         <a
                              key={platform}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-300 font-medium hover:text-purple-50 hover:underline transition-colors"
                         >
                              {platform}
                         </a>
                    ))}
               </div>
          </div>
     );
}
