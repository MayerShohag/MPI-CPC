import { LiaLaptopCodeSolid } from "react-icons/lia";
import Collapse from "./Collapse";
import { useState } from "react";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

const Practice = () => {
     const problems = [
          {
               id: 1,
               categoryName: "Arrays",
               difficultyBadge: "Beginner",
               tags: [
                    "Array",
                    "Hash Table",
                    "Two Pointers",
                    "Kadane",
                    "Greedy",
                    "Prefix Sum",
                    "DP",
               ],
               timeLimit: "1s",
               successRate: 63.04,
               problems: [
                    {
                         Name: "Two Sum",
                         description:
                              "Find two numbers such that they add up to a target.",
                         input: "nums = [2,7,11,15], target = 9",
                         output: "[0,1]",
                         inputFormat: "n, nums[], target",
                         example: "4\n2 7 11 15\n9",
                    },
                    {
                         Name: "Remove Duplicates",
                         description: "Remove duplicates from a sorted array.",
                         input: "nums = [0,0,1,1,2]",
                         output: "3",
                         inputFormat: "n, sorted nums[]",
                         example: "5\n0 0 1 1 2",
                    },
                    {
                         Name: "Maximum Subarray",
                         description:
                              "Find the maximum sum of a contiguous subarray.",
                         input: "nums = [-2,1,-3,4,-1,2,1]",
                         output: "6",
                         inputFormat: "n, nums[]",
                         example: "7\n-2 1 -3 4 -1 2 1",
                    },
                    {
                         Name: "Buy and Sell Stock",
                         description: "Find maximum profit from stock prices.",
                         input: "prices = [7,1,5,3,6,4]",
                         output: "5",
                         inputFormat: "n, prices[]",
                         example: "6\n7 1 5 3 6 4",
                    },
                    {
                         Name: "Subarray Sum Equals K",
                         description: "Count subarrays whose sum equals k.",
                         input: "nums=[1,2,3], k=3",
                         output: "2",
                         inputFormat: "n, nums[], k",
                         example: "3\n1 2 3\n3",
                    },
                    {
                         Name: "Container With Most Water",
                         description: "Find container that holds most water.",
                         input: "height=[1,8,6,2,5,4,8,3,7]",
                         output: "49",
                         inputFormat: "n, height[]",
                         example: "9\n1 8 6 2 5 4 8 3 7",
                    },
                    {
                         Name: "Trapping Rain Water",
                         description: "Calculate trapped rain water.",
                         input: "height=[0,1,0,2,1,0,1,3]",
                         output: "6",
                         inputFormat: "n, height[]",
                         example: "8\n0 1 0 2 1 0 1 3",
                    },
               ],
          },
          {
               id: 2,
               categoryName: "Strings",
               difficultyBadge: "Beginner",
               tags: ["String", "Sliding Window"],
               timeLimit: "1s",
               successRate: 64.9,
               problems: [
                    {
                         Name: "Reverse String",
                         description: "Reverse a given string.",
                         input: "s = hello",
                         output: "olleh",
                         inputFormat: "string s",
                         example: "hello",
                    },
                    {
                         Name: "Longest Substring Without Repeating",
                         description:
                              "Find longest substring without repeating characters.",
                         input: "s = abcabcbb",
                         output: "3",
                         inputFormat: "string s",
                         example: "abcabcbb",
                    },
               ],
          },
          {
               id: 3,
               categoryName: "Intervals",
               difficultyBadge: "Intermediate",
               tags: ["Array", "Intervals"],
               timeLimit: "2s",
               successRate: 54.91,
               problems: [
                    {
                         Name: "Merge Intervals",
                         description: "Merge overlapping intervals.",
                         input: "[[1,3],[2,6],[8,10]]",
                         output: "[[1,6],[8,10]]",
                         inputFormat: "n, intervals[][]",
                         example: "3\n1 3\n2 6\n8 10",
                    },
               ],
          },
          {
               id: 4,
               categoryName: "Stack",
               difficultyBadge: "Intermediate",
               tags: ["Stack"],
               timeLimit: "1s",
               successRate: 57.66,
               problems: [
                    {
                         Name: "Valid Parentheses",
                         description: "Check if parentheses are valid.",
                         input: "s = ()[]{}",
                         output: "true",
                         inputFormat: "string s",
                         example: "()[]{}",
                    },
               ],
          },
          {
               id: 5,
               categoryName: "Queue",
               difficultyBadge: "Beginner",
               tags: ["Queue"],
               timeLimit: "1s",
               successRate: 71.09,
               problems: [
                    {
                         Name: "Implement Queue",
                         description: "Implement queue using arrays.",
                         input: "push 1, push 2, pop",
                         output: "1",
                         inputFormat: "operations",
                         example: "push 1\npush 2\npop",
                    },
               ],
          },
          {
               id: 6,
               categoryName: "DP",
               difficultyBadge: "Advanced",
               tags: ["DP"],
               timeLimit: "3s",
               successRate: 36.11,
               problems: [
                    {
                         Name: "Climbing Stairs",
                         description: "Count distinct ways to climb stairs.",
                         input: "n = 5",
                         output: "8",
                         inputFormat: "n",
                         example: "5",
                    },
               ],
          },
          {
               id: 7,
               categoryName: "Graphs",
               difficultyBadge: "Intermediate",
               tags: ["Graph", "DFS", "BFS"],
               timeLimit: "2s",
               successRate: 43.5,
               problems: [
                    {
                         Name: "Number of Islands",
                         description: "Count islands in a grid.",
                         input: "grid[][]",
                         output: "3",
                         inputFormat: "n, m, grid",
                         example: "3x3 grid",
                    },
                    {
                         Name: "Shortest Path in Binary Matrix",
                         description: "Find shortest path using BFS.",
                         input: "grid[][]",
                         output: "shortest length",
                         inputFormat: "n, m, grid",
                         example: "binary matrix",
                    },
               ],
          },
          {
               id: 8,
               categoryName: "Math",
               difficultyBadge: "Beginner",
               tags: ["Math"],
               timeLimit: "1s",
               successRate: 67.27,
               problems: [
                    {
                         Name: "Palindrome Number",
                         description: "Check if number is palindrome.",
                         input: "x = 121",
                         output: "true",
                         inputFormat: "integer x",
                         example: "121",
                    },
                    {
                         Name: "Power of Two",
                         description: "Check if number is power of two.",
                         input: "n = 16",
                         output: "true",
                         inputFormat: "integer n",
                         example: "16",
                    },
               ],
          },
          {
               id: 9,
               categoryName: "Bit Manipulation",
               difficultyBadge: "Intermediate",
               tags: ["Bit"],
               timeLimit: "1s",
               successRate: 61.77,
               problems: [
                    {
                         Name: "Single Number",
                         description: "Find element that appears once.",
                         input: "nums=[4,1,2,1,2]",
                         output: "4",
                         inputFormat: "n, nums[]",
                         example: "5\n4 1 2 1 2",
                    },
               ],
          },
          {
               id: 10,
               categoryName: "Recursion",
               difficultyBadge: "Intermediate",
               tags: ["Recursion"],
               timeLimit: "2s",
               successRate: 55.03,
               problems: [
                    {
                         Name: "Factorial",
                         description: "Compute factorial using recursion.",
                         input: "n = 5",
                         output: "120",
                         inputFormat: "n",
                         example: "5",
                    },
               ],
          },
     ];
     const [problemsData, setProblemData] = useState(problems);
     const badgeButton = problems.map((prob) => prob.difficultyBadge);
     const uniqueBadge = ["All", ...new Set(badgeButton)];
     const [isActive, setIsActive] = useState(0);

     const handleFilter = (idx) => {
          setIsActive(idx);
          if (uniqueBadge[idx] === "All") {
               return setProblemData(problems);
          }
          const filtered = problems.filter(
               (prob) => prob.difficultyBadge === uniqueBadge[idx]
          );
          setProblemData(filtered);
     };
     return (
          <div className="relative min-h-screen max-w-7xl mx-auto text-gray-300 mb-20">
               <section className="relative z-10 max-w-7xl mx-auto px-4">
                    <div className="relative text-gray-300 max-w-7xl mx-auto">
                         <div className="text-center pt-10 md:pt-15 lg:pt-20">
                              <h1 className="lg:text-8xl md:text-6xl akshar-font text-5xl pb-5 font-normal">
                                   Practice Problems
                              </h1>
                              <p className="lg:text-2xl mx-auto text-md px-15 md:px-20 lg:px-50">
                                   Sharpen your coding skills with curated
                                   problems
                              </p>
                         </div>
                         <div className="pointer-events-none absolute md:left-0 lg:-left-30 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
                         <div className="pointer-events-none absolute md:right-0 lg:-right-20 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center my-10">
                         {uniqueBadge.map((button, idx) => (
                              <button
                                   key={idx}
                                   onClick={() => handleFilter(idx)}
                                   className={`${
                                        isActive === idx
                                             ? "px-5 py-2 cursor-pointer bg-linear-to-r border border-[#708FFF] from-[#708FFF] to-[#771AFF] rounded-xl"
                                             : "px-5 py-2 cursor-pointer bg-slate-900 border border-slate-700 transition-all duration-300 rounded-xl"
                                   }`}
                              >
                                   {button}
                              </button>
                         ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 mb-15 lg:grid-cols-3 gap-10 relative z-10">
                         <div className="flex gap-4 border p-5 items-center border-[#90A1B9]/30 rounded-xl bg-[#90A1B9]/20">
                              <span className="bg-[#00BC7D] p-2 rounded-xl">
                                   <IoCodeSlashOutline className="text-4xl" />
                              </span>
                              <div>
                                   <p className="text-xl font-semibold">
                                        {problemsData.reduce((acc, obj) => {
                                             return (acc +=
                                                  obj.problems.length);
                                        }, 0)}
                                        +
                                   </p>
                                   <p className="text-slate-400">
                                        Total Problems
                                   </p>
                              </div>
                         </div>
                         <div className="flex gap-4 border p-5 items-center border-[#90A1B9]/30 rounded-xl bg-[#90A1B9]/20">
                              <span className="bg-linear-[-45deg] to-[#2B7FFF] from-[#AD46FF] p-2 rounded-xl">
                                   <SiTicktick className="text-4xl" />
                              </span>
                              <div>
                                   <p className="text-xl font-semibold">
                                        1200+
                                   </p>
                                   <p className="text-slate-400">
                                        Solutions Submitted
                                   </p>
                              </div>
                         </div>
                         <div className="flex gap-4 border p-5 items-center border-[#90A1B9]/30 rounded-xl bg-[#90A1B9]/20">
                              <span className="bg-linear-[-45deg] to-[#F6339A] from-[#FF2056] p-2 rounded-xl">
                                   <HiMiniArrowTrendingUp className="text-4xl" />
                              </span>
                              <div>
                                   <p className="text-xl font-semibold">85%</p>
                                   <p className="text-slate-400">
                                        Success Rate
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div>
                         <div className="mb-3">
                              <div className="flex items-center gap-2">
                                   <LiaLaptopCodeSolid className="text-4xl text-white" />
                                   <h2 className="text-2xl font-bold">
                                        Practice Challenges
                                   </h2>
                              </div>
                              <hr className="border border-slate-700 mt-3" />
                         </div>

                         <div className="mt-4 flex flex-col gap-5">
                              {problemsData.map((problemObject, idx) => (
                                   <Collapse
                                        key={idx}
                                        problemObject={problemObject}
                                   />
                              ))}
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Practice;
