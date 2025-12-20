import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Context from "./context/context";

const App = () => {
     return (
          <Context>
               <div className=" bg-slate-950 min-h-screen">
                    <Header />
                    <Outlet />
               </div>
          </Context>
     );
};

export default App;
