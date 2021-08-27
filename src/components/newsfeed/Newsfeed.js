import React from 'react';
import './Newsfeed.scss';
import Share from '../share/Share';
import Posts from '../posts/Posts';

const Newsfeed = ({ user }) => {
  return (
    <div className="newsfeed">
        <Share user={user} />
        <Posts /> 
    </div>
  );
}


export default Newsfeed;