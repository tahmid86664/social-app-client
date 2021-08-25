import React from 'react';
import './Leftbar.scss';
import { RssFeed, Chat, Theaters, Group, Event, Bookmark, Help, Work } from '@material-ui/icons';
import { users } from '../../mockData';
import CloseFriends from '../close_friends/CloseFriends';

const Leftbar = () => {  
  return (
    <div className="leftbar">
      <div className="leftbar__wrapper">
        <ul className="leftbar__list">
          <li className="leftbar__listItem">
            <RssFeed />
            <span className="leftbar__listItemText">Feed</span>
          </li>
          <li className="leftbar__listItem">
            <Chat />
            <span className="leftbar__listItemText">Chat</span>
          </li>
          <li className="leftbar__listItem">
            <Theaters />
            <span className="leftbar__listItemText">Videos</span>
          </li>
          <li className="leftbar__listItem">
            <Group />
            <span className="leftbar__listItemText">Groups</span>
          </li>
          <li className="leftbar__listItem">
            <Event />
            <span className="leftbar__listItemText">Events</span>
          </li>
          <li className="leftbar__listItem">
            <Bookmark />
            <span className="leftbar__listItemText">Bookmarks</span>
          </li>
          <li className="leftbar__listItem">
            <Work />
            <span className="leftbar__listItemText">Jobs</span>
          </li>
          <li className="leftbar__listItem">
            <Help />
            <span className="leftbar__listItemText">Help</span>
          </li>
        </ul>
        <button className="leftbar__button">Show More</button>
        <hr className="leftbar__hr" />
        <ul className="leftbar__friendList">
          {
            users.filter(user => !user.isLogin).map(user => 
              <CloseFriends key={user.id} user={user} />
            )
          }
        </ul>
      </div>
    </div>
  );
}


export default Leftbar;
