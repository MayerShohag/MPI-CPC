import { createContext, useState } from "react";

export const problemContext = createContext(null);

const Context = ({ children }) => {
     const [problem, setProblem] = useState({});
     return (
          <problemContext.Provider
               value={{
                    problem,
                    setProblem,
               }}
          >
               {children}
          </problemContext.Provider>
     );
};

export default Context;
