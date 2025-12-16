
import { Outlet } from "react-router";
import Header from "./components/header/Header";

const App = () => {
     return (
          <div className="bg-slate-900 min-h-screen">
               <Header />
               <Outlet/>
          </div>
     );
};

export default App;
