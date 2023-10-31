import React from 'react';
import HomeFeed from './HomeFeed';

export default function HomeFeedList({ followedUserFeedList }) {
  console.log(followedUserFeedList);

  return (
    <ol>
      {followedUserFeedList.map((post, idx) => {
        return <HomeFeed post={post} key={post.id} />;
      })}
    </ol>
  );
}
