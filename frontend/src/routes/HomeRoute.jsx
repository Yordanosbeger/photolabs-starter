import React from 'react';
import photos from 'mocks/photos';
import '../styles/HomeRoute.scss';
//import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
//import FavBadge from 'components/FavBadge';

const HomeRoute = (props) => { 
  
  const {openModal,setSelectedPhoto,likedPhotos,toggleFav,photos,  topics } = props


    // const handleHomeClick = (selectedPhoto) => {
      
  
    
    //   openModal(selectedPhoto);
    // };
  
   
  
    return (
      <div className="home-route">
       {/* <TopNavigation/>
      <PhotoList  onPhotoClick={handleHomeClick}/>
        <button onClick={handleHomeClick}>Open Modal</button> */}
     
      
      <TopNavigation likedPhotos={likedPhotos} topics={topics} />
      
      <PhotoList  setSelectedPhoto={setSelectedPhoto} toggleFav={toggleFav} likedPhotos={likedPhotos} photos={photos}  openModal={openModal} />

    </div>
      
   
    );

 
  
 };

export default HomeRoute;
