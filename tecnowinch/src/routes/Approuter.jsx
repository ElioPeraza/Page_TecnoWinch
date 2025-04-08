import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Correas from "../pages/Correas";
import Ganchos from "../pages/Ganchos";
import Winches from "../pages/Winches";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/correas" element={<Correas />} />
      <Route path="/ganchos" element={<Ganchos />} />
      <Route path="/winches" element={<Winches />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
