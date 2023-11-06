import { authInstance } from './instance';

export const unFollow = async (accountname) => {
  const UN_FOLLOW_URL = `profile/${accountname}/unfollow`;

  try {
    const response = await authInstance.get(UN_FOLLOW_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {}
};
