import React, { useEffect, useState } from 'react';
import FollowItem from './FollowItem';
import { getMyFollowList } from '../../api/GETMyFollowList';
import Loading from '../common/Loading/Loading';

export default function FollowList() {
  const [followList, setFollowList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('getUserProfileData 실행전');
        const myFollowList = await getMyFollowList();
        console.log('나의 팔로우 리스트');
        console.log(myFollowList);
        if (myFollowList.length === 0) {
          setFollowList([]);
        }
        setFollowList(myFollowList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!followList) {
    return <Loading />;
  }
  if (followList.length === 0) {
    return <div>팔로우가 없습니다!!</div>;
  }

  return (
    <ol>
      {followList.map((user) => {
        return <FollowItem user={user} key={user._id} />;
      })}
    </ol>
  );
}
