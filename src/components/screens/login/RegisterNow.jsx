import { useState } from "react";

export default function ContestRegister() {
     const [step, setStep] = useState(1);
     const [agree, setAgree] = useState(false);

     return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050816] via-[#0b1023] to-[#050816]">
               <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
                    {/* STEP INDICATOR */}
                    <p className="text-gray-400 text-center">
                         Step {step} of 3
                    </p>

                    {/* STEP 1 */}
                    {step === 1 && (
                         <>
                              <div className="flex items-center justify-between mt-4">
                                   <span className="px-4 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm">
                                        Upcoming
                                   </span>
                                   <span className="text-white text-xl">
                                        🏆
                                   </span>
                              </div>

                              <h2 className="text-2xl font-bold text-white mt-4">
                                   MPI Weekly Coding Contest #12
                              </h2>

                              <div className="mt-4 space-y-2 text-gray-300 text-sm">
                                   <p>📅 March 22, 2026</p>
                                   <p>⏰ 7:00 PM – 9:00 PM</p>
                                   <p>👥 128 participants</p>
                              </div>

                              <button
                                   onClick={() => setStep(2)}
                                   className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
                              >
                                   Next
                              </button>
                         </>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                         <>
                              <h2 className="text-2xl font-bold text-white mt-4">
                                   Contest Rules
                              </h2>

                              <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                                   <li>✔ Individual participation only</li>
                                   <li>✔ No plagiarism allowed</li>
                                   <li>✔ Time based scoring system</li>
                              </ul>

                              <label className="flex items-center gap-2 mt-5 text-gray-300 text-sm">
                                   <input
                                        type="checkbox"
                                        checked={agree}
                                        onChange={() => setAgree(!agree)}
                                        className="accent-purple-500"
                                   />
                                   I agree to all contest rules
                              </label>

                              <div className="flex gap-3 mt-6">
                                   <button
                                        onClick={() => setStep(1)}
                                        className="w-1/2 py-3 rounded-xl bg-white/10 text-white"
                                   >
                                        Back
                                   </button>
                                   <button
                                        disabled={!agree}
                                        onClick={() => setStep(3)}
                                        className={`w-1/2 py-3 rounded-xl text-white font-semibold ${
                                             agree
                                                  ? "bg-gradient-to-r from-blue-500 to-purple-600"
                                                  : "bg-white/10 cursor-not-allowed"
                                        }`}
                                   >
                                        Confirm
                                   </button>
                              </div>
                         </>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                         <>
                              <h2 className="text-2xl font-bold text-white text-center mt-6">
                                   🎉 Registration Complete
                              </h2>

                              <p className="text-gray-400 text-center mt-3">
                                   You are successfully registered for
                              </p>

                              <p className="text-purple-400 text-center mt-1 font-semibold">
                                   MPI Weekly Coding Contest #12
                              </p>

                              <button className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
                                   Go to Contest Dashboard
                              </button>
                         </>
                    )}
               </div>
          </div>
     );
}
