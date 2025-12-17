import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/home/Home";
import Contest from "../components/screens/Contest";
import Leaderboard from "../components/screens/Leaderboard";
import Training from "../components/screens/Training";
import Community from "../components/screens/Community";
import Practice from "../components/screens/practice/Practice";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <App />,
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
          ],
     },
]);
