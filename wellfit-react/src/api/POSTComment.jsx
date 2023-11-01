import { authInstance } from './instance';

export const postComment = async (postId, comment) => {
  const POST_COMMENT_URL = `post/${postId}/comments`;

  try {
    const commentContent = {
      comment: {
        content: comment,
      },
    };
    const response = await authInstance.post(POST_COMMENT_URL, commentContent);
    console.log(response);
  } catch (error) {}
};
