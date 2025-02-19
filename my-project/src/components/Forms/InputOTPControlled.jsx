import { useState, useEffect, useRef } from "react";
// import { Navigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import audiosound from "../assets/sound/mixkit-long-pop-2358.wav";
import errorSound from "../assets/sound/error-2-126514.mp3";

export function InputOTPControlled() {
  const successSoundRef = useRef(new Audio(audiosound));
  const errorSoundRef = useRef(new Audio(errorSound));
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("error");
  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setResendDisabled(false);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
  };

  const handleVerify = async (event) => {
    event.preventDefault();
    if (otp.length !== 6) {
      showMessage("OTP must be 6 digits.", "error");
      errorSoundRef.current.play();
      return;
    }

    try {
      const response = await axios.post("/user/verify-email", { code: otp });
      showMessage(response.data.message, response.data.success ? "success" : "error");
      
      if (response.data.success) {
        setIsVerified(true);
        successSoundRef.current.play();
      } else {
        errorSoundRef.current.play();
      }
    } catch (error) {
      showMessage(error.response?.data?.message || "Something went wrong!", "error");
      errorSoundRef.current.play();
    }
  };

  const handleResendOTP = async () => {
    try {
      setTimer(60);
      setResendDisabled(true);
      const response = await axios.post("/user/resend-otp");
      showMessage(response.data.message, "success");
    } catch (error) {
      showMessage(error.response?.data?.message || "Failed to resend OTP.", "error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-sm bg-white p-6 -mt-36 rounded-lg shadow-lg border border-gray-200"
      >
        <div className="space-y-4 flex flex-col w-full items-center h-full">
          <h2 className="text-2xl font-bold text-gray-900">Verify Your Identity</h2>
          <p className="text-sm text-gray-600 text-center">Enter the 6-digit code sent to your email or phone.</p>

          {message && (
            <div role="alert" className={`alert alert-${messageType} flex justify-center items-center`}>
              <span>{message}</span>
            </div>
          )}

          <form className="w-full flex flex-col items-center" onSubmit={handleVerify}>
            <InputOTP maxLength={6} value={otp} onChange={setOtp} className="w-full flex justify-center gap-2">
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
              {otp ? <strong>You entered: {otp}</strong> : "Enter your OTP to proceed."}
            </div>

            <div className="mt-5 w-full">
              <Button
                type="submit"
                className="w-full py-3 bg-[#fc7a1e] hover:bg-[#e76b16] active:bg-[#d46013] text-white font-medium rounded-md transition"
              >
                Verify OTP
              </Button>
            </div>
          </form>

          <div className="flex flex-col items-center mt-4 text-sm text-gray-600">
            <span>Didn't receive the code?</span>
            {!isVerified && (
              <button
                onClick={handleResendOTP}
                className={`text-blue-600 hover:underline mt-1 ${resendDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={resendDisabled}
              >
                Resend Code {resendDisabled && `(${timer}s)`}
              </button>
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
