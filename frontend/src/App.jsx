import './App.scss';
import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';


const App = () => {
  const { state, actions } = useApplicationData();
  console.log(state);
 return (
    <div className="App">
      <HomeRoute
        onToggleFavorite={actions.updateFavPhotoIds}
        
        favoritePhotos={state.favoritePhotos}
        openModal={actions.openModal}
        fetchPhotosByTopic={actions.fetchPhotosByTopic}
        setPhotoData={actions.setPhotoData}
        photos={state.photoData}
        topics={state.topicData}
        
        
       />
      {state.isModalOpen && (
        <PhotoDetailsModal
          closeModal={actions.closeModal}
          selectedPhoto={state.selectedPhoto}
          favoritePhotos={state.favoritePhotos}
          onToggleFavorite={actions.updateFavPhotoIds}
          openModal={actions.openModal}
          
          
          
          />
          
      )}
      
    </div>
  );
};

export default App;

