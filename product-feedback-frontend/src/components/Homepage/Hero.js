const Hero = ({ handleSlideoverOpen, open }) => {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-main-secondary transition ease transform duration-300`;

  return (
    <div className="relative flex items-center justify-between bg-cover bg-[url('./assets/background-header.png')] px-6 py-4">
      <div>
        <p className="text-base font-bold tracking-wide text-white">
          Product Feedback
        </p>
        <p className="text-sm font-normal text-white">Feedback Board</p>
      </div>

      <button
        className="flex flex-col items-center justify-center h-12 rounded group"
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
