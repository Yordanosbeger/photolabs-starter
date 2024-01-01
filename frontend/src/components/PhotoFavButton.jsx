import React, { useCallback, useState } from 'react';
//import React from 'react';
import FavBadge from './FavBadge';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';
//import TopNavigation from './TopNavigationBar';

function PhotoFavButton() {
  const [isActive, setIsActive] = useState(false);
  const handleIconClick = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className={`photo-list__fav-icon ${isActive ? 'active' : ''}`}onClick={handleIconClick}>
      <div className="photo-list__fav-icon-svg" >
      {isActive && <span> ❤️ Liked </span>} 
      
         <FavBadge/>  
      </div>
    </div>
    /*<div className="photo-list__fav-icon" onClick={props.toggleFav}>
    <div className="photo-list__fav-icon-svg">*/

      /*<FavIcon
        selected={props.isLiked}
      />*/
    
  
  );
}

export default PhotoFavButton;