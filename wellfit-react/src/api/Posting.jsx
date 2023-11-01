import { authInstance } from './instance';

export const uploadPost = async (content, image) => {
  try {
    const { data } = await authInstance.post('/post', {
      post: { content, image },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
