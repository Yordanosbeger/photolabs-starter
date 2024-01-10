import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/PhotoDetailsModal.scss';
import PhotoList from 'components/PhotoList';



const PhotoDetailsModal = ({ closeModal, selectedPhoto, favoritePhotos, onToggleFavorite,openModal }) => {
  console.log(selectedPhoto);
  if (!selectedPhoto) {
    return null; // Render nothing if no photo is selected
  }

  const {
    urls: { full },
    user: { username, profile },
    location: { city, country },
    similar_photos,
  } = selectedPhoto;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div className="photo-details-modal__fav-icon">
        <PhotoFavButton
          isLiked={favoritePhotos.includes(selectedPhoto.id)}
          onToggleFavorite={() => onToggleFavorite(selectedPhoto.id)}
        />
      </div>

      <div className="photo-details-modal__images">
        <img className='photo-details-modal__image' src={full} alt={`Photo by ${username}`} />
        <div className="photo-details-modal__header">
          {/* Add header content here */}
        </div>

        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={profile}
            alt={username}
          />
          <div className="photo-details-modal__photographer-info">
            <div>{username}</div>
            <div className="photo-details-modal__photographer-location">
              {city}, {country}
            </div>
          </div>
        </div>

        <div className="photo-details-modal__similar-photos">
          <h2 className="photo-details-modal__header">Similar Photos</h2>
          <PhotoList
            photos={Object.values(similar_photos)}
            setSelectedPhoto={() => {}}
            onToggleFavorite={onToggleFavorite}
            favoritePhotos={favoritePhotos}
            openModal={openModal}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
