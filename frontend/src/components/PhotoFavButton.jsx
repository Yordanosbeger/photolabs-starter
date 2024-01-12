
import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
//displayAlert={props.displayAlert}
function PhotoFavButton(props) {
  return (
  <div className="photo-list__fav-icon" onClick={props.onToggle}>
    <div className="photo-list__fav-icon-svg">

      <FavIcon
        selected={props.isLiked} 
      />
    </div>
  </div>
);
}

export default PhotoFavButton;
