import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [resetSent, setResetSent] = useState(false); // To indicate reset email sent

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully");
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError("This email address is already in use by another account.");
      } else {
        setError(error.message);
      }
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError("Please enter your email address first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
      setError("Password reset email sent. Check your inbox.");
    } catch (error) {
      setError("Failed to send password reset email.");
      console.error("Error sending password reset email:", error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        {error === "This email address is already in use by another account." && (
          <button type="button" onClick={handleResetPassword}>
            Send Reset Password Email
          </button>
        )}
      </form>
      {error && <p>{error}</p>}
      {resetSent && <p>Check your email to reset your password.</p>}
    </div>
  );
};

export default Signup;
