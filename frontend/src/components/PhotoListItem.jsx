// PhotoListItem.jsx
import React from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile,  } = props;

  return (
    <div className="photo-list__item">
       <PhotoFavButton isLiked={false}  displayAlert={true}/>

      {/* Displaying photo details using props */}
      <p> {id}</p>
      
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info"> <span>{username}</span></div>
        <div className="photo-list__user-location">{`${location.city}, ${location.country}`}
      </div>
      </div>
      
      
    </div>
  );
};


export default PhotoListItem;
