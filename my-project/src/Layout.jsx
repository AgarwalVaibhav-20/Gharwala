import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MensProduct from "./components/ProductDispaly/MensProduct";
     {/* <InputOTPControlled/> */}

const Layout = () => {
  
  return (
    <div>
      <Navbar />
      <MensProduct/>
      <Outlet />
    </div>
  );
};

export default Layout;
