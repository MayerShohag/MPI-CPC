import { LiaLaptopCodeSolid } from "react-icons/lia";
import Collapse from "./Collapse";

const Practice = () => {
     const problems = [
          {
               categoryName: "Arrays and Basic Problem Solving",
               problems: [
                    {
                         problemName:
                              "Count Elements Greater Than Previous Average",
                         problemDescription:
                              "Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.",
                         problemRange: "Easy",
                         successRate: 67.89,
                         input: "responseTimes = [100, 200, 150,300]",
                         output: "2",
                         inputFormat: `The first line contains an integer n (0 ≤ n ≤ 1000), the number of days. If n > 0, the next n lines contains an integer representing responseTimes[i].
If n = 0, the second line is omitted or empty.`,
                         example: `4 100 200 150 300`,
                    },
                    {
                         problemName: "Merge and Sort Intervals",
                         problemDescription:
                              "Given an array of intervals [startTime, endTime], merge all overlapping intervals and return a sorted array of non-overlapping intervals.",
                         problemRange: "Easy",
                         successRate: 67.89,
                         input: "intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]",
                         output: "[[1, 6], [8, 10], [15, 18]]",
                         inputFormat: `The first line contains an integer denoting the number of intervals.
The second line contains an integer denoting the length of individual interval array.
Each of the next N lines contains two space-separated integers startTime and endTime
Intervals may be provided in any order; duplicates and fully contained intervals are allowed.`,
                         example: `4
2
1 3
2 6
8 10
15 18`,
                    },
                    {
                         problemName:
                              "Subarrays with Given Sum and Bounded Maximum",
                         problemDescription:
                              "Given an integer array nums and integers k and M, count the number of contiguous subarrays whose sum equals k and whose maximum element is at most M.",
                         problemRange: "Easy",
                         successRate: 67.89,
                         input: `nums = [2, -1, 2, 1, -2, 3]
k = 3
M = 2`,
                         output: "2",
                         inputFormat: `The first line contains an integer n denoting the number of elements in nums.
The next n lines contains an integer denoting elements in nums followed by the value of k & M.`,
                         example: `6 → number of elements in nums
2 → elements of nums
-1
2
1
-2
3
3 → value of k
2 → value of M`,
                    },
               ],
          },
          {
               categoryName: "Arrays and Basic Problem Solving",
               problems: [
                    {
                         problemName:
                              "Count Elements Greater Than Previous Average",
                         problemDescription:
                              "Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.",
                         problemRange: "Easy",
                         successRate: 67.89,
                         input: "responseTimes = [100, 200, 150,300]",
                         output: "2",
                         inputFormat: `The first line contains an integer n (0 ≤ n ≤ 1000), the number of days. If n > 0, the next n lines contains an integer representing responseTimes[i].
If n = 0, the second line is omitted or empty.`,
                         example: `4 100 200 150 300`,
                    },
                    {
                         problemName: "Merge and Sort Intervals",
                         problemDescription:
                              "Given an array of intervals [startTime, endTime], merge all overlapping intervals and return a sorted array of non-overlapping intervals.",
                         problemRange: "Easy",
                         successRate: 67.89,
                         input: "intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]",
                         output: "[[1, 6], [8, 10], [15, 18]]",
                         inputFormat: `The first line contains an integer denoting the number of intervals.
The second line contains an integer denoting the length of individual interval array.
Each of the next N lines contains two space-separated integers startTime and endTime
Intervals may be provided in any order; duplicates and fully contained intervals are allowed.`,
                         example: `4
2
1 3
2 6
8 10
15 18`,
                    },
                    {
                         problemName:
                              "Subarrays with Given Sum and Bounded Maximum",
                         problemDescription:
                              "Given an integer array nums and integers k and M, count the number of contiguous subarrays whose sum equals k and whose maximum element is at most M.",
                         problemRange: "Easy",
                         successRate: 67.89,
                         input: `nums = [2, -1, 2, 1, -2, 3]
k = 3
M = 2`,
                         output: "2",
                         inputFormat: `The first line contains an integer n denoting the number of elements in nums.
The next n lines contains an integer denoting elements in nums followed by the value of k & M.`,
                         example: `6 → number of elements in nums
2 → elements of nums
-1
2
1
-2
3
3 → value of k
2 → value of M`,
                    },
               ],
          },
     ];
     return (
          <div className="relative min-h-screen text-gray-300">
               <div className="pointer-events-none absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[40px_40px]" />
               <div className="pointer-events-none absolute left-0 top-0 z-0 h-96 w-96 bg-cyan-600/60 blur-[150px] -rotate-45 brightness-75" />
               <div className="pointer-events-none absolute right-0 top-72 z-0 h-96 w-96 bg-pink-600/60 blur-[150px] brightness-75" />

               <section className="relative z-10 max-w-7xl mx-auto pt-10 px-4">
                    <h1 className="text-4xl font-bold">
                         Practice to grow your skills
                    </h1>
                    <p className="mt-5 text-gray-400">59 Practice Challenges</p>

                    <div className="mt-5 bg-slate-900 p-5 rounded-xl">
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
                              {problems.map((problemCategory) => (
                                   <Collapse
                                        problemCategory={problemCategory}
                                   />
                              ))}
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Practice;
