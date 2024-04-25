import React from "react";
import Navbar from "../Page/Navbar";
import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import AdminSidebar from "./AdminSidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminMain = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/6">
        <AdminSidebar />
      </div>
      <div className="w-4/5 flex flex-col">
        <header className="h-1/6">
          <AdminNavbar />
        </header>
        <main className="h-4/6 overflow-y-auto ">
          <ToastContainer />
          {children}
        </main>
        <footer className="h-1/6 bg-[#f5f5f5] flex justify-center items-center">
          <AdminFooter />
        </footer>
      </div>
    </div>
  );
};

export default AdminMain;
