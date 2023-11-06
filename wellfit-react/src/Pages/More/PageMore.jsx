import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalUserList from '../../Components/common/Modal/ModalUserList';
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

export default function PageMore() {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([
    { id: 1, text: '물 많이 마시기', isEditing: false },
    { id: 2, text: '걷기', isEditing: false },
    { id: 3, text: '뛰기', isEditing: false },
  ]);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    // 매일 자정에 이 함수가 호출되도록 타이머를 설정합니다.
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000 * 60 * 60 * 24); // 24시간마다

    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => {
      clearInterval(timer);
    };
  }, []);

  // 요일을 한글로 변환하는 함수
  const getKoreanDayOfWeek = (date) => {
    const days = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];
    return days[date.getDay()];
  };

  const handleDoubleClick = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const handleEditChange = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const handleSave = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: false } : task
      )
    );
  };

  const handleModalClick = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <MainHeader isModal={isModal} onModalClick={handleModalClick} />
      <StyledPageMore>
        <h1 className="a11y-hidden">더보기</h1>
        <section className="section-widget">
          <div className="container">
            <div className="today">
              <div className="calendar">
                <strong>{date.getDate()}</strong>
                <p>{getKoreanDayOfWeek(date)}</p>
              </div>
              <div>
                <p>To Do List</p>
                <ul>
                  {tasks.map((task) => (
                    <li
                      key={task.id}
                      onDoubleClick={() => handleDoubleClick(task.id)}
                    >
                      {task.isEditing ? (
                        <input
                          className="inp-list"
                          type="text"
                          value={task.text}
                          onChange={(e) =>
                            handleEditChange(task.id, e.target.value)
                          }
                          onBlur={() => handleSave(task.id)}
                        />
                      ) : (
                        task.text
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <MoreSmallWidget src={Music} alt="음악" text="음악추천" />
            <MoreSmallWidget src={Calorie} alt="칼로리" text="칼로리 계산" />
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
        <section className="section-category">
          <h2>카테고리</h2>
          <div className="category">
            <MoreCategory src={Location} alt="위치" text="위치찾기" />
            <MoreCategory src={Tip} alt="꿀팁" text="꿀팁" />
            <MoreCategory src={Partner} alt="파트너" text="파트너 구하기" />
            <MoreCategory src={Challenge} alt="도전" text="목표설정" />
            <MoreCategory src={Store} alt="상점" text="상점" />
            <MoreCategory src={Check} alt="출석체크" text="출석체크" />
          </div>
        </section>
      </StyledPageMore>
      {isModal && (
        <>
          <StyledOverlay onClick={handleModalClick} />
          <ModalUserList isModal={isModal} />
        </>
      )}
      <Footer />
    </>
  );
}

const StyledPageMore = styled.main`
  width: 390px;
  height: 732px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  & .inp-list {
    background-color: #dff6ff;
    border: 0;
    outline: none;
    border-bottom: 1px solid #dbdbdb;
  }

  & .inp-list:focus {
    border-bottom: 1px solid #004aad;
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
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.5);
`;
