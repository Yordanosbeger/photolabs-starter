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

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onToggleFavorite={actions.toggleFavorite}
        favoritePhotos={state.favoritePhotos}
        openModal={actions.openModal}
      />

      {state.isModalOpen && (
        <PhotoDetailsModal
          closeModal={actions.closeModal}
          selectedPhoto={state.selectedPhoto}
          favoritePhotos={state.favoritePhotos}
          onToggleFavorite={actions.toggleFavorite}
        />
      )}
    </div>
  );
};

export default App;
