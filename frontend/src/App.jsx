// App.jsx
import React from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';
const App = () => {
  
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);

 
  // const openModal = (photoData) => {
  //   setSelectedPhoto(photoData);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedPhoto(null);
  // };
  
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();


  return (
    <div className="App">
    
     
      
    {/* <HomeRoute openModal={openModal} />
    {isModalOpen && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto}/>} */}
   <HomeRoute
        openModal={setPhotoSelected} // Pass setPhotoSelected as a prop to HomeRoute
      />
      {state.selectedPhoto && (
        <PhotoDetailsModal
          closeModal={onClosePhotoDetailsModal}
          selectedPhoto={state.selectedPhoto}
          likedPhotos={state.likedPhotos}
          toggleFav={updateToFavPhotoIds}
        />
      )}
  </div>
);

  
};

export default App;
