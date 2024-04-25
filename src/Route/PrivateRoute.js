import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Spinner from "../../src/AdminPanel/Component/Spinner";

const PrivateRoute = () => {
  const [ok, setOk] = useState(false);
  const Auth = useSelector((state) => state.Admincareer.auth);

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/admin-auth`,
        {
          headers: {
            Authorization: Auth?.token,
          },
        }
      );

      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }

      console.log(ok);
    };

    if (Auth?.token) authCheck();
  }, [Auth?.token]);
  return ok ? <Outlet /> : <Spinner />;
};

export default PrivateRoute;
