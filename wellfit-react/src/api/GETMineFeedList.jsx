import { tokenInstance } from './instance';
import { getMyInfo } from './PostMyInfo';

// 내 글 목록 가져오기
export const getMyFeedList = async () => {
  const MY_INFO = await getMyInfo();
  const MY_FEED_URL = `post/${MY_INFO.user.accountname}/userpost`;

  try {
    const response = await tokenInstance.get(MY_FEED_URL);
    if (response.data.status === 404 || response.status === 404) {
      throw new Error('404 에러');
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
