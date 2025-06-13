import React, { useState } from "react";
import "./LoginPage.css";
import sarastyaLogo from "../assets/sarastya-logo.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Login berhasil!");
        localStorage.setItem("token", data.token);
        window.location.href = "/LandingPage";
      } else {
        setMessage("❌ Login gagal: " + (data.message || "Email atau password salah"));
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Terjadi kesalahan saat login");
    }
  };

  return (
    <div className="login-page">
      <div className="wave-header">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#1565c0"
            d="M0,128L80,128C160,128,320,128,480,144C640,160,800,192,960,186.7C1120,181,1280,139,1360,117.3L1440,96V0H0Z"
          ></path>
        </svg>
      </div>

      <div className="login-card">
        <img src={sarastyaLogo} alt="Sarastya Logo" className="login-logo" />
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">Masuk</button>
        </form>
        {message && <p className="login-message">{message}</p>}
      </div>

      <footer className="login-footer">
        <p>&copy; {new Date().getFullYear()} Sarastya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LoginPage;
