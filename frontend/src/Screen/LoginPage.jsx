import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/HomeBg.png";

export const LoginPage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className=" text-neutral-content text-center pr-280">
        <div className="max-w-lg ">
          <fieldset className="fieldset w-96 border border-base-380 p-8 rounded-box bg-transparent backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-6">Login</h2>

            <input
              type="email"
              className="input input-lg w-full mb-4"
              placeholder="Email"
            />

            <input
              type="password"
              className="input input-lg w-full mb-6"
              placeholder="Password"
            />

            <Link to="/app/home">
              <button className="btn btn-neutral btn-lg w-full mt-4">
                Login
              </button>
            </Link>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
