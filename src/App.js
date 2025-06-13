import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import EditProfilePage from "./pages/EditProfilePage";
import './App.css';
import LandingPage from './pages/LandingPage';
import InformasiSarastya from './pages/InformasiSarastya';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        {/* <Route path="/informasi-tentang" element={<InformasiSarastya />} /> */}
        {/* <Route path="/informasi-syarat-pkl" element={<InformasiSarastya />} /> */}
        {/* <Route path="/informasi-syarat-adm" element={<InformasiSarastya />} /> */}
        {/* <Route path="/informasi-divisi" element={<InformasiSarastya />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
