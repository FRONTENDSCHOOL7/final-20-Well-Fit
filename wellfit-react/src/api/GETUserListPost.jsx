import { authInstance } from './instance';

// 상대방 List Post 정보 불러오기
const USER_POST_URL = 'post';

export const getUserPost = async (accountname) => {
  try {
    const response = await authInstance.get(
      `${USER_POST_URL}/${accountname}/userpost`
    );
    if (response.status === 404) {
      throw new Error('404 에러');
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
