import React, { useState } from 'react';
import { styled } from 'styled-components';
import PostUploadHeader from '../../Components/Profile/PostUploadHeader';
import PostUpload from '../../Components/Profile/PostUpload';
import Footer from '../../Components/common/Footer/Footer';
export default function Page_Profile() {
  const [active, setActive] = useState(false);
  return (
    <>
      <PostUploadHeader active={active}></PostUploadHeader>
      <PostUpload setActive={setActive}></PostUpload>
      <Footer />
    </>
  );
}
