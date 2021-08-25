import React from 'react';
import './ProfileRightbar.scss';
import { users } from '../../mockData';

const ProfileRightbar = () => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="profileRightbar">
      <div className="profileRightbar__infoContainer">
        <h4>About</h4>
        <div className="profileRightbar__info">
          <div className="profileRightbar__infoItem">
            <span className="profileRightbar__infoItemKey">City:</span>
            <span>New York</span>
          </div>
          <div className="profileRightbar__infoItem">
            <span className="profileRightbar__infoItemKey">From:</span>
            <span>London</span>
          </div>
          <div className="profileRightbar__infoItem">
            <span className="profileRightbar__infoItemKey">Relationship:</span>
            <span>Single</span>
          </div>
          <div className="profileRightbar__infoItem">
            <span className="profileRightbar__infoItemKey">Join on:</span>
            <span>7/30/2021</span>
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