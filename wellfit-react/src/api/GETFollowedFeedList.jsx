import { authInstance } from './instance';

export const getFollowedUserFeedList = async () => {
  const URL = 'post/feed';

  try {
    const response = await authInstance.get(URL);
    console.log(response);
    if (response.data.status === 404 || response.status === 404) {
      throw new Error('404 에러');
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
