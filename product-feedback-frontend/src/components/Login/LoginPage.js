import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import loginService from "../../services/login";
import feedbackService from "../../services/feedback";

import ButtonSecondary from "../Elements/Buttons/ButtonSecondary";
import ButtonTertiary from "../Elements/Buttons/ButtonTertiary";

import UserContext from "../../UserContext";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setLoggedInUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem(
        "loggedFeedbackAppUser",
        JSON.stringify(user)
      );
      feedbackService.setToken(user.token);
      setLoggedInUser(user);
      setUsername("");
      setPassword("");
      navigate("/");
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="p-6 sm:mx-28 md:max-w-xl md:mx-auto"
    >
      <div className="mt-8">
        <Link to="/">
          <ButtonTertiary buttonText="Go Back" />
        </Link>
      </div>
      <div className="relative flex flex-col p-6 bg-white rounded-lg mt-14">
        <h1 className="mx-auto text-lg font-bold text-navy-primary">
          Log into your account
        </h1>

        <section className="mt-6">
          <h2 className="text-sm font-bold text-navy-primary">Username</h2>
          <p className="text-sm font-light text-navy-tertiary">
            Please key in your username
          </p>
          <div className="relative">
            <input
              type="text"
              onChange={({ target }) => setUsername(target.value)}
              className="block w-full p-3 mt-4 text-sm text-gray-900 rounded-lg bg-main-secondary focus:ring-blue-500 focus:border-blue-500"
            ></input>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-sm font-bold text-navy-primary">Password</h2>
          <p className="text-sm font-light text-navy-tertiary">
            Please key in your password
          </p>
          <div className="relative">
            <input
              type={showPassword === false ? "password" : "text"}
              onChange={({ target }) => setPassword(target.value)}
              className="block w-full p-3 mt-4 text-sm text-gray-900 rounded-lg bg-main-secondary focus:ring-blue-500 focus:border-blue-500"
            ></input>
            <button
              onClick={handleShowPassword}
              className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white rounded-r-lg bg-blue-primary hover:bg-indigo-500 focus:bg-indigo-700"
            >
              Show
            </button>
          </div>

          <Link id="RouterNavLink" to="/register">
            <p
              className="text-xs font-light underline decoration-solid text-blue-primary"
              href="#"
            >
              Dont have an account? Sign up!
            </p>
          </Link>
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
              <ButtonSecondary text="Cancel" />
            </div>
          </div>

          <div className="hidden mt-10 ml-auto sm:flex">
            <div className="ml-auto mr-4">
              <ButtonSecondary text="Cancel" />
            </div>
            <div className="">
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold leading-5 text-center text-white rounded-lg cursor-pointer text-b bg-fuchsia-600 hover:bg-fuchsia-400"
              >
                Login
              </button>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
};

export default LoginPage;
