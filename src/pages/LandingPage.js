import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import sarastyaLogo from "../assets/sarastya-logo.png";
import hero from "../assets/hero.png";

function LandingPage() {
  return (
    <div className="page-wrapper">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-left">
          <img src={sarastyaLogo} alt="Sarastya Logo" className="nav-logo" />
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

      {/* Hero Section + Info Section Digabung */}
      <main className="main-section">
        <div className="text-content">
           <h1>Bergabung dengan <br /> Sarastya Technology!</h1>
            <p>Tingkatkan skillmu dalam dunia digital bersama program Prakerin Sarastya Technology.</p>
            <p class="tagline-text"> Pioneering Internship for Next-Gen Leaders in Ambidextrous Organization.
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

      <footer className="social-footer">
      <p className="follow-text">Follow us on Instagram @daily.sarastya</p>
      <p>&copy; 2025 Sarastya Technology. All rights reserved.</p>
</footer>
    </div>
  );
}

export default LandingPage;
