import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => prevValue - 1);
    }, 1000);

    if (count === 0) {
      navigate("/admin/admin-cmc-login", {
        state: location.pathname,
      });
    }
    return () => clearInterval(interval);
  }, [count, navigate, location]);

  return (
    <>
      <div
        className="flex  flex-col justify-center  items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="text-center text-2xl">
          redirecting to you in {count} second{" "}
        </h1>
        <div
          className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
