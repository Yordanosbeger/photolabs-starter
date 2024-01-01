// App.jsx
import React, { useState } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
const App = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  //console.log('Rendering App component');

 
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  return (
    <div className="App">
    
     
      <TopNavigation />
    <HomeRoute openModal={openModal} />
    {isModalOpen && <PhotoDetailsModal closeModal={closeModal}/>}
  
  </div>
);

  
};

export default App;
