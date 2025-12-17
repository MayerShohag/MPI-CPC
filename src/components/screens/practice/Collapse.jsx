import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router";

const Collapse = () => {
     const problems = [
          {
               id: 1,
               category: "Arrays and Basic Problem Solving",
               problemName: "Count Elements Greater Than Previous Average",
               range: "Easy",
               successRate: 62.77,
          },
          {
               id: 2,
               category: "Arrays and Basic Problem Solving",
               problemName: "Merge and Sort Intervals",
               range: "Medium",
               successRate: 81.4,
          },
          {
               id: 3,
               category: "Arrays and Basic Problem Solving",
               problemName: "Subarrays with Given Sum and Bounded Maximum",
               range: "Hard",
               successRate: 73.08,
          },
     ];
     const [collapse, setCollapse] = useState(false);
     return (
          <div
               className={`collapse collapse-${
                    collapse ? "open" : "close"
               } collapse-arrow bg-slate-600 border-base-300 border mt-5`}
          >
               <div
                    className="collapse-title flex items-center justify-between font-semibold text-white cursor-pointer p-5"
                    onClick={() => setCollapse(!collapse)}
               >
                    <h1>Arrays and Basic Problem Solving</h1>
                    <p className="pr-10">0/5 Solved</p>
               </div>
               <div className="collapse-content text-sm bg-slate-700">
                    <div className="grid md:grid-cols-2 mt-5 grid-cols-1 gap-5">
                         {problems.map((problem) => (
                              <Link
                                   key={problem.id}
                                   to={"/problem/:id"}
                                   className=" border hover:bg-slate-600 hover:shadow-2xl transition-all text-white duration-200 hover:scale-102 border-slate-400 rounded-xl p-5"
                              >
                                   <h1 className="text-lg">
                                        {problem.problemName}
                                   </h1>
                                   <div className="flex items-center">
                                        <p>{problem.range}</p>
                                        <span>
                                             <LuDot className="text-2xl" />
                                        </span>
                                        <p>
                                             Success Rate: {problem.successRate}
                                             %
                                        </p>
                                   </div>
                              </Link>
                         ))}
                         <Link
                              to={"/problem/:id"}
                              className=" border flex items-center hover:bg-slate-600 hover:shadow-2xl transition-all text-white duration-200 hover:scale-102 border-slate-400 rounded-xl p-5"
                         >
                              <div className="text-lg flex gap-3 items-center">
                                   <span>Browse All Challenges</span>
                                   <GoArrowRight />
                              </div>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Collapse;
