import React from 'react';
import styled from 'styled-components';
import StyledProfileHeader from './ProfileHeader';
import Input from '../../Components/Input/Input';

const StyledProfileWrap = styled.div`
  display: flex;
  flex-direction: column;

  & .main-profile {
    margin: 0 auto;
  }
  & .img-profile {
    display: block;
    position: relative;
    margin: 30px auto 30px;
    width: 110px;
    height: 110px;
  }
  & .img-profile::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 36px;
    height: 36px;
    background: url(./images/upload-file.svg) no-repeat center / 36px 36px;
  }
  & .inp-imgfile {
    position: absolute;
    width: 1px;
    height: 1px;
  }
  & .div-op {
    display: flex;
    flex-direction: column;
    width: 322px;
    margin-bottom: 30px;
  }
  & .div-op select {
    padding: 10px;
    font-size: 12px;
  }
`;

export default function PageProfileModification() {
  return (
    <>
      <StyledProfileHeader />
      <StyledProfileWrap>
        <main className="main-profile">
          <h1 className="a11y-hidden">프로필 설정</h1>
          <form>
            <div>
              <label className="img-profile" htmlFor="upload-img">
                <img
                  src="../../../../images/basic-profile.svg"
                  alt="기본 프로필"
                />
              </label>
              <input className="inp-imgfile" id="upload-img" type="file" />
            </div>
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <div className="div-op">
              <select>
                <option>나이</option>
                <option>10대 이상</option>
                <option>20대 이상</option>
                <option>30대 이상</option>
                <option>40대 이상</option>
                <option>50대 이상</option>
                <option>60대 이상</option>
              </select>
            </div>
          </form>
        </main>
      </StyledProfileWrap>
    </>
  );
}
