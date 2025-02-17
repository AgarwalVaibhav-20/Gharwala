import { useState } from "react";
import axios from "axios";
import image from "../assets/images/Perfect.png";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Add a 2-second delay before starting the form submission process
    setTimeout(async () => {
      try {
        const response = await axios.post("/user/signup", {
          name,
          email,
          password,
        });
        setMessage("Signup successfu");
        console.log(response.data);
      } catch (error) {
        setMessage("Signup failed. Please try again.");
        console.error("There was an error signing up!", error);
      } finally {
        setLoading(false);
      }
    }, 2000); // Adjust the delay time as needed (2 seconds here)
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh]  max-sm:-translate-y-8">
      <div className="flex flex-col justify-center items-center h-full w-full -translate-y-16 max-sm:-translate-y-0 t max-sm:-mt-10">
        <div className="mb-6 max-sm:mb-1">
          <img className="h-14" src={image} alt="logo image" />
        </div>
        <div className="flex flex-col justify-center items-center border rounded-md p-2 max-sm:m-5">
          <section className="max-sm:p-6 w-[300px] max-sm:w-full sm:mx-6">
            <h2 className="text-center text-2xl mt-2 mb-2">
              Create an account
            </h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="font-semibold">Name:</label>
                <input
                  type="text"
                  value={name}
                  name="fullname"
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your Full Name..."
                  className="border w-full mt-2 p-2 mb-2 outline-none rounded bg-white"
                />
              </div>
              <div>
                <label className="font-semibold">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border w-full mt-2 p-2 mb-2 outline-none rounded bg-white"
                  placeholder="Enter your E-mail..."
                />
              </div>
              <div>
                <label className="font-semibold">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your Password..."
                  className="border w-full mt-2 p-2 mb-2 outline-none rounded bg-white"
                />
              </div>
              <div className="flex justify-center w-full">
                <button
                  className="border items-center rounded-lg bg-orange-600 active:bg-orange-900 hover:bg-orange-500 text-white w-full h-10  mt-2 max-sm:p-1"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? <span className="loading loading-dots loading-md text-white"></span> : 'Sign Up'}
                </button>
              </div>
              {message && (
                <div role="alert" className="alert alert-success flex justify-center items-center absolute w-[270px] left-10 delay-300  max-sm:bottom-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Your Account is Created.</span>
                </div>
              )}
            </form>
          </section>
          <div className="flex flex-col items-center justify-center max-sm:-mt-5 mb-5">
            <p className="mb-2 mt-2 text-lg font-medium">Or</p>
            <p className="text-gray-700">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-blue-600 hover:underline font-semibold"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
