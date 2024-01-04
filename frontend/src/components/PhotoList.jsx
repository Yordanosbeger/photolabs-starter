// frontend/src/components/PhotoList.jsx
import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';



const PhotoList = ({photos}) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.name}
          profile={photo.user.profile}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
