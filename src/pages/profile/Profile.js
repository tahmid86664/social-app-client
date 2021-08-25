import React, { useState } from 'react';
import './Profile.scss';
import Topbar from '../../components/topbar/Topbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Newsfeed from '../../components/newsfeed/Newsfeed';
import Rightbar from '../../components/rightbar/Rightbar';
import { users } from '../../mockData';

const Profile = () => {
  const [user] = useState(users.filter(user => user.isLogin)[0]);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="profile">
      <Topbar />
      <div className="profile__body">
        <Leftbar />
        <div className="profile__right">
          <div className="profile__rightTop">
            <div className="profile__topImages">
              <img src="/assets/post/1.jpeg" alt="" className="profile__coverImg" />
              <img src={publicFolder + user.imgUrl} alt="" className="profile__profileImg" />
            </div>
            <div className="profile__userInfo">
              <h4>{user.name}</h4>
              <span className="profile__userDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profile__rightBottom">
            <Newsfeed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Profile;