import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import sarastyaLogo from "../assets/sarastya-logo.png"; // kamu akan tambah logo di langkah berikut
import hero from "../assets/hero.png";


function LandingPage() {
  return (
    <div className="page-wrapper">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-left">
          <img src={sarastyaLogo} alt="Sarastya Logo" className="logo" />
          <div className="nav-links">
            <Link to="/informasi#tentang">Tentang Sarastya</Link>
            <Link to="/informasi#syarat-pkl">Syarat PKL</Link>
            <Link to="/informasi#syarat-adm">Syarat Administrasi</Link>
            <Link to="/informasi#divisi">Divisi</Link>
          </div>
        </div>
        <div className="nav-right">
          <Link to="/login" className="nav-login">Login</Link>
          <Link to="/register" className="nav-signup">Daftar Sekarang</Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main-section">
        <div className="text-content">
          <h1>Bergabung dengan <br /> Sarastya Technology!</h1>
          <p>
            Tingkatkan skillmu dalam dunia digital bersama program Prakerin Sarastya Technology.
          </p>
        </div>
        <div className="image-content">
          <img src={hero} alt="Visual Hero" className="hero-img" />
        </div>
      </main>

      {/* Footer Social Media */}
      <footer className="social-footer">
        <a href="https://instagram.com/namamu" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com/in/namamu" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </footer>
    </div>
  );
}

export default LandingPage;
