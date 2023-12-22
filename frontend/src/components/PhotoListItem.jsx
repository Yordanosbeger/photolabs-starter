// PhotoListItem.jsx
import React from 'react';
import 'styles/PhotoListItem.scss'
const PhotoListItem = ({ id, location, imageSource, username, profile,liked }) => {
  
    return (
      
        <div className="photo-list__item" >
          <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />
          <div className="user-info">
            <img className="photo-list__user-profile" src={profile} alt={`Profile of ${username}`} />
            <div className="user-details">
              <p className="username">{username}</p>
              <p className="location">{location.city}, {location.country}</p>
            </div>
          </div>
          <div className="photo-list__actions">
        {liked && <span>❤️ Liked</span>}
      </div>
        </div>
        
      );
  };

export default PhotoListItem;
