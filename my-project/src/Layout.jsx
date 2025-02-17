import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import { InputOTPControlled } from "./components/Forms/InputOTPControlled";

const Layout = () => {
  return (
    <div>
     <Navbar/>
     {/* <InputOTPControlled/> */}
     
      <Outlet />
    
    </div>
  );
};

export default Layout;
