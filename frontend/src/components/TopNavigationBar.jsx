import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigationBar = ({topics, hasFavoritePhotos,fetchPhotosByTopic}) => {
   return (
     <div className="top-nav-bar">
       <span className="top-nav-bar__logo">PhotoLabs</span>
       <TopicList  
       topics={topics} fetchPhotosByTopic={fetchPhotosByTopic}/>
       <FavBadge isFavPhotoExist={ hasFavoritePhotos}  />
     </div>
   )
 }
  
export default TopNavigationBar;