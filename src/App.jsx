import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import History from "./pages/History";
import About from "./pages/About";
import MainPage from "./MainPage"; // این را ایمپورت کن
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
        </motion.nav>

        <Routes>
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Footer />
      </motion.footer>
    </>
  );
}
