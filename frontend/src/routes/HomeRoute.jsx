import React from 'react';
// //import photos from 'mocks/photos';
import '../styles/HomeRoute.scss';
// //import TopicList from 'components/TopicList';
// import PhotoList from 'components/PhotoList';
 import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
// //import FavBadge from 'components/FavBadge';

 const HomeRoute = ({photos,topics}) => { 
  
 


     
  
   
  
    return (
      <div className="home-route">
       <TopNavigation topics={topics}/>
       <PhotoList photos={photos} />
       
      
      </div>
      
   
    
    )

 
  
  };

 export default HomeRoute;
