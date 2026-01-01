import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/home/Home";
import Contest from "../components/screens/Contest";
import Leaderboard from "../components/screens/Leaderboard";
import Training from "../components/screens/Training";
import Community from "../components/screens/Community";
import Practice from "../components/screens/practice/Practice";
import ProblemInterface from "../components/screens/practice/ProblemInterface";
import Login from "../components/screens/login/Login";
import SignUp from "../components/screens/login/Signup";
import ContestRegister from "../components/screens/login/RegisterNow";
import Profile from "../components/profile/Profile";
import ErrorElement from "../components/ErrorElement";
import Dashboard from "../components/profile/Dashboard";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <App />,
          errorElement: <ErrorElement />,
          children: [
               {
                    path: "/",
                    index: true,
                    element: <Home />,
               },
               {
                    path: "/contests",
                    element: <Contest />,
               },
               {
                    path: "/practice",
                    element: <Practice />,
               },
               {
                    path: "/dashboard",
                    element: <Dashboard />,
               },
               {
                    path: "/leaderboard",
                    element: <Leaderboard />,
               },
               {
                    path: "/training",
                    element: <Training />,
               },
               {
                    path: "/community",
                    element: <Community />,
               },
               {
                    path: "/problem",
                    element: <ProblemInterface />,
               },
               {
                    path: "/profile",
                    element: <Profile />,
               },
               {
                    path: "/login",
                    element: <Login />,
               },
               {
                    path: "/signup",
                    element: <SignUp />,
               },
               {
                    path: "/register",
                    element: <ContestRegister />,
               },
          ],
     },
]);
