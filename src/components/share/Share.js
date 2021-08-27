import React from 'react';
import './Share.scss';
import { PermMedia, Loyalty, LocationOn, EmojiEmotions } from '@material-ui/icons';
import { users } from '../../mockData';

const Share = ({ user }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(user)
  return (
    <div className="share">
      <div className="share__wrapper">
        <div className="share__top">
          <img src={user ? publicFolder + user.profilePicture : publicFolder + 'no-image.png'} alt="profile img on share tab" className="share__profileImg" />
          <input type="text" className="share__input" placeholder="What's on your mind Lisa?" />
        </div>
        <hr />
        <div className="share__bottom">
          <div className="share__options">
            <div className="share__option">
              <PermMedia htmlColor="blue" />
              <span className="share__optionText">Photo or Video</span>
            </div>
            <div className="share__option">
              <Loyalty htmlColor="red" />
              <span className="share__optionText">Tag</span>
            </div>
            <div className="share__option">
              <LocationOn htmlColor="green" />
              <span className="share__optionText">Location</span>
            </div>
            <div className="share__option">
              <EmojiEmotions htmlColor="#f2a500" />
              <span className="share__optionText">Feelings</span>
            </div>
          </div>
          <button className="share__button">Share</button>
        </div>
      </div>
    </div>
  );
}


export default Share;