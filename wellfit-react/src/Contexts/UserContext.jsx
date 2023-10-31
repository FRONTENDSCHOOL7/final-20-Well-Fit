import { createContext, useState } from 'react';

export const UserContext = createContext({
  userInfo: {
    _id: null,
    username: null,
    email: null,
    accountname: null,
    intro: null,
    image: null,
  },
  setUserInfo: (info) => {},
});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    _id: null,
    username: null,
    email: null,
    accountname: null,
    intro: null,
    image: null,
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
