import React, { useEffect, useState } from 'react';
import './Profile.scss';
import Topbar from '../../components/topbar/Topbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Newsfeed from '../../components/newsfeed/Newsfeed';
import Rightbar from '../../components/rightbar/Rightbar';
// import { users } from '../../mockData';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
  // const [user] = useState(users.filter(user => user.isLogin)[0]);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
      console.log(res.data)
    }

    fetchUser();
  }, []);

  return (
    <div className="profile">
      <Topbar user={user} />
      <div className="profile__body">
        <Leftbar />
        <div className="profile__right">
          <div className="profile__rightTop">
            <div className="profile__topImages">
              <img src="/assets/post/1.jpeg" alt="" className="profile__coverImg" />
              <img src={publicFolder + user.profilePicture} alt="" className="profile__profileImg" />
            </div>
            <div className="profile__userInfo">
              <h4>{user.username}</h4>
              <span className="profile__userDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profile__rightBottom">
            <Newsfeed user={user} />
            <Rightbar profile user={user}/>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Profile;