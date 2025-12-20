import { useContext } from "react";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router";
import { problemContext } from "../../../context/context";
import { GoArrowRight } from "react-icons/go";

const Collapse = ({ problemCategory }) => {
     const { setProblem } = useContext(problemContext);
     return (
          <div className="collapse collapse-plus bg-slate-800">
               <input type="checkbox" />
               <div className="collapse-title font-semibold">
                    <h1>{problemCategory.categoryName}</h1>
               </div>
               <div className="collapse-content text-sm grid pt-5 md:grid-cols-2 grid-cols-1 gap-5 bg-slate-950">
                    {problemCategory?.problems.map((problem) => (
                         <Link
                              to={"/problem"}
                              onClick={() => setProblem(problem)}
                              className="border border-slate-800 rounded-xl hover:bg-slate-800 duration-300 p-5"
                         >
                              <h1 className="text-lg font-bold">
                                   {problem.problemName}
                              </h1>
                              <div className="flex items-center">
                                   <p className="font-bold">
                                        {problem.problemRange}
                                   </p>
                                   <LuDot className="text-lg" />
                                   <p>Success Rate: {problem.successRate}%</p>
                              </div>
                         </Link>
                    ))}
                    <Link className="border flex items-center border-slate-800 rounded-xl hover:bg-slate-800 duration-300 p-5">
                         <div className="text-lg font-bold flex items-center gap-2">
                              <span>Browse All Challenges</span>
                              <GoArrowRight />
                         </div>
                    </Link>
               </div>
          </div>
     );
};

export default Collapse;
