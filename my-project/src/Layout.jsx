import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import { InputOTPControlled } from "./components/Forms/InputOTPControlled";

const Layout = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          text: "Hey, take a look at this amazing link.",
          url: window.location.href, // Or a custom URL
        });
        console.log("Shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };
  return (
    <div>
     <Navbar/>
     {/* <InputOTPControlled/> */}
     
      <Outlet />
      <button onClick={handleShare}>Share This Page</button>;
    </div>
  );
};

export default Layout;
