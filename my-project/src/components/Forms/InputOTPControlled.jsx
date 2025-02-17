import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import AlertPopUp from "./AlertPopUp";

export function InputOTPControlled() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("error");
  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [user, setUser] = useState(null);

  // Handle OTP verification
  const handleVerify = async (event) => {
    event.preventDefault();
    if (otp.length !== 6) {
      showMessage("OTP must be 6 digits.", "error");
      return;
    }

    try {
      const response = await axios.post("/user/verify-email", { code: otp });
      showMessage(
        response.data.message,
        response.data.success ? "success" : "error"
      );
      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      showMessage(
        error.response?.data?.message || "Something went wrong!",
        "error"
      );
    }
  };

  // Handle OTP Resend
  const handleResendOTP = async () => {
    try {
      setTimer(60);
      setResendDisabled(true);
      const response = await axios.post("/user/resend-otp");
      showMessage(response.data.message, "success");
    } catch (error) {
      showMessage(
        error.response?.data?.message || "Failed to resend OTP.",
        "error"
      );
    }
  };

  // Timer for resend button
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setResendDisabled(false);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Function to show alert messages
  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
  };

  if (user) {
    return <Navigate to="/" state={{ user }} replace={true} />;
  }

  return (
    <div className="flex justify-center items-center h-screen  bg-gray-50">
      {/* OTP Card */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-sm bg-white p-6 -mt-36 rounded-lg shadow-lg border border-gray-200 max-sm:ml-6 max-sm:mr-6 max-sm:-mt-32"
      >
        <div className="space-y-4 flex flex-col w-full items-center h-full ">
          <h2 className="text-2xl font-bold text-gray-900">
            Verify Your Identity
          </h2>
          <p className="text-sm text-gray-600 text-center">
            Enter the 6-digit code sent to your email or phone.
          </p>

          {/* OTP Form */}
          {/* Animated Alert Message */}
          <div className="relative w-[800px] h-full flex justify-center items-start">
            <div className="absolute  max-sm:-top-44 left-1/2 -translate-x-1/2 flex justify-center">
              <AnimatePresence>
                {message && (
                  <AlertPopUp
                    message={message}
                    type={messageType}
                    onClose={() => setMessage(null)}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          <form
            className="w-full flex flex-col items-center"
            onSubmit={handleVerify}
          >
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={setOtp}
              className="w-full flex justify-center gap-2"
            >
              <InputOTPGroup className="flex justify-center">
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg font-semibold focus:border-[#fc7a1e] focus:ring-[#fc7a1e]"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>

            <div className="text-center mt-3 text-sm text-gray-700">
              {otp ? (
                <>
                  You entered: <strong>{otp}</strong>
                </>
              ) : (
                <>Enter your OTP to proceed.</>
              )}
            </div>

            {/* Verify Button */}
            <div className="mt-5 w-full">
              <Button
                type="submit"
                className="w-full py-3 bg-[#fc7a1e] hover:bg-[#e76b16] active:bg-[#d46013] text-white font-medium rounded-md transition"
              >
                Verify OTP
              </Button>
            </div>

            {/* Resend OTP */}
            <div className="flex flex-col items-center mt-4 text-sm text-gray-600">
              <span>Didn't receive the code?</span>
              <button
                onClick={handleResendOTP}
                className={`text-blue-600 hover:underline mt-1 ${
                  resendDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={resendDisabled}
              >
                Resend Code {resendDisabled && `(${timer}s)`}
              </button>
            </div>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
