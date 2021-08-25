import React, { useState, useEffect } from 'react';
import './Post.scss';
import { MoreVert } from '@material-ui/icons';
import ReactEmoji from 'react-emoji';
// import { users } from '../../mockData';
import axios from 'axios';

const Post = ({ id, postUserId, postUserTimestamp, postImg, postText, postLikes, postCommentCount }) => {
  const [likes, setLikes] = useState(postLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${postUserId}`)
      setUser(res.data);
      console.log(res)
    }
    
    fetchUser();
  }, [postUserId]);

  const likeHandler = () => {
    setLikes(isLiked ? likes-1 : likes+1);
    setIsLiked(!isLiked);
  }

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__topLeft">
            <img src={publicFolder + user.profilePicture || ""} alt="post top profile img" className="post__topImg" />
            <span className="post__topLeftUsername">{user.username}</span>
            <span className="post__topLeftTimestamp">{postUserTimestamp}</span>
          </div>
          <div className="post__topRight">
            <MoreVert />
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">{ReactEmoji.emojify(postText)}</span>
          <img src={publicFolder + postImg} alt="post img" className="post__image" />
        </div>
        <div className="post__bottom">
          <div className="post__bottomLeft">
            <img src="/assets/like.png" alt="like button" className="post__likeButton" onClick={likeHandler} />
            <img src="/assets/heart.png" alt="like button" className="post__likeButton" onClick={likeHandler} />
            <span className="post__bottomLikeCount">{likes} people {isLiked && "including you"} react it </span>
          </div>
          <div className="post__bottomRight">
            <span className="post__bottomCommentCount">5 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Post;