import React from 'react';
import './OnlineFriends.scss';

const OnlineFriends = ({ user }) => {
  return (
    <li className="rightbar__onlineFriend">
      <div className="rightbar__onlineFriendImgContainer">
        <img src={user.imgUrl} alt="online frind img" className="onlineFriendImg" />
        <span className="rightbar__onlineBadge"></span>
      </div>
      <span className="rightbar__onlineFriendUsername">{user.name}</span>
    </li>
  );
}


export default OnlineFriends;