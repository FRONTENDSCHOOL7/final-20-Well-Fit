import { authInstance } from './instance';

export const postAddProduct = async (product) => {
  try {
    const response = await authInstance.post('/product', { product });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
