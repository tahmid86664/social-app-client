import React from "react";
import "./Newsfeed.scss";
import Share from "../share/Share";
import Posts from "../posts/Posts";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Newsfeed = ({ user, profile }) => {
  const { user: currentUser } = useContext(AuthContext);
  return (
    <div className="newsfeed">
      {currentUser && <Share />}
      {profile ? <Posts user={user} profile /> : <Posts user={user} />}
    </div>
  );
};

export default Newsfeed;
