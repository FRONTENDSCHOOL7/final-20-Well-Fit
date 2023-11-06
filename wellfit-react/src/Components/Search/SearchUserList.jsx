import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { getSearchList } from '../../api/GETSearch';
import SearchUserItem from './SearchUserItem';
import Loading from '../common/Loading/Loading';

export default function SearchUserList({ keyword }) {
  const [searchList, setSearchList] = useState(null);

  console.log(keyword);
  useEffect(() => {
    const getUserList = async () => {
      console.log(keyword === '');
      if (keyword === '') {
        setSearchList(null);
        return;
      }

      try {
        const userList = await getSearchList(keyword);

        console.log(userList);
        setSearchList(userList);
      } catch (error) {
        console.error();
      }
    };
    getUserList();
  }, [keyword]);

  const searchUserList = () => {
    // 검색어가 없을 경우
    if (keyword === '') {
      return <div>유저를 검색해보세요!!</div>;
    }
    // 검색결과를 기다리는 페이지
    if (!searchList) {
      return <Loading />;
    }
    return searchList.map((user) => {
      return <SearchUserItem user={user} key={user._id} keyword={keyword} />;
    });
  };

  const renderUserList = searchUserList();

  return <ol>{renderUserList}</ol>;
}
