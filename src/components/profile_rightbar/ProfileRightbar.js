import React from "react";
import "./ProfileRightbar.scss";
// import { users } from "../../mockData";
import { format } from "timeago.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { Add } from "@material-ui/icons";
import { Link } from "react-router-dom";

const ProfileRightbar = ({ user }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);

  const { user: currentUser, dispatch } = useContext(AuthContext);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await axios.get(`/users/${user._id}/friends`);
        setFriends(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFriends();
  }, [user._id]);

  const handleFollow = async () => {
    try {
      await axios.put(`/users/${currentUser._id}/follow`, { userId: user._id });
      dispatch({ type: "FOLLOW", payload: user._id });
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollow = async () => {
    try {
      await axios.put(`/users/${currentUser._id}/unfollow`, {
        userId: user._id,
      });
      dispatch({ type: "UNFOLLOW", payload: user._id });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profileRightbar">
      <div className="profileRightbar__infoContainer">
        {user._id !== currentUser._id &&
        !currentUser.followings.includes(user._id) ? (
          <div className="profileRightbar__followButton" onClick={handleFollow}>
            Follow <Add />
          </div>
        ) : (
          user._id !== currentUser._id &&
          currentUser.followings.includes(user._id) && (
            <div
              className="profileRightbar__followButton"
              onClick={handleUnfollow}
            >
              Unfollow
            </div>
          )
        )}

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
            <span>
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "Not set"}
            </span>
          </div>
          <div className="profileRightbar__infoItem">
            <span className="profileRightbar__infoItemKey">Join on:</span>
            <span>{format(user.createdAt)}</span>
          </div>
        </div>
      </div>
      <h4 className="profileRightbar__friendContainerTitle">Friends</h4>
      <div className="profileRightbar__friendContainer">
        {friends.map((friend) => (
          <Link to={`/user/${friend.username}`}>
            <div key={friend._id} className="profileRightbar__friend">
              <img
                src={
                  publicFolder +
                  (friend.profilePicture === ""
                    ? "no-image.png"
                    : friend.profilePicture)
                }
                alt="friend img"
                className="profileRightbar__friendImg"
              />
              <span>
                {friend.username.charAt(0).toUpperCase() +
                  friend.username.slice(1)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileRightbar;
