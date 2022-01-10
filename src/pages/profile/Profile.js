import React, { useEffect, useState } from "react";
import "./Profile.scss";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Newsfeed from "../../components/newsfeed/Newsfeed";
import Rightbar from "../../components/rightbar/Rightbar";
// import { users } from '../../mockData';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Profile = () => {
  // const [user] = useState(users.filter(user => user.isLogin)[0]);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const [profileUser, setProfileUser] = useState({});
  let username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setProfileUser(res.data);
      // console.log(res.data)
      // console.log(profileUser);
    };

    fetchUser();
  }, [username]);
  return (
    <div className="profile">
      {profileUser && (
        <>
          <Topbar user={user} />
          <div className="profile__body">
            <Leftbar />
            <div className="profile__right">
              <div className="profile__rightTop">
                <div className="profile__topImages">
                  <img
                    src="/assets/post/1.jpeg"
                    alt=""
                    className="profile__coverImg"
                  />
                  <img
                    src={
                      publicFolder +
                      (profileUser.profilePicture === ""
                        ? "no-image.png"
                        : profileUser.profilePicture)
                    }
                    alt=""
                    className="profile__profileImg"
                  />
                </div>
                <div className="profile__userInfo">
                  <h4>{profileUser.username}</h4>
                  <span className="profile__userDesc">{profileUser.desc}</span>
                </div>
              </div>
              <div className="profile__rightBottom">
                <Newsfeed profile user={profileUser} />
                <Rightbar profile user={profileUser} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
