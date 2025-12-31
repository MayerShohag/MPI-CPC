import { createContext, useState } from "react";

export const loginContext = createContext(null);

const UserLoginContext = ({ children }) => {
     const [show, setShow] = useState(false);
     const [save, setSave] = useState(false);
     const [isLogin, setIsLogin] = useState(
          localStorage.getItem("isLogin") === "true"
     );
     const signOut = () => {
          localStorage.removeItem("cpc-user");
          localStorage.removeItem("isLogin");
          setIsLogin(false);
     };
     return (
          <loginContext.Provider
               value={{
                    isLogin,
                    setIsLogin,
                    signOut,
                    show,
                    setShow,
                    save,
                    setSave,
               }}
          >
               {children}
          </loginContext.Provider>
     );
};

export default UserLoginContext;
