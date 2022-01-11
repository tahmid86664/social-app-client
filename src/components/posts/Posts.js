import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import "./Posts.scss";
// import { posts } from '../../mockData';
import axios from "axios";

const Posts = ({ user, profile }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (user.username) {
        const res = profile
          ? await axios.get(`/posts/profile/${user.username}`)
          : await axios.get(`/posts/timeline/${user._id}`);
        setPosts(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
            // sort the data accoring to create time
          })
        );
      }
    };

    fetchPosts();
  }, [user.username, user._id, profile]);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          postUserId={post.userId}
          postUserTimestamp={post.createdAt}
          postText={post.desc}
          postImg={post.img}
          postLikes={post.likes}
        />
      ))}
    </div>
  );
};

// postUserName={post.postUserName}
// postUserImg={post.img}
// postCommentCount={post.postCommentsCount}

export default Posts;
