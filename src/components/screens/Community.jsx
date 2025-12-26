import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { GoBook, GoTrophy } from "react-icons/go";
import { HiCalendarDateRange } from "react-icons/hi2";
import { IoCodeSlashOutline } from "react-icons/io5";
import { LuUsersRound } from "react-icons/lu";
import { RiMedalLine } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";
import { TbBulb } from "react-icons/tb";
import { Link } from "react-router";
const benefits = [
     {
          id: 1,
          icon: (
               <IoCodeSlashOutline className="text-5xl rounded-xl bg-linear-[-45deg] from-[#2B7FFF] to-[#00B8DB] p-2" />
          ),
          title: "Skill Development",
          description:
               "Enhance your problem-solving and algorithmic thinking skills through regular practice.",
     },
     {
          id: 2,
          icon: (
               <GoTrophy className="text-5xl rounded-xl bg-linear-[-45deg] from-[#F6339A] to-[#AD46FF] p-2" />
          ),
          title: "Competitive Environment",
          description:
               "Participate in contests and compete with peers to push your limits.",
     },
     {
          id: 3,
          icon: (
               <LuUsersRound className="text-5xl rounded-xl bg-linear-[-45deg] from-[#00C950] to-[#00BC7D] p-2" />
          ),
          title: "Community Support",
          description:
               "Learn from experienced members and help others grow in their coding journey.",
     },
     {
          id: 4,
          icon: (
               <RiMedalLine className="text-5xl rounded-xl bg-linear-[-45deg] from-[#FB2C36] to-[#FF6900] p-2" />
          ),
          title: "Career Opportunities",
          description:
               "Prepare for coding interviews and competitive programming competitions.",
     },
     {
          id: 5,
          icon: (
               <TbBulb className="text-5xl rounded-xl bg-linear-[-45deg] from-[#FF6900] to-[#F0B100] p-2" />
          ),
          title: "Learning Resources",
          description:
               "Access curated learning materials, tutorials, and problem sets.",
     },
     {
          id: 6,
          icon: (
               <SlBadge className="text-5xl rounded-xl bg-linear-[-45deg] from-[#FF2056] to-[#F6339A] p-2" />
          ),
          title: "Recognition",
          description:
               "Earn badges, certificates, and recognition for your achievements.",
     },
];

const allStudents = [
     {
          id: 1,
          image: <CiUser className="text-7xl p-2" />,
          name: "Rakib Hasan",
          semester: "CST 3rd Semester",
     },
     {
          id: 2,
          image: <CiUser className="text-7xl p-2" />,
          name: "Sadia Akter",
          semester: "CST 5th Semester",
     },
     {
          id: 3,
          image: <CiUser className="text-7xl p-2" />,
          name: "Mehedi Hasan",
          semester: "CST 7th Semester",
     },
     {
          id: 4,
          image: <CiUser className="text-7xl p-2" />,
          name: "Nusrat Jahan",
          semester: "CST 4th Semester",
     },
     {
          id: 5,
          image: <CiUser className="text-7xl p-2" />,
          name: "Tanvir Ahmed",
          semester: "CST 6th Semester",
     },
     {
          id: 6,
          image: <CiUser className="text-7xl p-2" />,
          name: "Imran Kabir",
          semester: "CST 2nd Semester",
     },
     {
          id: 7,
          image: <CiUser className="text-7xl p-2" />,
          name: "Ayesha Siddika",
          semester: "CST 1st Semester",
     },
     {
          id: 8,
          image: <CiUser className="text-7xl p-2" />,
          name: "Shahriar Rahman",
          semester: "CST 8th Semester",
     },

     {
          id: 9,
          image: <CiUser className="text-7xl p-2" />,
          name: "Farzana Rahman",
          passYear: 2017,
     },
     {
          id: 10,
          image: <CiUser className="text-7xl p-2" />,
          name: "Shakil Hossain",
          passYear: 2018,
     },
     {
          id: 11,
          image: <CiUser className="text-7xl p-2" />,
          name: "Mithila Chowdhury",
          passYear: 2019,
     },
     {
          id: 12,
          image: <CiUser className="text-7xl p-2" />,
          name: "Rafiul Islam",
          passYear: 2020,
     },
     {
          id: 13,
          image: <CiUser className="text-7xl p-2" />,
          name: "Naim Ahmed",
          passYear: 2021,
     },
     {
          id: 14,
          image: <CiUser className="text-7xl p-2" />,
          name: "Tahmina Akter",
          passYear: 2022,
     },
     {
          id: 15,
          image: <CiUser className="text-7xl p-2" />,
          name: "Saifur Rahman",
          passYear: 2023,
     },
     {
          id: 16,
          image: <CiUser className="text-7xl p-2" />,
          name: "Jannatul Ferdous",
          passYear: 2016,
     },

     {
          id: 17,
          image: <CiUser className="text-7xl p-2" />,
          name: "Hasan Mahmud",
          semester: "CST 5th Semester",
     },
     {
          id: 18,
          image: <CiUser className="text-7xl p-2" />,
          name: "Faria Islam",
          semester: "CST 6th Semester",
     },
     {
          id: 19,
          image: <CiUser className="text-7xl p-2" />,
          name: "Zubair Hossain",
          semester: "CST 7th Semester",
     },
     {
          id: 20,
          image: <CiUser className="text-7xl p-2" />,
          name: "Anika Tasnim",
          passYear: 2024,
     },
];

const Community = () => {
     const [view, setView] = useState(8);
     const [showLess, setShowLess] = useState(true);
     const [isActive, setIsActive] = useState(0);
     const [students, setStudents] = useState(allStudents);
     const studentToggle = ["All", "Current Students", "Alumni"];

     const filteredStudents = (idx) => {
          setIsActive(idx);
          const currentStudents = allStudents.filter((student) => {
               for (let properties in student) {
                    if (properties === "semester") {
                         return student;
                    }
               }
          });
          const alumniStudents = allStudents.filter((student) => {
               for (let properties in student) {
                    if (properties === "passYear") {
                         return student;
                    }
               }
          });
          if (idx === 0) setStudents(allStudents);
          if (idx === 1) setStudents(currentStudents);
          if (idx === 2) setStudents(alumniStudents);
     };

     return (
          <div>
               <div className="relative min-h-screen max-w-7xl mb-20 mx-auto text-gray-300 px-4">
                    <div className="text-center pt-10 md:pt-15 lg:pt-20">
                         <h1 className="lg:text-8xl md:text-6xl akshar-font text-5xl pb-5 font-normal">
                              Join Our Community
                         </h1>
                         <p className="lg:text-2xl mx-auto text-md px-15 md:px-20 lg:px-50">
                              Be part of a thriving community of competitive
                              programmers
                         </p>
                    </div>

                    <div className="bg-[#90A1B9]/10 relative mt-10 grid gap-5 items-center grid-cols-1 md:grid-cols-2 z-10 md:p-10 p-5 rounded-2xl border border-white/10">
                         <div>
                              <h1 className="md:text-4xl text-2xl">
                                   About MaPI Competitive Programming Club
                              </h1>
                              <p className="mt-5 text-slate-300/80 text-sm md:text-[16px] lg:pr-20">
                                   The MaPI Competitive Programming Club is a
                                   student-led organization dedicated to
                                   fostering a culture of competitive
                                   programming at Magura Polytechnic Institute.
                                   We provide a platform for students to learn,
                                   practice, and compete in algorithmic
                                   problem-solving.
                              </p>
                              <p className="mt-5 text-slate-300/80 lg:pr-20">
                                   Whether you're a beginner taking your first
                                   steps in programming or an experienced coder
                                   looking to sharpen your skills, our club
                                   offers resources, mentorship, and
                                   opportunities to help you succeed.
                              </p>
                         </div>
                         <div className="flex flex-col gap-4">
                              <div className="p-3 border flex items-center gap-3 bg-white/8 shadow-xl border-white/10 rounded-2xl">
                                   <span className="-bg-linear-[45deg] from-[#AD46FF] to-[#2B7FFF] p-2 rounded-xl">
                                        <LuUsersRound className="text-2xl" />
                                   </span>
                                   <div>
                                        <h1 className="text-white">
                                             250+ Active Members
                                        </h1>
                                        <p className="text-white/60">
                                             Growing community of passionate
                                             programmers
                                        </p>
                                   </div>
                              </div>
                              <div className="p-3 border flex items-center gap-3 bg-white/8 shadow-xl border-white/10 rounded-2xl">
                                   <span className="-bg-linear-[45deg] from-[#00C950] to-[#00BC7D] p-2 rounded-xl">
                                        <HiCalendarDateRange className="text-2xl" />
                                   </span>
                                   <div>
                                        <h1 className="text-white">
                                             Weekly Contests
                                        </h1>
                                        <p className="text-white/60">
                                             Regular programming contests and
                                             challenges
                                        </p>
                                   </div>
                              </div>
                              <div className="p-3 border flex items-center gap-3 bg-white/8 shadow-xl border-white/10 rounded-2xl">
                                   <span className="-bg-linear-[45deg] from-[#FF2056] to-[#F6339A] p-2 rounded-xl">
                                        <GoBook className="text-2xl" />
                                   </span>
                                   <div>
                                        <h1 className="text-white">
                                             Expert Mentorship
                                        </h1>
                                        <p className="text-white/60">
                                             Learn from experienced competitive
                                             programmers
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <section className="my-10 mt-20 relative z-10">
                         <h1 className="text-4xl text-center">
                              Benefits of Joining
                         </h1>
                         <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
                              {benefits.map((benefit) => (
                                   <div
                                        className="border bg-white/5 shadow-xl p-5 border-white/15 rounded-2xl"
                                        key={benefit.id}
                                   >
                                        <span className="">{benefit.icon}</span>
                                        <h2 className="text-xl text-white mt-4">
                                             {benefit.title}
                                        </h2>
                                        <p className="text-[16px] text-white/60 mt-2">
                                             {benefit.description}
                                        </p>
                                   </div>
                              ))}
                         </div>
                    </section>

                    <section className="my-10 mt-20 relative z-10 text-center border p-10 border-white/15 rounded-2xl bg-white/5">
                         <h1 className="text-4xl">Ready to Join?</h1>
                         <p className="mt-5 text-wrap">
                              Start your competitive programming journey with us
                              today and unlock your full potential.
                         </p>
                         <div className="mt-5">
                              <Link
                                   to={"/profile"}
                                   className="px-5 py-2 inline-block cursor-pointer bg-linear-to-r from-[#708FFF] to-[#771AFF] rounded-xl"
                              >
                                   Contact Us
                              </Link>
                         </div>
                    </section>

                    <section className="relative z-10">
                         <div className="mb-15 mt-20 text-center">
                              <h1 className="text-4xl mb-3">
                                   Students Gallery
                              </h1>
                              <p className="md:text-lg text-sm">
                                   Meet the talented members of our programming
                                   club
                              </p>
                              <div className="flex justify-center gap-1.5 mt-10 bg-[#90A1B9]/10 p-1.5 rounded-2xl border border-white/15 w-fit mx-auto">
                                   {studentToggle.map((student, idx) => (
                                        <button
                                             key={idx}
                                             onClick={() =>
                                                  filteredStudents(idx)
                                             }
                                             className={
                                                  isActive === idx
                                                       ? "bg-linear-[130deg] cursor-pointer from-[#2B7FFF] md:text-xl text-sm to-[#AD46FF] p-2 md:px-5 px-3 rounded-xl"
                                                       : "cursor-pointer duration-300 md:text-xl text-sm to-[#AD46FF] p-2 md:px-5 px-3 rounded-xl"
                                             }
                                        >
                                             {student}
                                        </button>
                                   ))}
                              </div>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                              {students.slice(0, view).map((student) => (
                                   <Link
                                        to={`/${student.name}`}
                                        key={student.id}
                                        className="border shadow-xl flex lg:hover:scale-103 hover:-translate-y-2 duration-300 flex-col items-center text-center p-10 border-white/15 rounded-2xl bg-white/5"
                                   >
                                        <h1 className="rounded-full -bg-linear-[45deg] from-[#FF2056] to-[#AD46FF] flex items-center ">
                                             {student.image}
                                        </h1>
                                        <h2 className="mt-3">{student.name}</h2>
                                        <h2 className="mt-3">
                                             {student.semester ||
                                                  "Passed Year : " +
                                                       student.passYear}
                                        </h2>
                                   </Link>
                              ))}
                         </div>
                         <div className="text-center my-10 mb-20">
                              {showLess ? (
                                   <button
                                        onClick={() => {
                                             setView(students.length);
                                             setShowLess(false);
                                        }}
                                        className="rounded-xl px-4 cursor-pointer lg:px-10 py-3 relative z-10 bg-linear-to-r from-[#708FFF] to-[#771AFF] text-white font-medium transition"
                                   >
                                        See More
                                   </button>
                              ) : (
                                   <button
                                        onClick={() => {
                                             setView(8);
                                             setShowLess(true);
                                        }}
                                        className="rounded-xl px-4 cursor-pointer lg:px-10 py-3 relative z-10 bg-linear-to-r from-[#708FFF] to-[#771AFF] text-white font-medium transition"
                                   >
                                        See Less
                                   </button>
                              )}
                         </div>
                    </section>

                    <div className="pointer-events-none absolute md:left-0 lg:-left-30 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
                    <div className="pointer-events-none absolute md:right-0 lg:-right-20 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               </div>
          </div>
     );
};

export default Community;
