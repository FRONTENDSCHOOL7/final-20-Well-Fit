import { createContext, useState } from 'react';

export const UserContext = createContext({
  userInfo: {
    _id: '',
    username: '',
    email: '',
    password: '',
    accountname: '',
    intro: '',
    image: '',
  },
  setUserInfo: (info) => {},
});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    _id: '',
    username: '',
    email: '',
    password: '',
    accountname: '',
    intro: '',
    image: '',
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
