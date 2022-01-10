import React from "react";
import "./Home.scss";

import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Newsfeed from "../../components/newsfeed/Newsfeed";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = ({ user }) => {
  return (
    <div className="home">
      <Topbar user={user} />
      <div className="home__body">
        <Leftbar />
        <Newsfeed user={user} />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
