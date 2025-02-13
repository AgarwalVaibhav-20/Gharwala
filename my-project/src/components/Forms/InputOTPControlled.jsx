"use client";

import * as React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function InputOTPControlled() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-200 ">
      <section className="flex justify-center items-center w-full max-w-md bg-white p-8 rounded-lg shadow-lg  max-sm:m-4">
        <div className="space-y-6 flex flex-col w-full items-center justify-center h-full">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Enter OTP
          </h2>
          <form>
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(value) => setValue(value)}
              className="space-y-4"
            >
              <InputOTPGroup>
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <div className="text-center mt-3 text-sm text-gray-600">
              {value === "" ? (
                <>Enter your one-time password to proceed.</>
              ) : (
                <>
                  You entered: <strong>{value}</strong>
                </>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3 text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 rounded-lg transition duration-300"
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
