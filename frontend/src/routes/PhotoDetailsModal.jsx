import React from 'react';
import PhotoList from 'components/PhotoList';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
//import PhotoList from 'components/PhotoList';
//import PhotoFavButton from 'components/PhotoFavButton';
const PhotoDetailsModal = ({ closeModal, likedPhotos, selectedPhoto }) => {
  console.log(selectedPhoto);
  if (!selectedPhoto) {
    return null; // Render nothing if no photo is selected
  }
  const {
    urls: { full: photoUrl },
    user: { username, name, profile },
    location: { city, country },
  } = selectedPhoto;

  const handleToggleFavorite = () => {
    toggleFav(selectedPhoto.id);
  };
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Add your modal content here */}
      
      <div className="photo-details-modal__images">
        <img src={photoUrl} alt="larger version of the clicked photo" />
        <div className="photo-details-modal__header">{/* Add header content here */}</div>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={profile} alt="photographer profile" />
          <div className="photo-details-modal__photographer-info">
            <div>{username}</div>
            <div className="photo-details-modal__photographer-location">
              {city}, {country}
            </div>
          </div>
        
        {/* Add more content as needed */}
        <h2 className="photo-details-modal__header">Similar Photos</h2>
         
      
      
    </div>
      </div>
      </div>
    
  );

  
}


export default PhotoDetailsModal;
