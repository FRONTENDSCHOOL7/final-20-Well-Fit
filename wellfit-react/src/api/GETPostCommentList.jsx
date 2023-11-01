import { authInstance } from './instance';

export const getPostCommentList = async (postId) => {
  const POST_COMMENT_LIST_URL = `post/${postId}/comments`;

  try {
    const response = await authInstance.get(POST_COMMENT_LIST_URL);
    if (response.data.status === 404 || response.status === 404) {
      throw new Error('404 에러');
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
