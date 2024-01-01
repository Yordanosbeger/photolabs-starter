import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({closeModal}) => {
  // const { full, profile, username, city, country, similarPhotos } = selectedPhoto;

  // const handleToggleFavorite = () => {
  //   toggleFav(selectedPhoto.id);
  // };

  // return (
  //   <div className="photo-details-modal">
  //     <button className="photo-details-modal__close-button">
  //       <img src={closeSymbol} alt="close symbol" onClick={closeModal} />
  //     </button>
  //   </div>
    
      
  //    );
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Add your modal content here */}
      
    </div>
  );
  
  
};

export default PhotoDetailsModal;
