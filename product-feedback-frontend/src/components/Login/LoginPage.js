const LoginPage = () => {
  return (
    <form className="p-6 sm:mx-28 md:max-w-xl md:mx-auto">
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
              id="base-input"
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
              type="text"
              id="base-input"
              className="block w-full p-3 mt-4 text-sm text-gray-900 rounded-lg bg-main-secondary focus:ring-blue-500 focus:border-blue-500"
            ></input>
            <button class="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-blue-primary rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700">
              Show
            </button>
          </div>
        </section>
      </div>
    </form>
  );
};

export default LoginPage;
