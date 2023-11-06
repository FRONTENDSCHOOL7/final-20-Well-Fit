import { createContext, useState, useEffect } from 'react';

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
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(() => {
    const savedUserInfo = localStorage.getItem('userInfo');
    return savedUserInfo
      ? JSON.parse(savedUserInfo)
      : {
          _id: '',
          username: '',
          email: '',
          password: '',
          accountname: '',
          intro: '',
          image: '',
        };
  });

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo]);

  const logout = () => {
    setUserInfo({
      _id: '',
      username: '',
      email: '',
      password: '',
      accountname: '',
      intro: '',
      image: '',
    });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, logout }}>
      {children}
    </UserContext.Provider>
  );
};
