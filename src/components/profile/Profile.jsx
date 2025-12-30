import { useContext, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import {
     CiCalendar,
     CiHashtag,
     CiLocationOn,
     CiLock,
     CiUser,
} from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { ImStatsDots } from "react-icons/im";
import { LuTextCursorInput } from "react-icons/lu";
import { PiPhoneLight } from "react-icons/pi";
import { TfiBook } from "react-icons/tfi";
import { Link, useNavigate } from "react-router";
import { IoCheckmarkOutline } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import { loginContext } from "../../context/loginContext";

const Profile = () => {
     const user = JSON.parse(localStorage.getItem("cpc-user"));
     const { signOut } = useContext(loginContext);
     const navigate = useNavigate();
     const [show, setShow] = useState(false);
     const [save, setSave] = useState(false);

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
                    <section className="grid grid-cols-12 gap-5 mt-10">
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
                                   Roll: {user.studentID}
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
                                        <span>127</span>
                                   </div>
                                   <div className="flex justify-between">
                                        <span>Contest Rank</span>
                                        <span>#12</span>
                                   </div>
                                   <div className="flex justify-between">
                                        <span>Total Points</span>
                                        <span>2450</span>
                                   </div>
                                   <div className="flex justify-between">
                                        <span>Streak</span>
                                        <span>45 days</span>
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
                         <div className="lg:col-span-8 col-span-12 border lg:row-start-1 lg:row-end-9 rounded-2xl border-white/10 p-5 bg-white/8 ">
                              <div className="flex justify-between">
                                   <h1 className="lg:text-2xl text-xl font-normal text-wrap">
                                        Personal Information
                                   </h1>
                                   {save ? (
                                        <button
                                             onClick={() => {
                                                  setSave(false);
                                             }}
                                             className="flex items-center gap-1 bg-[#9810FA] px-3 rounded-lg cursor-pointer py-1"
                                        >
                                             <IoCheckmarkOutline className="text-xl" />
                                             <span>Save</span>
                                        </button>
                                   ) : (
                                        <button
                                             onClick={() => setSave(true)}
                                             className="flex items-center gap-2 bg-[#9810FA] px-3 rounded-lg cursor-pointer py-1"
                                        >
                                             <BsPencilSquare />
                                             <span>Edit</span>
                                        </button>
                                   )}
                              </div>
                              <hr className="my-2 border-white/20" />
                              <form action="" className="grid grid-cols-4">
                                   <div className="col-span-4 lg:flex lg:flex-row flex flex-col lg:gap-5 gap-2 lg:mt-4">
                                        <label
                                             htmlFor="fullname"
                                             className="lg:w-6/12 w-12/12"
                                        >
                                             <div className="flex items-center gap-1 my-1">
                                                  <CiUser />
                                                  <span>Full Name</span>
                                             </div>
                                             <input
                                                  type="text"
                                                  id="fullname"
                                                  name="name"
                                                  className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                                  value={user?.name}
                                             />
                                        </label>
                                        <label
                                             htmlFor="username"
                                             className="w-12/12 lg:w-6/12"
                                        >
                                             <div className="flex items-center gap-1 my-1">
                                                  <LuTextCursorInput />
                                                  <span>Username</span>
                                             </div>
                                             <input
                                                  type="text"
                                                  value={user?.username}
                                                  name="username"
                                                  id="username"
                                                  className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                             />
                                        </label>
                                   </div>
                                   <div className="col-span-4 lg:flex lg:flex-row flex flex-col lg:gap-5 gap-2 lg:mt-4">
                                        <label
                                             htmlFor="roll"
                                             className="w-12/12 lg:w-6/12 mt-2 lg:mt-0"
                                        >
                                             <div className="flex items-center gap-1 my-1">
                                                  <CiHashtag />
                                                  <span>Roll</span>
                                             </div>
                                             <input
                                                  type="number"
                                                  value={user?.studentID}
                                                  name="studentID"
                                                  id="roll"
                                                  className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                             />
                                        </label>
                                        <label
                                             htmlFor="registation"
                                             className="lg:w-6/12 w-12/12"
                                        >
                                             <div className="flex items-center gap-1 my-1">
                                                  <FaRegAddressCard />
                                                  <span>Registation</span>
                                             </div>
                                             <input
                                                  type="number"
                                                  id="registation"
                                                  name="registration"
                                                  value={user?.registration}
                                                  className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                             />
                                        </label>
                                   </div>
                                   <div className="col-span-4 lg:flex lg:flex-row flex flex-col lg:gap-5 gap-2 lg:mt-4">
                                        <label
                                             htmlFor="phoneNumber"
                                             className="lg:w-6/12 w-12/12 mt-2 lg:mt-0"
                                        >
                                             <div className="flex items-center gap-1 my-1">
                                                  <PiPhoneLight />
                                                  <span>Phone</span>
                                             </div>
                                             <input
                                                  type="number"
                                                  value={user?.phone}
                                                  name="phone"
                                                  id="phoneNumber"
                                                  className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                             />
                                        </label>
                                        <label
                                             htmlFor="email"
                                             className="lg:w-6/12 w-12/12"
                                        >
                                             <div className="flex items-center gap-1 my-1">
                                                  <HiOutlineMail />
                                                  <span>Email Address</span>
                                             </div>
                                             <input
                                                  type="email"
                                                  id="email"
                                                  name="email"
                                                  value={user?.email}
                                                  className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                             />
                                        </label>
                                   </div>
                                   <div className="col-span-4 lg:flex lg:flex-row flex flex-col lg:gap-5 gap-2 lg:mt-4">
                                        <label
                                             htmlFor="session"
                                             className="lg:w-6/12 w-12/12 mt-2 lg:mt-0"
                                        >
                                             <div className="flex items-center gap-1 my-1">
                                                  <CiCalendar />
                                                  <span>Session</span>
                                             </div>
                                             <input
                                                  type="text"
                                                  value={user?.session}
                                                  name="session"
                                                  id="session"
                                                  className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                             />
                                        </label>
                                        <label
                                             htmlFor="semester"
                                             className="lg:w-6/12 w-12/12"
                                        >
                                             <div className="flex items-center gap-1 my-1">
                                                  <TfiBook className="text-sm" />
                                                  <span>Semester</span>
                                             </div>
                                             <input
                                                  type="text"
                                                  value={user?.semester}
                                                  name="semester"
                                                  id="semester"
                                                  className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                             />
                                        </label>
                                   </div>
                                   <div className="col-span-4 lg:flex lg:flex-row flex flex-col lg:gap-5 gap-2 lg:mt-4">
                                        <label
                                             htmlFor="department"
                                             className="lg:w-6/12 w-12/12 mt-2 lg:mt-0"
                                        >
                                             <div className="flex items-center gap-1 my-1">
                                                  <TfiBook className="text-sm" />
                                                  <span>Department</span>
                                             </div>
                                             <input
                                                  type="text"
                                                  value={user?.department}
                                                  name="department"
                                                  id="department"
                                                  className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                             />
                                        </label>
                                        <label
                                             htmlFor="address"
                                             className="lg:w-6/12 w-12/12"
                                        >
                                             <div className="flex items-center gap-1 my-1">
                                                  <CiLocationOn />
                                                  <span>Address</span>
                                             </div>
                                             <input
                                                  type="text"
                                                  id="address"
                                                  name="address"
                                                  value={user?.address}
                                                  className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                             />
                                        </label>
                                   </div>
                                   <div className="col-span-4 lg:flex lg:flex-row flex flex-col lg:gap-5 gap-2 lg:mt-4">
                                        <label
                                             htmlFor="dateOfBirth"
                                             className="lg:w-6/12 w-12/12 mt-2 lg:mt-0"
                                        >
                                             <div className="flex items-center gap-1 my-1">
                                                  <CiCalendar />
                                                  <span>Date of Birth</span>
                                             </div>
                                             <input
                                                  type="date"
                                                  value={user?.date}
                                                  name="date"
                                                  id="dateOfBirth"
                                                  className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                             />
                                        </label>
                                        <label
                                             htmlFor="bloodGroup"
                                             className="lg:w-6/12 w-12/12"
                                        >
                                             <div className="flex items-center gap-1 my-1">
                                                  <CiCalendar />
                                                  <span>Blood Group</span>
                                             </div>
                                             <input
                                                  type="text"
                                                  value={user?.bloodGroup}
                                                  name="bloodGroup"
                                                  id="bloodGroup"
                                                  className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                             />
                                        </label>
                                   </div>
                                   <label
                                        htmlFor="password"
                                        className="col-span-4 relative mt-2 lg:mt-4"
                                   >
                                        <div className="flex items-center gap-1 my-1">
                                             <CiLock />
                                             <span>Password</span>
                                        </div>
                                        <input
                                             type={show ? "text" : "password"}
                                             id="password"
                                             value={user?.password}
                                             name="password"
                                             className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                        />
                                        <div className="absolute right-3 top-10">
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
                                        </div>
                                   </label>
                              </form>
                         </div>
                    </section>
               </section>

               <div className="pointer-events-none absolute md:left-0 lg:-left-30 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               <div className="pointer-events-none absolute md:right-0 lg:-right-20 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
          </div>
     );
};

export default Profile;
