import { useContext } from "react";
import { Link } from "react-router";
import { problemContext } from "../../../context/context";
import { LuDot } from "react-icons/lu";

const Collapse = ({ problemObject }) => {
     const { setProblem } = useContext(problemContext);
     return (
          <div className="collapse collapse-plus rounded-2xl bg-[#90A1B9]/15 border border-[#90A1B9]/20">
               <input type="checkbox" />
               <div className="collapse-title">
                    <div className="flex items-center gap-2 mb-2">
                         <h1 className="font-semibold text-xl md:text-2xl">
                              {problemObject.categoryName}
                         </h1>
                         <span
                              className={`text-sm py-1 px-3 rounded-full ${
                                   problemObject.difficultyBadge === "Beginner"
                                        ? "bg-linear-to-r from-[#00C950] to-[#00BC7D]"
                                        : problemObject.difficultyBadge ===
                                          "Intermediate"
                                        ? "bg-linear-to-r from-[#F0B100] to-[#FF6900]"
                                        : "bg-linear-to-r from-[#FB2C36] to-[#F6339A]"
                              }`}
                         >
                              {problemObject.difficultyBadge}
                         </span>
                    </div>
                    <div className="flex md:text-lg text-sm text-slate-300 items-center">
                         <p>Success Rate: {problemObject.successRate}%</p>
                         <LuDot className="text-2xl" />
                         <p>Time Limit: {problemObject.timeLimit}</p>
                    </div>
               </div>
               <div className="collapse-content text-sm grid pt-5 md:grid-cols-2 grid-cols-1 gap-5 bg-slate-950">
                    {problemObject?.problems.map((problem) => (
                         <Link
                              to={"/problem"}
                              key={problem.Name}
                              onClick={() => setProblem(problem)}
                              className="border border-slate-800 rounded-xl hover:bg-slate-800 duration-300 p-5"
                         >
                              <h1 className="text-lg font-bold">
                                   {problem.Name}
                              </h1>
                              <p className="text-slate-400">
                                   {problem.description}
                              </p>
                         </Link>
                    ))}
               </div>
          </div>
     );
};

export default Collapse;
