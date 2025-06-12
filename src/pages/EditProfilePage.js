import React, { useEffect, useState } from "react";
import "./EditProfilePage.css";

function EditProfilePage() {
  const [user, setUser] = useState({
    username: "",
    nama_lengkap: "",
    no_telp: "",
    email: "",
    jenis_kelamin: "",
    avatar: null, // bisa string (filename) atau File object
  });

  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const userId = token ? JSON.parse(atob(token.split(".")[1])).id : null;

  useEffect(() => {
    if (!token || !userId) return;

    fetch(`http://localhost:5000/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser((prevUser) => ({
          ...prevUser,
          username: data.username || "",
          nama_lengkap: data.nama_lengkap || "",
          no_telp: data.no_telp || "",
          email: data.email || "",
          jenis_kelamin: data.jenis_kelamin || "",
          avatar: data.avatar || null, // ini string nama file
        }));
      })
      .catch(() => setMessage("Gagal memuat data profil"));
  }, [token, userId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("nama_lengkap", user.nama_lengkap);
    formData.append("no_telp", user.no_telp);
    formData.append("email", user.email);
    formData.append("jenis_kelamin", user.jenis_kelamin);
    if (user.avatar instanceof File) {
      formData.append("avatar", user.avatar);
    }

    try {
      const res = await fetch(`http://localhost:5000/profile/${userId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Profil berhasil diperbarui");
      } else {
        setMessage("❌ Gagal update: " + (data.message || "Terjadi kesalahan"));
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Gagal mengirim data");
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
    <div className="edit-profile-container">
      <h2>Edit Profil</h2>
      <form onSubmit={handleUpdate} className="edit-profile-form">
        <img src={getAvatarURL()} alt="Avatar" className="avatar-preview" />

        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={user.nama_lengkap}
          onChange={(e) => setUser({ ...user, nama_lengkap: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="No Telepon"
          value={user.no_telp}
          onChange={(e) => setUser({ ...user, no_telp: e.target.value })}
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
          value={user.jenis_kelamin}
          onChange={(e) => setUser({ ...user, jenis_kelamin: e.target.value })}
          required
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="submit">Simpan Perubahan</button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
}

export default EditProfilePage;
