import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfilePage.css";

function EditProfilePage() {
  const [user, setUser] = useState({
    name: "",
    notelp: "",
    email: "",
    jenisKelamin: "",
    avatar: null,
  });

  const token = localStorage.getItem("token");
  const userId = token ? JSON.parse(atob(token.split(".")[1])).id : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !userId) {
      alert("❌ Tidak ada token otentikasi");
      return;
    }

    fetch(`http://localhost:5000/profile/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({
          name: data.name || "",
          notelp: data.notelp || "",
          email: data.email || "",
          jenisKelamin: data.jenisKelamin || "",
          avatar: data.avatar || null,
        });
      })
      .catch(() => alert("❌ Gagal memuat data profil"));
  }, [token, userId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("notelp", user.notelp);
    formData.append("email", user.email);
    formData.append("jenisKelamin", user.jenisKelamin);
    if (user.avatar instanceof File) {
      formData.append("avatar", user.avatar);
    }

    try {
      const res = await fetch(`http://localhost:5000/profile/${userId}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        // Langsung redirect ke landing page
        navigate("/LandingPage");
      } else {
        alert("❌ Gagal update: " + (data.message || "Terjadi kesalahan"));
      }
    } catch (err) {
      console.error(err);
      alert("❌ Gagal mengirim data");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser({ ...user, avatar: file });
    }
  };

  const getAvatarURL = () => {
    if (user.avatar instanceof File) {
      return URL.createObjectURL(user.avatar);
    } else if (typeof user.avatar === "string") {
      return `http://localhost:5000/uploads/${user.avatar}`;
    } else {
      return `http://localhost:5000/uploads/default.png`;
    }
  };

  return (
    <div className="edit-profile-page">
      <div className="wave-header">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M0,0 C150,100 350,0 500,100 L500,0 L0,0 Z"
            style={{ stroke: "none", fill: "#1565c0" }}
          ></path>
        </svg>
      </div>

      <div className="edit-profile-container">
        <h2>Edit Profil</h2>
        <form onSubmit={handleUpdate} className="edit-profile-form">
          <div className="avatar-container">
            <img src={getAvatarURL()} alt="Avatar" className="avatar-preview" />
            <div className="file-row">
              <span className="file-label">Ganti Foto Profil</span>
              <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />
            </div>
          </div>

          <input
            type="text"
            placeholder="Nama Lengkap"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="No Telepon"
            value={user.notelp}
            onChange={(e) => setUser({ ...user, notelp: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <select
            value={user.jenisKelamin}
            onChange={(e) => setUser({ ...user, jenisKelamin: e.target.value })}
            required
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>

          <button type="submit">Simpan Perubahan</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfilePage;
