  import React from 'react';
// // import PhotoFavButton from 'components/PhotoFavButton';
 import closeSymbol from '../assets/closeSymbol.svg';
  import '../styles/PhotoDetailsModal.scss';

  const PhotoDetailsModal = ({ closeModal}) => {
// //   // if (!selectedPhoto) {
// //   //   return null; // Render nothing if no photo is selected
// //   // }

// //   // const {
// //   //   urls: { full },
// //   //   user: { username, profile },
// //   //   location: { city, country },
// //   //   similar_photos,
// //   // } = selectedPhoto;

// //   // const handleToggleFavorite = () => {
// //   //   toggleFav(selectedPhoto.id);
// //   // };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      </div>
// )
// //       <div className="photo-details-modal__fav-icon">
// //         <PhotoFavButton
// //           // isLiked={likedPhoto.includes(selectedPhoto.id)}
// //           // toggleFav={handleToggleFavorite}
// //         />
// //       </div>

// //       <div className="photo-details-modal__images">
// //         <img src={full} alt={`Photo by ${username}`} />
// //         <div className="photo-details-modal__header">
// //           {/* Add header content here */}
// //         </div>

// //         <div className="photo-details-modal__photographer-details">
// //           <img
// //             className="photo-details-modal__photographer-profile"
// //             src={profile}
// //             alt={username}
// //           />
// //           <div className="photo-details-modal__photographer-info">
// //             <div>{username}</div>
// //             <div className="photo-details-modal__photographer-location">
// //               {city}, {country}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Add more content as needed */}
// //         <h2 className="photo-details-modal__header">Similar Photos</h2>
// //         <div className="photo-details-modal__similar-photos">
// //           {/* Display similar photos here */}
// //           {similar_photos.map((photo) => (
// //             <img key={photo.id} src={photo.urls.full} alt={`Similar Photo by ${photo.user.username}`} />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
  );
  };

  export default PhotoDetailsModal;
