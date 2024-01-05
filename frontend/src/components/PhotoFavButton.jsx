
import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isActive, setIsActive] = useState(props.isLiked || false);

  
  const handleIconClick = () => {
    setIsActive((prev) => !prev);
    // Call onToggleFavorite when the icon is clicked
    if (props.onToggle) {
      props.onToggle();
    }
  };

  return (
    <div className={`photo-list__fav-icon ${isActive ? 'active' : ''}`} onClick={handleIconClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isActive} displayAlert={props.displayAlert} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
