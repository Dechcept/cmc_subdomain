import React from "react";
import { FaBars } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const logoutAccount = () => {
    localStorage.removeItem("auth");
    navigate("/admin/admin-cmc-login");
  };
  return (
    <div className=" p-5 flex flex-col justify-center">
      <div className="flex items-center justify-between px-3">
        <div className="flex gap-5">
          <div>
            <FaBars className="text-2xl font-bold" />
          </div>
          <div className="flex text-2xl font-normal">
            Welcome,
            <h1 className=" text-2xl font-bold">Admin</h1>
          </div>
        </div>
        <div className="text-2xl font-bold">CMC</div>
        <div className="flex-col items-center">
          <div className="flex justify-center"> 
            <LuUser2
              className="text-xl font-bold text-center "
              onClick={logoutAccount}
            />
          </div>{" "}
          <div className="text-[10px] ">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
