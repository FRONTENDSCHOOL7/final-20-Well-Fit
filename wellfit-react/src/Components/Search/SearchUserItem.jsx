import React from 'react';
import { styled } from 'styled-components';
import profileImg from '../../images/basic-profile-small.svg';
import { useNavigate } from 'react-router-dom';

const StyledSearchUserItem = styled.li`
  & + li {
    margin-top: 16px;
  }
  & .search-result {
    display: flex;
    /* 여기서 이미지가 살짝 뜨는 문제 물어보기 */
    align-items: center;
    gap: 12px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    cursor: pointer;
  }
  & .user-followers {
    float: right;
  }
  & .img-profile img {
    width: 42px;
    height: 42px;
    background-color: #dbdbdb;
    border-radius: 50%;
  }
  & .user-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
    vertical-align: baseline;
  }
  & .user-info .user-email {
    font-size: 12px;
    color: #767676;
  }
  & strong {
    color: red;
  }
`;

export default function SearchUserItem({ user, keyword }) {
  const navigate = useNavigate();
  const goProfile = () => {
    navigate(`/userProfile/${user.accountname}`);
  };
  const parts = user.username.split(new RegExp(`(${keyword})`, 'gi'));
  return (
    <StyledSearchUserItem>
      <article className="search-result" onClick={goProfile}>
        <h3 className="a11y-hidden">검색된 유저</h3>
        <div className="img-profile">
          <img src={profileImg} alt="프로필 사진" />
        </div>
        <div className="user-info">
          <p className="user-name">
            {parts.map((part, idx) =>
              part.toLowerCase() === keyword.toLowerCase() ? (
                <strong key={idx}>{part}</strong>
              ) : (
                part
              )
            )}
          </p>
          <p className="user-email">&#64; {user.accountname}</p>
        </div>
        <p className="user-followers">팔로워 : {user.followerCount}</p>
      </article>
    </StyledSearchUserItem>
  );
}
