import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, onToggleFavorite, favoritePhotos, openModal }) => {

  const handleToggleFavorite = (photoId) => {
    onToggleFavorite(photoId);
  };

  const handlePhotoClick = (photo) => {
    openModal(photo);
  };

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem onClick={() => handlePhotoClick(photo)}
          key={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.name}
          profile={photo.user.profile}
          favoritePhotos={favoritePhotos}
          isFavorite={favoritePhotos.includes(photo.id)}
          onToggleFavorite={() => handleToggleFavorite(photo.id)}
        />
      ))}
    </ul>
  )
};

export default PhotoList;
