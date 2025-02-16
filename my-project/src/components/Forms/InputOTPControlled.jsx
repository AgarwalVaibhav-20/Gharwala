"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

export function InputOTPControlled() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);

  // Handle OTP verification
  const handleVerify = async (event) => {
    event.preventDefault();

    if (otp.length !== 6) {
      setMessage("OTP must be 6 digits.");
      return;
    }

    try {
      const response = await axios.post("user/verify-email", { code: otp });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    }
  };

  // Handle OTP Resend
  const handleResendOTP = () => {
    setTimer(60);
    setResendDisabled(true);
    // TODO: Call the backend to resend OTP
  };

  // Countdown Timer for Resend Button
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <section className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <div className="space-y-5 flex flex-col w-full items-center">
          <h2 className="text-xl font-semibold text-gray-800">Verify Your Identity</h2>
          <p className="text-sm text-gray-600 text-center">Enter the 6-digit code sent to your email or phone.</p>

          <form className="w-full flex flex-col items-center" onSubmit={handleVerify}>
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
              className="w-full flex justify-center gap-2"
            >
              <InputOTPGroup className="flex justify-center">
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="w-12 h-12 border rounded-md text-center text-lg font-semibold"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>

            <div className="text-center mt-3 text-sm text-gray-700">
              {otp ? <>You entered: <strong>{otp}</strong></> : <>Enter your one-time password to proceed.</>}
            </div>

            <div className="mt-5">
              <Button
                type="submit"
                className="w-full py-3 bg-[#fc7a1e] hover:bg-yellow-600 active:bg-yellow-700 text-white font-medium rounded-md transition"
              >
                Verify OTP
              </Button>
            </div>

            {message && (
              <div className={`mt-2 text-sm ${message.includes("successful") ? "text-green-600" : "text-red-600"}`}>
                {message}
              </div>
            )}

            <div className="flex flex-col items-center mt-4 text-sm text-gray-600">
              <span>Didn't receive the code?</span>
              <button
                onClick={handleResendOTP}
                className={`ml-2 text-blue-600 hover:underline ${resendDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={resendDisabled}
              >
                Resend Code {resendDisabled && `(${timer}s)`}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
