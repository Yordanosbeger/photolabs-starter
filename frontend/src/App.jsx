// App.jsx
import React, { useState } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
const App = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

 
  const openModal = (photoData) => {
    setSelectedPhoto(photoData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };
  

  return (
    <div className="App">
    
     
      <TopNavigation />
    <HomeRoute openModal={openModal} />
    {isModalOpen && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto}/>}
  
  </div>
);

  
};

export default App;
