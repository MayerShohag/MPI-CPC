import React from "react";
import { ChartBar, Users, ShoppingCart } from "lucide-react";

const Dashboard = () => {
     const stats = [
          {
               id: 1,
               title: "Users",
               value: "1,245",
               icon: <Users className="w-6 h-6 text-white" />,
          },
          {
               id: 2,
               title: "Orders",
               value: "532",
               icon: <ShoppingCart className="w-6 h-6 text-white" />,
          },
          {
               id: 3,
               title: "Revenue",
               value: "$12.3K",
               icon: <ChartBar className="w-6 h-6 text-white" />,
          },
     ];

     return (
          <div className="flex h-screen bg-gray-900 text-gray-100">
               {/* Sidebar */}
               <aside className="w-64 bg-gray-800 flex flex-col shadow-lg">
                    <div className="p-6 text-xl font-bold border-b border-gray-700">
                         Dashboard
                    </div>
                    <nav className="flex-1 p-6 space-y-4">
                         <a
                              href="#"
                              className="block px-4 py-2 rounded hover:bg-gray-700"
                         >
                              Home
                         </a>
                         <a
                              href="#"
                              className="block px-4 py-2 rounded hover:bg-gray-700"
                         >
                              Analytics
                         </a>
                         <a
                              href="#"
                              className="block px-4 py-2 rounded hover:bg-gray-700"
                         >
                              Orders
                         </a>
                         <a
                              href="#"
                              className="block px-4 py-2 rounded hover:bg-gray-700"
                         >
                              Settings
                         </a>
                    </nav>
               </aside>

               {/* Main Content */}
               <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <header className="bg-gray-800 shadow-md p-6 flex justify-between items-center">
                         <h1 className="text-2xl font-semibold">Dashboard</h1>
                         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                              Add New
                         </button>
                    </header>

                    {/* Stats Cards */}
                    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                         {stats.map((stat) => (
                              <div
                                   key={stat.id}
                                   className="flex items-center p-4 bg-gray-700 rounded shadow-md"
                              >
                                   <div className="p-3 bg-blue-600 rounded mr-4">
                                        {stat.icon}
                                   </div>
                                   <div>
                                        <p className="text-sm text-gray-300">
                                             {stat.title}
                                        </p>
                                        <p className="text-xl font-bold text-white">
                                             {stat.value}
                                        </p>
                                   </div>
                              </div>
                         ))}
                    </div>

                    {/* Main Dashboard Content */}
                    <div className="p-6 flex-1 bg-gray-900">
                         <div className="bg-gray-800 rounded shadow p-6 h-96">
                              <h2 className="text-xl font-semibold mb-4">
                                   Analytics Chart
                              </h2>
                              <div className="flex justify-center items-center h-full text-gray-500">
                                   {/* Placeholder for chart */}
                                   Chart goes here
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Dashboard;
