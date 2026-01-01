import { useContext, useEffect, useState } from "react";
import { loginContext } from "../../context/loginContext";

import {
     CiAt,
     CiCalendar,
     CiHashtag,
     CiLocationOn,
     CiLock,
     CiUser,
} from "react-icons/ci";
import { BsPencilSquare } from "react-icons/bs";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { PiPhoneLight } from "react-icons/pi";
import { TfiBook } from "react-icons/tfi";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../database/firebase";
import { Bounce, toast, ToastContainer } from "react-toastify";
const FormData = ({ user }) => {
     const { setShow, show, save, setSave } = useContext(loginContext);
     const [formData, setFormData] = useState({
          name: "",
          username: "",
          studentID: "",
          registration: "",
          phone: "",
          email: "",
          session: "",
          semester: "",
          department: "",
          address: "",
          date: "",
          bloodGroup: "",
          password: "",
     });
     useEffect(() => {
          if (user) {
               setFormData(user);
          }
     }, [user]);

     const allChangeHandler = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
               ...prev,
               [name]: value,
          }));
     };

     const updateHandler = async () => {
          try {
               const ref = doc(database, "users", user.id);
               await updateDoc(ref, {
                    ...formData,
               });
               toast.success(`profile is updated!`);
          } catch (error) {
               console.log(error);
          }
     };

     return (
          <>
               <div className="lg:col-span-8 col-span-12 border lg:row-start-1 lg:row-end-9 rounded-2xl border-white/10 p-5 bg-white/8 ">
                    <ToastContainer
                         position="bottom-right"
                         autoClose={2000}
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
                    <div className="flex justify-between">
                         <h1 className="lg:text-2xl text-xl font-normal text-wrap">
                              Personal Information
                         </h1>
                         {save ? (
                              <button
                                   onClick={() => {
                                        setSave(false);
                                        updateHandler();
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
                         <div className="col-span-4 lg:flex lg:flex-row flex flex-col lg:gap-5 gap-2">
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
                                        className="border outline-none w-full bg-white/4 border-white/10 rounded-lg px-3 py-2 "
                                        name="name"
                                        disabled={!save}
                                        value={formData?.name}
                                        onChange={allChangeHandler}
                                   />
                              </label>
                              <label
                                   htmlFor="username"
                                   className="w-12/12 lg:w-6/12"
                              >
                                   <div className="flex items-center gap-1 my-1">
                                        <CiAt />
                                        <span>Username</span>
                                   </div>
                                   <input
                                        type="text"
                                        disabled={!save}
                                        value={formData?.username}
                                        onChange={allChangeHandler}
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
                                        value={formData?.studentID}
                                        onChange={allChangeHandler}
                                        disabled={!save}
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
                                        value={formData?.registration}
                                        disabled={!save}
                                        onChange={allChangeHandler}
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
                                        value={formData?.phone}
                                        onChange={allChangeHandler}
                                        disabled={!save}
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
                                        value={formData?.email}
                                        disabled={!save}
                                        onChange={allChangeHandler}
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
                                        value={formData?.session}
                                        disabled={!save}
                                        onChange={allChangeHandler}
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
                                        <span>
                                             {formData?.semester === ""
                                                  ? "Passed Year"
                                                  : "Semester"}
                                        </span>
                                   </div>
                                   <input
                                        type="text"
                                        value={
                                             formData?.semester === ""
                                                  ? formData?.passedYear
                                                  : formData?.semester
                                        }
                                        onChange={allChangeHandler}
                                        disabled={!save}
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
                                        value={formData?.department}
                                        disabled={!save}
                                        onChange={allChangeHandler}
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
                                        disabled={!save}
                                        onChange={allChangeHandler}
                                        value={formData?.address}
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
                                        value={formData?.date}
                                        disabled={!save}
                                        onChange={allChangeHandler}
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
                                        value={formData?.bloodGroup}
                                        disabled={!save}
                                        onChange={allChangeHandler}
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
                                   value={formData?.password}
                                   onChange={allChangeHandler}
                                   disabled={!save}
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
          </>
     );
};

export default FormData;
