import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { database } from "../../database/firebase";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginContext } from "../../../context/loginContext";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function Login() {
     const [users, setUsers] = useState([]);
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [message, setMessage] = useState("");
     const [show, setShow] = useState(false);
     const { setIsLogin } = useContext(loginContext);

     const checkLogin = (e) => {
          e.preventDefault();
          users.filter((user) => {
               if (email === user.email && password === user.password) {
                    setMessage("Congratulations!");
                    setIsLogin(true);
                    toast.success(
                         `Congratulations! ${user.name}. You got ৳100 Taka`
                    );
                    localStorage.setItem("isLogin", "true");
                    localStorage.setItem("cpc-user", JSON.stringify(user));
                    return user;
               } else {
                    setMessage("incorrect Password!");
               }
          });
     };

     useEffect(() => {
          const getData = async () => {
               const res = await getDocs(collection(database, "users"));
               const data = res.docs.map((data) => ({
                    ...data.data(),
                    id: data.id,
               }));
               setUsers(data);
          };
          getData();
     }, []);

     return (
          <div className="min-h-screen flex items-center justify-center relative max-w-7xl mb-20 mx-auto text-gray-300 px-4">
               <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
               />
               <div className="pointer-events-none absolute md:left-0 lg:-left-30 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               <div className="pointer-events-none absolute md:right-0 lg:-right-20 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
                    <h2 className="text-3xl font-bold text-center akshar-font">
                         Welcome Back
                    </h2>
                    <p className="text-gray-400 text-center mt-2">
                         Login to your account
                    </p>

                    <form className="mt-8 space-y-5" onSubmit={checkLogin}>
                         <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Email Address"
                              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                         />

                         <input
                              type={show ? "text" : "password"}
                              required
                              value={password}
                              minLength={8}
                              maxLength={30}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Password"
                              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                         />

                         <label
                              htmlFor="show"
                              className="flex items-center gap-1"
                         >
                              {show ? (
                                   <button
                                        id="show"
                                        className="p-1 rounded-full hover:bg-white/10 duration-200"
                                        onClick={(e) => {
                                             e.preventDefault();
                                             setShow(!show);
                                        }}
                                   >
                                        <FiEye />
                                   </button>
                              ) : (
                                   <button
                                        id="show"
                                        className="p-1 rounded-full hover:bg-white/5 duration-300"
                                        onClick={(e) => {
                                             e.preventDefault();
                                             setShow(!show);
                                        }}
                                   >
                                        <FiEyeOff />
                                   </button>
                              )}
                              <span>Show Password</span>
                         </label>
                         <div>{message && message}</div>

                         <button
                              type="submit"
                              className="w-full py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white cursor-pointer font-semibold hover:opacity-90 transition"
                         >
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
