import { authInstance } from './instance';

export const putProfileEdit = async (user) => {
  try {
    const response = await authInstance.put('/user', { user });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
