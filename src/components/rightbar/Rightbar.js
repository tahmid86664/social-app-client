import React from 'react';
import './Rightbar.scss';
import HomeRightbar from '../home_rightbar/HomeRightbar';
import ProfileRightbar from '../profile_rightbar/ProfileRightbar';

const Rightbar = ({ profile, user }) => {
  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
        {
          profile ? (
            <ProfileRightbar user={user} />
          ) : (
            <HomeRightbar />
          )
        }
      </div>
    </div>
  );
}


export default Rightbar;