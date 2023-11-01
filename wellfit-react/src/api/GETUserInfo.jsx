import { tokenInstance } from './instance';

// 내 프로필 정보 받아오기
const MY_INFO_URL = 'user/myinfo';

export const getUserInfo = async () => {
  try {
    const response = await tokenInstance.get(MY_INFO_URL);
    if (response.status === 404) {
      throw new Error('404 에러');
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
