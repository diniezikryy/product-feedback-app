import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogout = async (event) => {
    event.preventDefault();
    window.localStorage.clear();
    setLoggedInUser(null);
  };

  return (
    <UserContext.Provider
      value={{ loggedInUser, setLoggedInUser, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
