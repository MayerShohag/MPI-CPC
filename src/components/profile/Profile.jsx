import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { GoSignOut } from "react-icons/go";
import { loginContext } from "../../context/loginContext";
import { database } from "../database/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ImStatsDots } from "react-icons/im";
import FormData from "./FormData";

const Profile = () => {
     const localStorageUser = JSON.parse(localStorage.getItem("cpc-user"));
     const { signOut } = useContext(loginContext);
     const navigate = useNavigate();
     const [dbUser, setDBUser] = useState([]);

     const getData = async () => {
          const ref = await getDocs(collection(database, "users"));
          const data = ref.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          const user = data.filter((user) => {
               if (localStorageUser.id === user.id) {
                    return user;
               }
          });
          setDBUser(user);
     };
     useEffect(() => {
          async function getUser() {
               await getData();
          }
          getUser();
     }, []);

     return (
          <div className="relative min-h-screen max-w-7xl mb-20 mx-auto text-gray-300 px-4">
               <section className="relative z-10">
                    <div className="text-center pt-10 md:pt-15 lg:pt-20">
                         <h1 className="lg:text-8xl md:text-6xl akshar-font text-5xl pb-2 font-normal">
                              My Profile
                         </h1>
                         <p className="lg:text-2xl mx-auto text-md px-15 md:px-20 lg:px-50">
                              Manage your account information
                         </p>
                    </div>
                    <section>
                         {dbUser?.map((user) => (
                              <div
                                   key={user.id}
                                   className="grid grid-cols-12 gap-5 mt-10"
                              >
                                   <div className="border col-span-12 lg:col-span-4 md:col-span-6 lg:row-start-1 lg:row-end-4 h-fit flex flex-col rounded-2xl border-white/10 p-5 bg-white/8 items-center ">
                                        <img
                                             className="w-30 rounded-full"
                                             src="online-student.gif"
                                             alt=""
                                        />
                                        <h1 className="mt-3 text-2xl font-bold">
                                             {user.name}
                                        </h1>
                                        <p className="mt-1 text-lg">
                                             {user.studentID === ""
                                                  ? "Passed Year: "
                                                  : "Roll: "}
                                             {user.studentID !== ""
                                                  ? user.studentID
                                                  : user.passedYear}
                                        </p>
                                        <Link
                                             to={`/${user.username}`}
                                             className="mt-1 hover:underline"
                                        >
                                             @{user.username}
                                        </Link>
                                   </div>
                                   <div className="border col-span-12 lg:col-span-4 md:col-span-6 lg:row-span-4 rounded-2xl border-white/10 p-5 bg-white/8 ">
                                        <div className="flex items-center gap-2">
                                             <ImStatsDots />
                                             <span>Quick Stats</span>
                                        </div>
                                        <hr className="border-white/20 my-2" />
                                        <div className="flex flex-col gap-2 mt-2 text-slate-400">
                                             <div className="flex justify-between">
                                                  <span>Problems Solved</span>
                                                  <span>
                                                       {user?.problemSolved}
                                                  </span>
                                             </div>
                                             <div className="flex justify-between">
                                                  <span>Contest Rank</span>
                                                  <span>{user?.ranking}</span>
                                             </div>
                                             <div className="flex justify-between">
                                                  <span>Total Points</span>
                                                  <span>
                                                       {user?.totalPoint}
                                                  </span>
                                             </div>
                                             <div className="flex justify-between">
                                                  <span>Streak</span>
                                                  <span>{user?.streak}</span>
                                             </div>
                                        </div>
                                        <hr className="border-white/20 my-2" />

                                        <button
                                             onClick={() => {
                                                  signOut();
                                                  navigate("/");
                                             }}
                                             className="flex items-center gap-2 bg-white/5 w-full p-2 rounded-lg justify-center border border-white/8 cursor-pointer hover:bg-white/10 text-red-400 duration-300"
                                        >
                                             <GoSignOut />
                                             <span>Sign Out</span>
                                        </button>
                                   </div>

                                   <FormData user={user} getData={getData} />
                              </div>
                         ))}
                    </section>
               </section>

               <div className="pointer-events-none absolute md:left-0 lg:-left-30 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               <div className="pointer-events-none absolute md:right-0 lg:-right-20 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
          </div>
     );
};

export default Profile;
