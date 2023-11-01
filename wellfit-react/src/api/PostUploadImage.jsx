import { imgInstance } from './instance';

export const postUploadImage = async (FormData) => {
  try {
    const response = await imgInstance.post('/image/uploadfile', FormData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
