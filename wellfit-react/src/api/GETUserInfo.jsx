import { authInstance } from './instance';

// 상대방 프로필 정보 받아오기
const USER_DATA_URL = 'profile';

export const getUserInfo = async (accountname) => {
  try {
    const response = await authInstance.get(`${USER_DATA_URL}/${accountname}`);
    if (response.status === 404) {
      throw new Error('404 에러');
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
