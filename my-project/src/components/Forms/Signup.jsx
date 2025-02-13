import image from "../assets/images/Perfect.png";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: "+91", // Default country code
    },
  });
  const [data, setData] = useState("");
  console.log(data);
  
  return (
    <>
      <div className="flex justify-center items-center m-5">
        <div className="flex flex-col justify-center items-center">
          <div id="img">
            <img src={image} className="h-16" alt="Image" />
          </div>
          <section className="flex flex-col justify-center items-center mt-3">
            <form
              className="flex flex-col justify-start w-full md:w-[400px] border rounded-xl p-4"
              action="/signup"
              onSubmit={handleSubmit((formData) => setData(JSON.stringify(formData)))}
            >
              <h1 className="text-2xl text-center">Create an Account</h1>
              <div className="flex flex-col p-5 space-y-3">
                <label htmlFor="fullName">Full Name</label>
                <input
                name="fullname"
                  id="fullName"
                  {...register("fullName", { required: "Full Name is required" })}
                  className="border rounded-sm p-1"
                  type="text"
                  placeholder="Enter your full name"
                />
                {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}

                <label>Mobile Number</label>
                <div className="flex">
                  <select
                    id="country-code"
                    {...register("category", { required: "Country code is required" })}
                    className="w-[80px] border p-1"
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+7">🇷🇺 +7</option>
                    <option value="+27">🇿🇦 +27</option>
                  </select>
                  <input
                    type="text"
                    name="mobile"
                    {...register("mobileNumber", { required: "Mobile number is required" })}
                    className="border rounded-sm p-1 w-full"
                  />
                </div>
                {errors.mobileNumber && (
                  <span className="text-red-500">{errors.mobileNumber.message}</span>
                )}

                <label htmlFor="password">Password</label>
                <input
                name="password"
                  id="password"
                  type="password"
                  placeholder="Create a new Password"
                  className="border rounded-sm p-1"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                <button
                  type="submit"
                  className="border rounded-lg p-[5px] w-full bg-orange-500 active:bg-orange-500 hover:bg-orange-300"
                >
                  Submit
                </button>
              </div>
              <hr className="w-full" />
              <div className="mt-5 text-center">
                <span>Already have an Account ? </span>
                <button className="text-blue-700">Sign in</button>
              </div>
            </form>
            {/* <pre className="mt-5">{data}</pre> */}
          </section>
        </div>
      </div>
    </>
  );
}
