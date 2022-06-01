import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ButtonSecondary from "../Elements/Buttons/ButtonSecondary";
import ButtonTertiary from "../Elements/Buttons/ButtonTertiary";

// No routing back to home page if cancelled, no functionality yet, Go Back button doesnt go back to login page

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <form className="p-6 sm:mx-28 md:max-w-xl md:mx-auto">
      <div className="mt-8">
        <Link to="/">
          <ButtonTertiary buttonText="Go Back" />
        </Link>
      </div>
      <div className="relative flex flex-col p-6 bg-white rounded-lg mt-14">
        <h1 className="mx-auto text-lg font-bold text-navy-primary">
          Register your account
        </h1>

        <section className="mt-6">
          <h2 className="text-sm font-bold text-navy-primary">Username</h2>
          <p className="text-sm font-light text-navy-tertiary">
            Please key in your new username
          </p>
          <div className="relative">
            <input
              type="text"
              id="base-input"
              className="block w-full p-3 mt-4 text-sm text-gray-900 rounded-lg bg-main-secondary focus:ring-blue-500 focus:border-blue-500"
            ></input>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-sm font-bold text-navy-primary">Password</h2>
          <p className="text-sm font-light text-navy-tertiary">
            Please key in your new password
          </p>
          <div className="relative">
            <input
              type={showPassword === false ? "password" : "text"}
              id="base-input"
              className="block w-full p-3 mt-4 text-sm text-gray-900 rounded-lg bg-main-secondary focus:ring-blue-500 focus:border-blue-500"
            ></input>
            <button
              onClick={handleShowPassword}
              className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white rounded-r-lg bg-blue-primary hover:bg-indigo-500 focus:bg-indigo-700"
            >
              Show
            </button>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-sm font-bold text-navy-primary">
            Confirm Password
          </h2>
          <p className="text-sm font-light text-navy-tertiary">
            Please key in your new password
          </p>
          <div className="relative">
            <input
              type={showPassword === false ? "password" : "text"}
              id="base-input"
              className="block w-full p-3 mt-4 text-sm text-gray-900 rounded-lg bg-main-secondary focus:ring-blue-500 focus:border-blue-500"
            ></input>
            <button
              onClick={handleShowPassword}
              className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white rounded-r-lg bg-blue-primary hover:bg-indigo-500 focus:bg-indigo-700"
            >
              Show
            </button>
          </div>
        </section>

        <section>
          <div className="mt-10 sm:hidden">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-semibold leading-5 text-center text-white rounded-lg cursor-pointer text-b bg-fuchsia-600 hover:bg-fuchsia-400"
            >
              Login
            </button>
            <div className="mt-4">
              <ButtonSecondary
                text="Cancel"
                onClick={() => {
                  navigate("/login");
                }}
              />
            </div>
          </div>

          <div className="hidden mt-10 ml-auto sm:flex">
            <div className="ml-auto mr-4">
              <ButtonSecondary
                text="Cancel"
                onClick={() => {
                  navigate("/login");
                }}
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold leading-5 text-center text-white rounded-lg cursor-pointer text-b bg-fuchsia-600 hover:bg-fuchsia-400"
              >
                Register
              </button>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
};

export default RegisterPage;
