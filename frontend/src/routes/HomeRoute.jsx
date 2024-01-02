import React from 'react';
import photos from 'mocks/photos';
import '../styles/HomeRoute.scss';
//import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
//import FavBadge from 'components/FavBadge';

const HomeRoute = ({ openModal }) => { 
  


    const handleHomeClick = (selectedPhoto) => {
      
  
    
      openModal(selectedPhoto);
    };
  
   
  
    return (
      <div className="home-route">
       
      <PhotoList  onPhotoClick={handleHomeClick}/>
        <button onClick={handleHomeClick}>Open Modal</button>
      </div>
   
    );

 
  
 };

export default HomeRoute;
