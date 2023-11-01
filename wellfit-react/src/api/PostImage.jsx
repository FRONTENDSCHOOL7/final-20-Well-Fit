import { imgInstance } from './instance';

export const uploadImages = async (files) => {
  const form = document.createElement('form');
  const formData = new FormData(form);
  for (let i = 0; i < files.length; i++) {
    formData.append('image', files[i]);
  }
  try {
    const { data } = await imgInstance.post('/image/uploadfiles', formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
