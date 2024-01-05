// App.jsx
//import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import React, { useState } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favoritePhotos, setFavoritePhotos] = useState([]);
 // const [selectedPhoto, setSelectedPhoto] = useState(null);

   const openModal = () => {
  //   setSelectedPhoto(photo);
     setIsModalOpen(true);
   };

   const closeModal = () => {
  //   setSelectedPhoto(null);
     setIsModalOpen(false);
   };
  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(photoId)
      ? prevFavorites.filter((id) => id !== photoId)
      : [...prevFavorites, photoId];
      // console.log('Updated Favorites:', updatedFavorites);
       return updatedFavorites;
    });
  };
  
  return(
  <div className="App">
     {/* <HomeRoute photos={photos} topics={topics}/> */}
    {/* <TopNavigationBar topics={topics} hasFavoritePhotos={favoritePhotos.length > 0} />*/}
       <HomeRoute 
       photos={photos} 
       topics={topics} 
       onToggleFavorite={toggleFavorite} 
       favoritePhotos={favoritePhotos} 
       openModal={openModal}
       />
       
     
      

         {isModalOpen && <PhotoDetailsModal  closeModal={closeModal} />}

    </div>

   )
}

export default App;
