import { infoInstance } from './instance';
export const PostLogin = async (email, password) => {
  try {
    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };
    const response = await infoInstance.post('/user/login', loginData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
