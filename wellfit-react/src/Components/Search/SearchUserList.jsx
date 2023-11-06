import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { getSearchList } from '../../api/GETSearch';
import SearchUserItem from './SearchUserItem';

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
    if (!searchList) {
      return <div>Loading...</div>;
    }
    return searchList.map((user) => {
      return <SearchUserItem user={user} key={user._id} keyword={keyword} />;
    });
  };

  const renderUserList = searchUserList();

  return <ol>{renderUserList}</ol>;
}
