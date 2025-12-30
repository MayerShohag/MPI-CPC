import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/Router.jsx";
import UserLoginContext from "./context/loginContext.jsx";

createRoot(document.getElementById("root")).render(
     <StrictMode>
          <UserLoginContext>
               <RouterProvider router={router} />
          </UserLoginContext>
     </StrictMode>
);
