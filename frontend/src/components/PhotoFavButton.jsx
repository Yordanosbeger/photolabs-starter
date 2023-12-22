import React, { useCallback, useState } from 'react';

import FavBadge from './FavBadge';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isActive, setIsActive] = useState(false);
  const handleIconClick = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className={`photo-list__fav-icon ${isActive ? 'active' : ''}`}onClick={handleIconClick}>
      <div className="photo-list__fav-icon-svg" >
      {isActive && <span>❤️ Liked</span>}
       
      </div>
    </div>
  );
}

export default PhotoFavButton;