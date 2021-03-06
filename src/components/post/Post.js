import React, { useState, useEffect } from "react";
import "./Post.scss";
import { MoreVert } from "@material-ui/icons";
import ReactEmoji from "react-emoji";
// import { users } from '../../mockData';
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Post = ({
  id,
  postUserId,
  postUserTimestamp,
  postImg,
  postText,
  postLikes,
  postCommentCount,
}) => {
  const [likes, setLikes] = useState(postLikes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(postLikes.includes(currentUser._id));
  }, [currentUser._id, postLikes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${postUserId}`);
      setUser(res.data);
      // console.log(res)
    };

    fetchUser();
  }, [postUserId]);

  const likeHandler = () => {
    try {
      axios.put(`/posts/${id}/like`, { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__topLeft">
            <Link to={`/user/${user.username}`}>
              <img
                src={
                  user.profilePicture === ""
                    ? `${publicFolder}no-image.png`
                    : publicFolder + user.profilePicture || ""
                }
                alt="post top profile img"
                className="post__topImg"
              />
            </Link>
            <span className="post__topLeftUsername">{user.username}</span>
            <span className="post__topLeftTimestamp">
              {format(postUserTimestamp)}
            </span>
          </div>
          <div className="post__topRight">
            <MoreVert />
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">{ReactEmoji.emojify(postText)}</span>
          <img src={postImg} alt="post img" className="post__image" />
        </div>
        <div className="post__bottom">
          <div className="post__bottomLeft">
            <img
              src="/assets/like.png"
              alt="like button"
              className="post__likeButton"
              onClick={likeHandler}
            />
            <img
              src="/assets/heart.png"
              alt="like button"
              className="post__likeButton"
              onClick={likeHandler}
            />
            <span className="post__bottomLikeCount">
              {isLiked
                ? likes > 1
                  ? `You and ${likes - 1} people react it`
                  : "You react it"
                : `Total ${likes} people react it`}
            </span>
          </div>
          <div className="post__bottomRight">
            <span className="post__bottomCommentCount">5 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
