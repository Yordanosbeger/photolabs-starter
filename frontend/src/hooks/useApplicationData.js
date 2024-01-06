// hooks/useApplicationData.js
import { useState } from 'react';

const useApplicationData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId)
        : [...prevFavorites, photoId];
      return updatedFavorites;
    });
  };

  return {
    state: {
      isModalOpen,
      favoritePhotos,
      selectedPhoto,
    },
    actions: {
      openModal,
      closeModal,
      toggleFavorite,
    },
  };
};

export default useApplicationData;

