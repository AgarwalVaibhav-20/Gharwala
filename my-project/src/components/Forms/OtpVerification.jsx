import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import Layout from "@/Layout";

export function InputOTPControlled() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Use React Router for redirection

  const handleVerify = async (event) => {
    event.preventDefault();

    if (otp.length !== 6) {
      setMessage("OTP must be 6 digits.");
      return;
    }

    try {
      const response = await axios.post("/user/verify-email", { code: otp });

      setMessage(response.data.message);

      if (response.data.success) {
        setTimeout(() => {
          navigate(<Layout/>); // Redirect after successful verification
        }, 1500);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          maxLength="6"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
        />
        <button type="submit">Verify</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
