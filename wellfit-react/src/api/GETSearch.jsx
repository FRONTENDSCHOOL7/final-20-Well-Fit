import { authInstance } from './instance';

export const getSearchList = async (keyword) => {
  const SEARCH_URL = 'user/searchuser';

  try {
    const response = await authInstance.get(SEARCH_URL, {
      params: { keyword: keyword },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error); // 에러 출력
    throw error; // 에러 던지기
  }
};
