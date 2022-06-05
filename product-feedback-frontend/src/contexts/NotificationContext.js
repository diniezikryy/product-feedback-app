import { createContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  const setNewMessage = (newMessage, newType) => {
    setMessage(newMessage);
    setType(newType);
    setTimeout(() => {
      setMessage(null);
      setType(null);
    }, 2000);
  };

  return (
    <NotificationContext.Provider value={{ type, message, setNewMessage }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
