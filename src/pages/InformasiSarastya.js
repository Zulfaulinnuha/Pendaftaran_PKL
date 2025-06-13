import React from "react";
import "./InformasiSarastya.css";

function InformasiSarastya() {
  return (
    <div className="info-page">
      <section id="informasi-sarastya" className="info-section">
        <h2>Tentang Sarastya</h2>
        <p>
          Sarastya Internship Academy merupakan program pendidikan magang seperti PKL/Prakerin, Magang Pra Profesional, Magang Profesional dan sebagainya di SARASTYA yang bertujuan untuk memaksimalkan KOMPETENSI, KEMAMPUAN dan KAPASITAS peserta magang baik dari siswa SMK ataupun Mahasiswa untuk beradaptasi di lingkungan kerja. Sehingga mampu mengembangkan sikap profesional sesuai bidang keahliannya di perusahaan/industri.
        </p>
        <p>
          PKL/Prakerin merupakan program pendidikan magang bagi Siswa dan Mahasiswa Aktif untuk meningkatkan kompetensi dan penerapan pembelajaran dari sekolah atau kampus yang relevan dengan dunia kerja dan dunia industri. Program ini dilangsungkan dengan durasi minimal 6 bulan (1 semester).
        </p>
      </section>

      <div className="section-divider" />

      <section id="syarat-pkl" className="info-section">
        <h2>Syarat PKL</h2>
        <ul>
          <li>Jenjang Pendidikan:</li>
          <ul>
            <li>Mahasiswa Aktif: D3/D4/S1</li>
            <li>Sekolah Menengah: SMK</li>
          </ul>
          <li>Periode/Durasi PKL:</li>
          <ul>
            <li>Mahasiswa aktif: minimal 6 bulan atau 1 semester</li>
            <li>SMK: minimal 6 bulan atau 1 semester</li>
          </ul>
        </ul>
      </section>

      <div className="section-divider" />

      <section id="syarat-adm" className="info-section">
        <h2>Syarat Administrasi</h2>
        <ul>
          <li>Surat Pengantar atau Proposal dari Sekolah/Perguruan Tinggi</li>
          <li>Surat Pengantar PKL Keterangan Data Siswa atau Mahasiswa</li>
          <li>Durasi dan Periode PKL</li>
          <li>Scan Raport/transkrip nilai semester akhir</li>
          <li>Proposal Individu</li>
          <li>Data Diri Lengkap (CV)</li>
          <li>Video Pengenalan Diri</li>
        </ul>
      </section>

      <div className="section-divider" />

      <section id="informasi-divisi" className="info-section">
        <h2>Divisi di Sarastya Technology</h2>
        <p>
          Perusahaan di bidang Pengembangan sistem/aplikasi (Process Automation) berbasis Business Process Management Suites (BPMS) dan Enterprise Resources Planning (ERP) yang mengintegrasikan People, Process dan Technology di perusahaan.
        </p>
        <ul>
          <li>Front End Developer</li>
          <li>Back End Developer</li>
          <li>Web Developer</li>
          <li>Mobile Developer</li>
          <li>Network Engineer</li>
          <li>Digital Creative & Implementation Consultant</li>
        </ul>
      </section>
    </div>
  );
}

export default InformasiSarastya;
