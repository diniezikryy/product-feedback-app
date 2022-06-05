import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleNewLogin = (newUser) => {
    setLoggedInUser(newUser);
  };

  return (
    <UserContext.Provider value={{ loggedInUser, handleNewLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
