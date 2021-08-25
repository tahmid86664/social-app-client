import React from 'react';
import './CloseFriends.scss';

const CloseFriends = ({ user }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li key={user.id} className="leftbar__friend">
      <img src={publicFolder + user.imgUrl} 
        alt="friend profile img" 
        className="leftbar__friendImg" 
      />
      <span className="leftbar__friendName">{user.name}</span>
    </li>
  );
}


export default CloseFriends;