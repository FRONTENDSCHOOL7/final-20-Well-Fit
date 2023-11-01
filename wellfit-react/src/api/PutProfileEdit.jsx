import { authInstance } from './instance';

export const putProfileEdit = async (user) => {
  try {
    const response = await authInstance.get('/user/myinfo');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
