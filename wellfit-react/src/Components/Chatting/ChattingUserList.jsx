import React from 'react';
import ChattingUserItem from './ChattingUserItem';

export default function ChattingUserList({ myFollowList }) {
  const renderChattingUserItems = () => {
    return myFollowList.map((followedUser) => {
      return <ChattingUserItem key={followedUser._id} user={followedUser} />;
    });
  };

  if (!myFollowList) {
    return <div>Loading...</div>;
  }
  return <ol>{renderChattingUserItems()}</ol>;
}
