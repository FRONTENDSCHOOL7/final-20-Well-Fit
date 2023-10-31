import { infoInstance } from './instance';

// 회원가입
export const postSignup = async (
  username,
  email,
  password,
  accountname,
  intro,
  image
) => {
  const userData = {
    user: {
      username: username,
      email: email,
      password: password,
      accountname: accountname,
      intro: intro,
      image: image,
    },
  };
  const response = await infoInstance.post('/user/', userData);
  return response.data;
};

// 이메일 검증
export const postEmailDuplicate = async (email) => {
  const emailData = {
    user: {
      email: email,
    },
  };
  const response = await infoInstance.post('/user/emailvalid', emailData);
  return response.data;
};

// 계정 검증
export const postAccountnameDuplicate = async (accountname) => {
  const userAccountname = {
    user: {
      accountname: accountname,
    },
  };
  const response = await infoInstance.post(
    '/user/accountnamevalid',
    userAccountname
  );
  return response.data;
};
