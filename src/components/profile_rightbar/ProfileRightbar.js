import React from 'react';
import './ProfileRightbar.scss';
import { users } from '../../mockData';
import { format } from 'timeago.js';

const ProfileRightbar = ({ user }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="profileRightbar">
      <div className="profileRightbar__infoContainer">
        <h4>About</h4>
        <div className="profileRightbar__info">
          <div className="profileRightbar__infoItem">
            <span className="profileRightbar__infoItemKey">City:</span>
            <span>{user.city}</span>
          </div>
          <div className="profileRightbar__infoItem">
            <span className="profileRightbar__infoItemKey">From:</span>
            <span>{user.from}</span>
          </div>
          <div className="profileRightbar__infoItem">
            <span className="profileRightbar__infoItemKey">Relationship:</span>
            <span>{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "Not set"}</span>
          </div>
          <div className="profileRightbar__infoItem">
            <span className="profileRightbar__infoItemKey">Join on:</span>
            <span>{format(user.createdAt)}</span>
          </div>
        </div>
      </div>
      <h4 className="profileRightbar__friendContainerTitle">Friends</h4>
      <div className="profileRightbar__friendContainer">
        {
          users.filter(user => !user.isLogin).map(friend => 
            <div className="profileRightbar__friend">
              <img src={publicFolder + friend.imgUrl} alt="friend img" className="profileRightbar__friendImg" />
              <span>{friend.name}</span>
            </div>
          )
        }
      </div>
    </div>
  );
}


export default ProfileRightbar;