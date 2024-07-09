import { createContext, useContext, useState, useEffect } from "react";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children, user }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [authUserString, setAuthUserString] = useState(null);

  useEffect(() => {
    if (user && user.user_id) {
      setAuthUserString(user.user_id);
    } else {
      setAuthUserString(null);
    }
  }, [user]);

  useEffect(() => {
    if (authUserString) {
      const newSocket = io("http://localhost:3001", {
        query: {
          userId: authUserString
        }
      });

      setSocket(newSocket);

      newSocket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users);
      });

      return () => {
        newSocket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUserString]);

  useEffect(() => {
    console.log("Updated online users:", onlineUsers);
  }, [onlineUsers]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
