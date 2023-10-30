import React from 'react';
import styled from 'styled-components';
import MainHeader from '../../Components/common/Header/MainHeader';
import Footer from '../../Components/common/Footer/Footer';
import MoreSmallWidget from '../../Components/More/MoreSmallWidget';
import MoreCategory from '../../Components/More/MoreCategory';
import Music from '../../images/music.svg';
import Calorie from '../../images/calorie.svg';
import Leg from '../../images/leg.svg';
import Shoulder from '../../images/shoulder.svg';
import Chest from '../../images/chest.svg';
import Back from '../../images/back.svg';
import Location from '../../images/location.svg';
import Tip from '../../images/tip.svg';
import Partner from '../../images/partner.svg';
import Challenge from '../../images/challenge.svg';
import Store from '../../images/store.svg';
import Check from '../../images/check.svg';

const StyledPageMore = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  & .section-widget {
    margin-top: 24px;
  }
  & .container {
    display: grid;
    width: 344px;
    height: 370px;
    gap: 10px;
    grid-template-areas:
      'a a'
      'b c'
      'd d';
  }
  & .container > div {
    background-color: #dff6ff;
    box-shadow: 4px 4px #d9d9d9;
  }
  & .container > div:nth-child(1) {
    grid-area: a;
  }
  & .container > div:nth-child(2) {
    grid-area: b;
  }
  & .container > div:nth-child(3) {
    grid-area: c;
  }
  & .container > div:nth-child(4) {
    grid-area: d;
  }
  & .today {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  & .today strong {
    font-size: 40px;
  }
  & .today p {
    font-size: 14px;
  }
  & .today li {
    margin-top: 10px;
    font-size: 14px;
    list-style: circle;
  }
  & .calendar {
    text-align: center;
  }
  & .part {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 14px;
  }
  & .part img {
    width: 40px;
    height: 40px;
  }
  & .part-body {
    display: flex;
    gap: 40px;
  }
  & .part-body a {
    display: block;
    text-align: center;
  }
  & .section-category {
    margin: 24px 20px;
  }
  & .section-category h2 {
    font-size: 16px;
    margin-bottom: 15px;
  }
  & .category {
    display: grid;
    width: 344px;
    height: 250px;
    gap: 10px;
    grid-template-areas:
      'e f g'
      'h i j';
  }
  & .category > div {
    background-color: #dff6ff;
    box-shadow: 4px 4px #d9d9d9;
  }
  & .category > div:nth-child(1) {
    grid-area: e;
  }
  & .category > div:nth-child(2) {
    grid-area: f;
  }
  & .category > div:nth-child(3) {
    grid-area: g;
  }
  & .category > div:nth-child(4) {
    grid-area: h;
  }
  & .category > div:nth-child(5) {
    grid-area: i;
  }
  & .category > div:nth-child(6) {
    grid-area: j;
  }
`;

export default function PageMore() {
  return (
    <>
      <MainHeader />
      <StyledPageMore>
        <h1 className="a11y-hidden">더보기</h1>
        <section className="section-widget">
          <div className="container">
            <div className="today">
              <div className="calendar">
                <strong>24</strong>
                <p>화요일</p>
              </div>
              <div>
                <p>To Do List</p>
                <ul>
                  <li>물 많이 마시기</li>
                  <li>걷기</li>
                  <li>뛰기</li>
                </ul>
              </div>
            </div>
            <MoreSmallWidget src={Music} alt="음악" />
            <MoreSmallWidget src={Calorie} alt="칼로리" />
            <div className="part">
              <p>운동 부위 추천</p>
              <div className="part-body">
                <a href="">
                  <img src={Leg} alt="하체" />
                  <div>하체</div>
                </a>
                <a href="">
                  <img src={Shoulder} alt="어깨" />
                  <div>어깨</div>
                </a>
                <a href="">
                  <img src={Chest} alt="가슴" />
                  <div>가슴</div>
                </a>
                <a href="">
                  <img src={Back} alt="등" />
                  <div>등</div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="section-category">
          <h2>카테고리</h2>
          <div className="category">
            <MoreCategory src={Location} alt="위치" />
            <MoreCategory src={Tip} alt="꿀팁" />
            <MoreCategory src={Partner} alt="파트너" />
            <MoreCategory src={Challenge} alt="도전" />
            <MoreCategory src={Store} alt="상점" />
            <MoreCategory src={Check} alt="출석체크" />
          </div>
        </section>
      </StyledPageMore>
      <Footer />
    </>
  );
}
