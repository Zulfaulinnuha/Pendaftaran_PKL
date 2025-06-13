import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";
import sarastyaLogo from "../assets/sarastya-logo.png";
import hero from "../assets/hero.png";
import profileIcon from "../assets/profile.png";
import InformasiSarastya from "./InformasiSarastya"; // ✅ Import komponen info

function LandingPage() {
  const [avatarURL, setAvatarURL] = useState(profileIcon);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const userId = JSON.parse(atob(token.split(".")[1])).id;
        setIsLoggedIn(true);

        fetch(`http://localhost:5000/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.avatar) {
              setAvatarURL(`http://localhost:5000/uploads/${data.avatar}`);
            }
          })
          .catch((err) => {
            console.error("Gagal memuat avatar:", err);
          });
      } catch (err) {
        console.error("Token tidak valid:", err);
        setIsLoggedIn(false);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setAvatarURL(profileIcon);
    navigate("/");
  };

  return (
    <div className="page-wrapper">
      <header className="navbar">
        <div className="nav-left">
          <div className="nav-logo-container">
            <img src={sarastyaLogo} alt="Sarastya Logo" className="nav-logo" />
          </div>

          <div className="nav-links">
            {/* ✅ Gunakan <a href> agar bisa scroll lokal */}
            <a href="#informasi-sarastya" className="nav-link">Tentang Sarastya</a>
            <a href="#syarat-pkl" className="nav-link">Syarat PKL</a>
  <a href="#syarat-adm" className="nav-link">Syarat Administrasi</a>
  <a href="#informasi-divisi" className="nav-link">Divisi</a>
          </div>
        </div>

        <div className="nav-right">
          {!isLoggedIn ? (
            <>
              <Link to="/" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          ) : (
            <>
              <Link to="/edit-profile" className="nav-profile-link">
                <img src={avatarURL} alt="Profile" className="nav-profile-icon" />
              </Link>
              <Link to="/LandingPage" onClick={handleLogout} className="nav-link">Logout</Link>
            </>
          )}
        </div>
      </header>

      <main className="main-section">
        <div className="text-content">
          <h1>Bergabung dengan <br /> Sarastya Technology!</h1>
          <p>Tingkatkan skillmu dalam dunia digital bersama program Prakerin Sarastya Technology.</p>
          <p className="tagline-text">
            Pioneering Internship for Next-Gen Leaders in Ambidextrous Organization.
          </p>
          <div className="info-section">
            <p><strong>Lokasi:</strong><br />
              Sarastya Building - Jl. Trs.Candi Mendut No.9B, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur 65142.
            </p>
            <p><strong>Narahubung:</strong><br />
              <span className="contact-line">SAI: sarastya.hg@gmail.com | WA: 0851-7686-3899</span><br />
              <span className="contact-line">STI: sasrastyatechnology.hg@gmail.com | WA: 0851-7538-5499</span><br />
              <span className="contact-line">Appslings: appslings1@gmail.com | WA: 0813-3300-7665</span>
            </p>
          </div>
        </div>

        <div className="image-content">
          <img src={hero} alt="Visual Hero" className="hero-img" />
        </div>
      </main>

      {/* ✅ Tambahkan section informasi langsung di bawah */}
      <div className="pembatas-pita"></div>
    <div id="informasi-sarastya" style={{ scrollMarginTop: "120px" }}>
    <InformasiSarastya />
</div>

      <footer className="social-footer">
        <p className="follow-text">Follow us on Instagram @daily.sarastya</p>
        <p>&copy; 2025 Sarastya Technology. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
