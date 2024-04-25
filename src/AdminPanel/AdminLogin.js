import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAuth } from "../Redux/AdminCareerSlice";

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      if (res && res.data.success) {
        alert(res.data && res.data.message);
        dispatch(
          setAuth({
            user: res.data.user,
            token: res.data.token,
          })
        );

        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/admin");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center flex-col  items-center bg-slate-800">
      <ToastContainer />
      <div>
        <h1 className="text-4xl text-white p-5 font-light">Admin Login</h1>
      </div>
      <div className="  flex flex-col justify-center items-center  gap-10">
        <input
          type="text"
          placeholder="email"
          className="w-[400px] h-[60px] border-b-2 bg-slate-800 text-white outline-none text-xl"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          className="w-[400px] h-[60px] border-b-2 bg-slate-800 text-white outline-none text-xl"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="button"
          className=" px-5 py-2 bg-white hover:bg-slate-600 border-2 rounded-xl hover:text-white transition-all ease-in-out duration-500 "
          onClick={handleSubmit}
        >
          {" "}
          Login{" "}
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
