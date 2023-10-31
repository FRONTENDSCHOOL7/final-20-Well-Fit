import { tokenInstance } from './instance';
import { getMyInfo } from './PostMyInfo';

export const getMyFollowList = async () => {
  const MY_INFO = await getMyInfo();
  const FOLLOW_LIST_URL = `profile/${MY_INFO.user.accountname}/following`;

  try {
    const response = await tokenInstance.get(FOLLOW_LIST_URL);
    if (response.data.status === 404 || response.status === 404) {
      throw new Error('404 에러');
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
