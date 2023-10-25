import React from 'react';
import { styled } from 'styled-components';
import PostUploadHeader from '../../Components/Profile/PostUploadHeader';
import PostUpload from '../../Components/Profile/PostUpload';
export default function Page_Profile() {
  return (
    <>
      <PostUploadHeader></PostUploadHeader>
      <PostUpload></PostUpload>
    </>
  );
}
