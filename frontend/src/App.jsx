// App.jsx
import './App.scss';
import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const { state, actions } = useApplicationData();
console.log(state);
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onToggleFavorite={actions.updateFavPhotoIds}  
        favoritePhotos={state.favoritePhotos}
        openModal={actions.openModal}
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
