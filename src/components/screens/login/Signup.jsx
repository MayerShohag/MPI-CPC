import { useState } from "react";
import { Link } from "react-router";

export default function MultiStepSignup() {
     const [step, setStep] = useState(1);
     const [role, setRole] = useState("student");

     return (
          <div className="min-h-screen flex items-center justify-center relative max-w-7xl mb-20 mx-auto text-gray-300 px-4">
               <div className="pointer-events-none absolute md:left-0 lg:-left-30 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               <div className="pointer-events-none absolute md:right-0 lg:-right-20 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
                    <div>
                         <h2 className="text-3xl font-bold text-center akshar-font">
                              Create Account
                         </h2>
                         <p className="text-gray-400 text-center mt-2">
                              Step {step} of 3
                         </p>
                    </div>

                    {step === 1 && (
                         <div className="mt-8 space-y-5">
                              <input
                                   type="text"
                                   required
                                   placeholder="Full Name"
                                   className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                              />

                              <input
                                   type="email"
                                   required
                                   placeholder="Email Address"
                                   className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                              />

                              <button
                                   onClick={() => setStep(2)}
                                   className="w-full cursor-pointer py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold"
                              >
                                   Next
                              </button>
                         </div>
                    )}

                    {step === 2 && (
                         <div className="mt-8 space-y-5">
                              <select
                                   value={role}
                                   required
                                   onChange={(e) => setRole(e.target.value)}
                                   className="w-full px-4 py-3 rounded-xl bg-white/10 text-white outline-none focus:ring-2 focus:ring-purple-500"
                              >
                                   <option
                                        value="student"
                                        className="bg-[#050816]"
                                   >
                                        Current Student
                                   </option>
                                   <option
                                        value="alumni"
                                        className="bg-[#050816]"
                                   >
                                        Alumni
                                   </option>
                              </select>

                              {role === "student" && (
                                   <input
                                        type="text"
                                        required
                                        placeholder="Student ID / Roll"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                                   />
                              )}

                              {role === "alumni" && (
                                   <input
                                        type="number"
                                        required
                                        placeholder="Passed Year"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                                   />
                              )}

                              <div className="flex gap-3">
                                   <button
                                        onClick={() => setStep(1)}
                                        className="w-1/2 cursor-pointer py-3 rounded-xl bg-white/10 text-white"
                                   >
                                        Back
                                   </button>
                                   <button
                                        onClick={() => setStep(3)}
                                        className="w-1/2 cursor-pointer py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold"
                                   >
                                        Next
                                   </button>
                              </div>
                         </div>
                    )}

                    {step === 3 && (
                         <div className="mt-8 space-y-5">
                              <input
                                   type="password"
                                   required
                                   placeholder="Password"
                                   className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                              />

                              <input
                                   type="password"
                                   required
                                   placeholder="Confirm Password"
                                   className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                              />

                              <div className="flex gap-3">
                                   <button
                                        onClick={() => setStep(2)}
                                        className="w-1/2 cursor-pointer py-3 rounded-xl bg-white/10 text-white"
                                   >
                                        Back
                                   </button>
                                   <button className="w-1/2 cursor-pointer py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold">
                                        Create Account
                                   </button>
                              </div>
                         </div>
                    )}

                    <p className="text-gray-400 text-center mt-6">
                         Already have an account?{" "}
                         <Link
                              to={"/login"}
                              className="text-purple-400 cursor-pointer hover:underline"
                         >
                              Login
                         </Link>
                    </p>
               </div>
          </div>
     );
}
