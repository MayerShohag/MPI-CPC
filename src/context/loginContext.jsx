import { createContext, useState } from "react";

export const loginContext = createContext(null);

const UserLoginContext = ({ children }) => {
     const [isLogin, setIsLogin] = useState(
          localStorage.getItem("isLogin") === "true"
     );
     const signOut = () => {
          localStorage.removeItem("cpc-user");
          localStorage.removeItem("isLogin");
          setIsLogin(false);
     };
     return (
          <loginContext.Provider value={{ isLogin, setIsLogin, signOut }}>
               {children}
          </loginContext.Provider>
     );
};

export default UserLoginContext;
