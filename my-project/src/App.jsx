import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./components/Navbar/MainPage";
import Signup from "./components/Forms/Signup";
import Login from "./components/Forms/Login";
import Cart from "./components/Cart/Cart";
import Electronics from "./components/Electronics/Electronics";
import ProductList from "./components/Shoes/Shoes";
import ProductCard from "./components/ProductDispaly/ProductDetail";
import Headset from "./components/Electronics/Headset/Headset";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/shoes" element={<ProductList />} />
        <Route path="/product-detail" element={<ProductCard />} />
        <Route path="/headset" element={<Headset/>} />
      </Route>
    </Routes>
  );
}

export default App;


// import { useContext, useEffect, useState } from "react";
// import Layout from "./Layout";
// import axios from 'axios';
// // import UserConextProvider from "./context/UserConextProvider";
// // import ProductPage from "./components/ProductPage";
// // import Navbar from "./components/Navbar";


// function App() {
//   const [data , setData]=useState();

//   const getData=async()=>{
//     const response = await axios.get('http://localhost:5008/user/signup')
//     setData(response.data)
//   }
// useEffect(()=>{
//   getData()
// },[]);
//   return (
//     <div>
//       {/* <UserConextProvider> */}
//         {/* <h1>hello world</h1>
//         <Login/>
//         <Profile/> */}
//       {/* </UserConextProvider> */}
//       <Layout/>
//       {/* {data} */}
//     </div>
//   );
// }

// export default App;
