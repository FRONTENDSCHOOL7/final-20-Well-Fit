import { authInstance } from './instance';

// Product List 가져오기
const PRODUCT_LIST = 'product';

export const getProductList = async (accountname) => {
  try {
    const response = await authInstance.get(`${PRODUCT_LIST}/${accountname}`);
    if (response.status === 404) {
      throw new Error('404 에러');
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
