import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import History from "./pages/History";
import About from "./pages/About";
import MainPage from "./MainPage"; // این را ایمپورت کن
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
      <Footer/>
    </>
  );
}
