import { Link } from "react-router";

export default function Login() {
     return (
          <div className="min-h-screen flex items-center justify-center relative max-w-7xl mb-20 mx-auto text-gray-300 px-4">
               <div className="pointer-events-none absolute md:left-0 lg:-left-30 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               <div className="pointer-events-none absolute md:right-0 lg:-right-20 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
                    <h2 className="text-3xl font-bold text-center akshar-font">
                         Welcome Back
                    </h2>
                    <p className="text-gray-400 text-center mt-2">
                         Login to your account
                    </p>

                    <form className="mt-8 space-y-5">
                         <input
                              type="email"
                              required
                              placeholder="Email Address"
                              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                         />

                         <input
                              type="password"
                              required
                              placeholder="Password"
                              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                         />

                         <button className="w-full py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white cursor-pointer font-semibold hover:opacity-90 transition">
                              Login
                         </button>
                    </form>

                    <p className="text-gray-400 text-center mt-6">
                         Don't have an account?{" "}
                         <Link
                              to={"/signup"}
                              className="text-purple-400 cursor-pointer hover:underline"
                         >
                              Sign Up
                         </Link>
                    </p>
               </div>
          </div>
     );
}
