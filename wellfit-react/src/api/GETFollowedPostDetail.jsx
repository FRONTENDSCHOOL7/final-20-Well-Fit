import { authInstance } from './instance';

export const getFollowedPostDetail = async (postId) => {
  const POST_DETAIL_URL = `post/${postId}`;

  try {
    const response = await authInstance.get(POST_DETAIL_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.data.status === 404 || response.status === 404) {
      throw new Error('404 에러');
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
