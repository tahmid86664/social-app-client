import React from 'react';
import './Rightbar.scss';
import { users } from '../../mockData';
import OnlineFriends from '../online_friends/OnlineFriends';

const Rightbar = () => {
  console.log(users[0].birthdate.slice(0, 4) === new Date().toLocaleDateString().slice(0, 4))
  let birthdayPeople = users.filter(user => user.birthdate.slice(0, 4) === new Date().toLocaleDateString().slice(0, 4) && !user.isLogin);
  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
        <div className="rightbar__birthdayContainer">
          <img src="/assets/gift.png" alt="gift icon" className="birthdayImg" />
          <span className="birthdayText">
            <b>{birthdayPeople[0].name}</b> and 
            {birthdayPeople.length>2 ? (<span><b>{birthdayPeople.length-1} other friends </b> have birthday today</span>) 
              : (<span><b>{birthdayPeople[1].name}</b> have birthday today</span>)} 
          </span>
        </div>
        <div className="rightbar__ad">
          <img src="/assets/ad.png" alt="ad img" className="rightbar__adImg" />
        </div>
        <div className="rightbar__onlineFriendsContainer">
          <h4>Online Friends</h4>
          <ul className="rightbar__onlineFriendList">
            {
              users.filter(user => user.isOnline && !user.isLogin).map(user => 
                <OnlineFriends key={user.id} user={user} />
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Rightbar;