import React from "react";
import "./Newsfeed.scss";
import Share from "../share/Share";
import Posts from "../posts/Posts";

const Newsfeed = ({ user, profile }) => {
  return (
    <div className="newsfeed">
      <Share user={user} />
      {profile ? <Posts user={user} profile /> : <Posts user={user} />}
    </div>
  );
};

export default Newsfeed;
