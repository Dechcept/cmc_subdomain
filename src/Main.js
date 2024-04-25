import React from "react";
import Navbar from "./Page/Navbar";
import Footer from "./Componets/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Scrollup from "./Componets/Scrollup";
import { Helmet } from "react-helmet";


const MainLayout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="cmc textiles" />
      </Helmet>
      <Navbar />
      <Scrollup />
     
      <main>
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
