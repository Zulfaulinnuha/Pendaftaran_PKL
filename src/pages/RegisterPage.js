import React, { useState } from "react";
import "./RegisterPage.css";
import sarastyaLogo from "../assets/sarastya-logo.png";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Registrasi berhasil!");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setMessage("❌ Gagal: " + (data.message || "Email sudah digunakan"));
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Error saat mengirim data");
    }
  };

  return (
    <div className="register-page">
      <div className="wave-header">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#1565c0"
            d="M0,128L80,128C160,128,320,128,480,144C640,160,800,192,960,186.7C1120,181,1280,139,1360,117.3L1440,96V0H0Z"
          ></path>
        </svg>
      </div>

      <div className="register-card">
        <img src={sarastyaLogo} alt="Sarastya Logo" className="register-logo" />
        <h2 className="register-title">Pendaftaran PKL Sarastya</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="register-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
            required
          />
          <button type="submit" className="register-button">Daftar</button>
        </form>
        {message && <p className="register-message">{message}</p>}
      </div>

      <footer className="register-footer">
        <p>&copy; {new Date().getFullYear()} Sarastya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default RegisterPage;
