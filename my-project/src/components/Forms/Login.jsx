import { Link } from "react-router-dom";
import image from "../assets/images/Perfect.png";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/login", {
        email,
        password,
      });
      setMessage("Login successful!");
      console.log(response.data);
    } catch (error) {
      setMessage("Login failed. Please try again.");
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center px-4 py-6 max-sm:px-[10px] max-sm:py-5">
        <div className="flex justify-center items-center flex-col w-[400px] max-sm:w-full sm:mx-6">
          <div className="mt-4">
            <img src={image} className="h-16" alt="Logo" />
          </div>
          <section className="border rounded-xl mt-8 w-[400px] max-sm:w-full h-full p-6 max-sm:p-4">
            <div className="gap-y-3">
              <h1 className="text-2xl text-center mb-4">Sign In</h1>
              <div className="flex justify-center items-start flex-col gap-y-4">
                <label className="font-semibold">
                  E-mail or mobile phone number
                </label>
                <input
                  className="outline-none border rounded-md w-full p-2 max-sm:p-1"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="font-semibold mt-4">
                  Password
                </label>
                <input
                  className="outline-none border rounded-md w-full p-2 max-sm:p-1"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button onClick={handleSubmit} className="border rounded-lg bg-orange-600 active:bg-orange-900 hover:bg-orange-500 text-white w-full p-2 max-sm:p-1">
                  Submit
                </button>
                {message && <p className="text-[13px] text-center mt-2">{message}</p>}
                <p className="text-[13px] text-center mt-2">
                  By continuing, you agree to GharWala's
                  <span className="text-blue-700"> Conditions of Use </span> and
                  <span className="text-blue-700"> Privacy Notice.</span>
                </p>
                <div className="flex items-center w-full mt-4">
                  <div className="flex-grow h-[1px] bg-gray-300 mr-4"></div>
                  <h2 className="text-center text-sm">New User?</h2>
                  <div className="flex-grow h-[1px] bg-gray-300 ml-4"></div>
                </div>
                <div className="flex justify-center items-center w-full mt-4">
                  <Link to="/signup" className="text-center border rounded-xl py-2 px-3 w-full bg-slate-100 active:bg-slate-300">
                    Create an Account
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
