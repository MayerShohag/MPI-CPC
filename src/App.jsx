import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Context from "./context/context";
import Footer from "./components/footer/Footer";

const App = () => {
     return (
          <Context>
               <div className=" bg-slate-950 text-white min-h-screen">
                    <Header />
                    <Outlet />
                    <Footer />
               </div>
          </Context>
     );
};

export default App;
