import React from "react";
import "./Topbar.scss";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
// import { users } from '../../mockData';
import { Link } from "react-router-dom";

const Topbar = ({ user }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbar">
      {!user ? (
        <div className="topbar__loginForm">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="topbarLeft">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="topbarLogo">Friendlyyy</span>
            </Link>
          </div>
          <div className="topbarCenter">
            <div className="searchbar">
              <Search className="searchbarIcon" />
              <input
                className="searchbarInput"
                type="text"
                placeholder="Search here..."
              />
            </div>
          </div>
          <div className="topbarRight">
            <div className="topbarLinks">
              <span className="topbarLink">Home</span>
              <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
              <div className="topbarIcon">
                <Person />
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIcon">
                <Chat />
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIcon">
                <Notifications />
                <span className="topbarIconBadge">1</span>
              </div>
            </div>
            <Link
              to={`/user/${user.username}`}
              style={{ textDecoration: "none" }}
            >
              <img
                className="topbarProfileImg"
                src={
                  user.profilePicture !== ""
                    ? publicFolder + user.profilePicture
                    : publicFolder + "no-image.png"
                }
                alt="profile"
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Topbar;
