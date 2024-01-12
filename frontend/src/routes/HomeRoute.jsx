import '../styles/HomeRoute.scss';
import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = ({ photos, topics,onToggleFavorite,favoritePhotos,fetchPhotosByTopic,openModal }) => { 
     return (
      <div className="home-route">
        <TopNavigationBar topics={topics} hasFavoritePhotos={favoritePhotos.length>0} fetchPhotosByTopic={fetchPhotosByTopic}/>
       <PhotoList 
       photos={photos} 
       onToggleFavorite={onToggleFavorite} 
       favoritePhotos={favoritePhotos}
       openModal={openModal}
       fetchPhotosByTopic={fetchPhotosByTopic}
       
       />

       
      </div>
      
   )

 };

 export default HomeRoute;
