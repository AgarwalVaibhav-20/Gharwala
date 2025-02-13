import { useEffect, useRef, useState } from "react";

function OtpVerification({ otpLength = 6 }) {
  const [otpField, setOtpField] = useState(new Array(otpLength).fill("")); // Correct initialization
  const ref = useRef([]);

  const handleKeyDown = (e, index) => {
    const key = e.key;

    if (key === "ArrowLeft") {
      if (index > 0) ref.current[index - 1].focus();
      return;
    }

    if (key === "ArrowRight") {
      if (index + 1 < otpField.length) ref.current[index + 1].focus();
      return;
    }

    const updatedOtp = [...otpField];

    if (key === "Backspace") {
      updatedOtp[index] = "";
      setOtpField(updatedOtp);
      if (index > 0) ref.current[index - 1].focus();
      return;
    }

    if (isNaN(key)) {
      return;
    }

    updatedOtp[index] = key;
    if (index + 1 < otpField.length) ref.current[index + 1].focus();

    setOtpField(updatedOtp);
  };

  useEffect(() => {
    ref.current[0].focus(); // Corrected the typo here
  }, []);

  return (
    <div className="container">
      {otpField.map((value, index) => (
        <input
          className="border h-20 w-20 m-10 p-1 text-3xl text-black"
          key={index}
          ref={(currentInput) => (ref.current[index] = currentInput)}
          type="text"
          value={value}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
}

export default OtpVerification;
