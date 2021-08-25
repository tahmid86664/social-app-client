import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import './Posts.scss';
// import { posts } from '../../mockData';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/6100db0c04f2663a286b0b52")
      setPosts(res.data);
      console.log(res)
    }
    
    fetchPosts();
  }, []);

  return (
    <div className="posts">
      {
        posts.map(post => 
          <Post 
            key={post._id}
            id={post._id}
            postUserId={post.userId}
            postUserTimestamp={post.createdAt}
            postText={post.desc}
            postImg={post.img}
            postLikes={post.likes}
          />
        )
      }
    </div>
  );
}

// postUserName={post.postUserName}
// postUserImg={post.img}
// postCommentCount={post.postCommentsCount}

export default Posts;