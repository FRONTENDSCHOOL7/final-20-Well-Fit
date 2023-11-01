import React, { useState } from 'react';
import PostUploadHeader from '../../Components/common/Header/PostUploadHeader';
import PostUpload from '../../Components/Profile/PostUpload';
export default function Page_Profile() {
  const [active, setActive] = useState(false);
  const [submit, setSubmit] = useState(false);
  return (
    <>
      <PostUploadHeader active={active} setSubmit={setSubmit}></PostUploadHeader>
      <PostUpload setActive={setActive} submit={submit} setSubmit={setSubmit}></PostUpload>
    </>
  );
}
