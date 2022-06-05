import { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../../UserContext";

const Hero = ({ handleSlideoverOpen, open }) => {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-main-secondary transition ease transform duration-300`;

  const { loggedInUser, handleNewLogin } = useContext(UserContext);

  return (
    <div className="sm:w-56 lg:h-32 sm:h-44 sm:flex-col sm:justify-end sm:items-start sm:rounded-lg relative flex items-center justify-between bg-cover bg-[url('./assets/background-header.png')] px-6 py-4">
      <div className="mb-auto">
        {loggedInUser ? (
          <div>Welcome {loggedInUser.name}</div>
        ) : (
          <Link to="/login">
            <div>
              <p
                className="text-xs font-light text-white underline decoration-solid"
                href="#"
              >
                Log in
              </p>
            </div>
          </Link>
        )}
      </div>

      <div className="flex flex-col justify-end">
        <p className="text-base font-bold tracking-wide text-white">
          Product Feedback
        </p>
        <p className="text-sm font-normal text-white">Feedback Board</p>
      </div>

      <button
        className="flex flex-col items-center justify-center h-12 rounded group sm:hidden"
        onClick={handleSlideoverOpen}
      >
        <div
          className={`${genericHamburgerLine} ${
            open
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            open ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            open
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
    </div>
  );
};

export default Hero;
