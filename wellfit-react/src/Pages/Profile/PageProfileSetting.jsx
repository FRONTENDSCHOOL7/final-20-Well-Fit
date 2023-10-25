import React from 'react';
import styled from 'styled-components';
import Input from '../../Components/Input/Input';

const StyledProfileWrap = styled.div`
  display: flex;
  flex-direction: column;

  & .main-profile {
    margin: 0 auto;
  }
  & .main-profile h1 {
    text-align: center;
    font-size: 24px;
    padding-top: 30px;
  }

  & .main-profile p {
    text-align: center;
    font-size: 14px;
    margin-top: 12px;
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
    background: url(../../../images/upload-file.svg) no-repeat center / 36px
      36px;
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
  & .btn-login {
    color: #fff;
    width: 322px;
    height: 44px;
    padding: 13px 0;
    border-radius: 44px;
    font-size: 14px;
    background-color: #97b2de;
  }
`;

export default function PageProfileSetting() {
  return (
    <StyledProfileWrap>
      <main className="main-profile">
        <h1>프로필 설정</h1>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
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
          <button className="btn-login">설정 완료</button>
        </form>
      </main>
    </StyledProfileWrap>
  );
}
