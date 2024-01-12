import React from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile, isFavorite, onToggleFavorite, onClick } = props;

  const handlePhotoClick = (photo) => {
    onClick(photo);
  };

  return (
    <div className="photo-list__item" >
      <PhotoFavButton isLiked={isFavorite} onToggle={onToggleFavorite} />
      <p>{id}</p>
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image" onClick={handlePhotoClick} />
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
