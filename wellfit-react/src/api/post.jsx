import { tokenInstance } from './instance';

// -게시글 업로드 시 my profile로 이동해서 게시글 확인 가능

export const Post = async (content, image) => {
  try {
    await tokenInstance.post('/postupload', {
      post: {
        content: String,
        image: String,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
