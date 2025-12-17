import { LiaLaptopCodeSolid } from "react-icons/lia";
import Collapse from "./Collapse";

const Practice = () => {
     return (
          <div className="relative text-gray-300 h-screen">
               <div class="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
               <section className="max-w-7xl mx-auto pt-10">
                    <h1 className="text-4xl font-bold">
                         Practice to grow your skills
                    </h1>
                    <p className="mt-5">59 Practice Challenges</p>
                    <div className="mt-5 bg-slate-950 p-5 rounded-xl">
                         <div className="mb-3">
                              <div className="flex items-center gap-2">
                                   <span>
                                        <LiaLaptopCodeSolid className="text-4xl text-white" />
                                   </span>
                                   <h1 className="text-2xl font-bold">
                                        Practice Challenges
                                   </h1>
                              </div>
                              <hr className="border border-slate-700 mt-3" />
                         </div>
                         <Collapse />
                         <Collapse />
                    </div>
               </section>
               <div className="h-100 absolute left-0 top-0 border w-50 bg-cyan-600 blur-[150px] -rotate-45 brightness-75"></div>
               <div className="h-100 absolute right-0 top-70 border w-50 bg-pink-600 blur-[150px]  brightness-75"></div>
          </div>
     );
};

export default Practice;
