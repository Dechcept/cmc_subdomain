import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Componets/Footer";
import About from "./Page/About";
import Navbar from "./Page/Navbar";
import MattressProduct from "./Page/MattressProduct";
import YarnProduct from "./Page/YarnProduct";
import SewingProduct from "./Page/SewingProduct";
import UpholsteryProduct from "./Page/UpholsteryProduct";
import MattressPillow from "./Page/MattressPillow";
import Sustainable from "./Page/Sustainable";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Exibution from "./Page/Exibution";
import CareerDetailPage from "./Componets/Career/CareerDetailPage";
import Career from "./Page/Career";
import { useSelector } from "react-redux";
import Certifications from "./Componets/Slider2";
import Jobapplication from "./AdminPanel/Jobapplication";
import AdminLogin from "./AdminPanel/AdminLogin";
import Blog from "./AdminPanel/Blog";
import AdminCareer from "./AdminPanel/AdminCareer";
import AdminDashBoard from "./AdminPanel/AdminDashBoard";
import PrivateRoute from "./Route/PrivateRoute";
import JointVenture_About from "./Page/JointVenture_About";
import Blogbox from "./Componets/BlogBox";
import Blogpage from "./Page/Blog";
import NotFound from "./Page/ErrorPage";
import StitchBondSeries from "./Page/StitchBondSeries";
import Quiltpro from "./Page/Quiltpro";
import Spunstar from "./Page/Spunstar";
import Threadluxe from "./Page/Threadluxe";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route path="/admin/admin-cmc-login" element={<AdminLogin />} />
      <Route path="/admin" element={<PrivateRoute />}>
        <Route path="" element={<AdminDashBoard />} />
        <Route path="/admin/Dashboard" element={<AdminDashBoard />} />
        <Route path="/admin/Blog" element={<Blog />} />
        <Route path="/admin/Career/Jobs" element={<AdminCareer />} />
        <Route
          path="/admin/Career/jobapplication"
          element={<Jobapplication />}
        />
      </Route>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/Exhibition" element={<Exibution />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/detail" element={<CareerDetailPage />} />
        <Route path="/Mattress_fabrics" element={<MattressProduct />} />
        <Route path="/partnership" element={<JointVenture_About />} />
        <Route path="/Yarn" element={<YarnProduct />} />
        <Route path="/Sewing_Thread" element={<SewingProduct />} />
        <Route path="/Upholstery_Fabrics" element={<UpholsteryProduct />} />
        <Route path="/MattressPillow_cover" element={<MattressPillow />} />
        <Route path="/Sustainable" element={<Sustainable />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Certifications" element={<Certifications />} />
        <Route path="/Mattressfabrics/Contact" element={<Contact />} />
        <Route path="/Stitchbondseries" element={<StitchBondSeries />} />
        <Route path="/Quiltpro" element={<Quiltpro />} />
        <Route path="/Spunstar" element={<Spunstar />} />
        <Route path="/Threadluxe" element={<Threadluxe />} />
      </Route>
    </Routes>
  );
}
export default App;
