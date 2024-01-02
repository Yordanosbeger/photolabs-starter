// PhotoListItem.jsx

import React, { useState } from 'react';
import 'styles/PhotoListItem.scss'
import PhotoFavButton from './PhotoFavButton';
import FavBadge from './FavBadge';
import FavIcon from './FavIcon';
const PhotoListItem = (props) => {
 
 

  //   return (
      
  //       <div className="photo-list__item" >
          
  //         <PhotoFavButton/>
          
          
  //         <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />
  //         <div className="user-info">
  //           <img className="photo-list__user-profile" src={profile} alt={`Profile of ${username}`} />
  //           <div className="user-details">
  //             <p className="username">{username}</p>
  //             <p className="location">{location.city}, {location.country}</p>
  //           </div>
  //         </div>
          
  //       </div>
        
  //     );
  // };
  const handleClick = () =>{
    props.setSelectedPhoto({...props});
  }
  
    return (
      <div  >
  <section className="photo-list__user-info ">
          <div className="photo-list__item">
            <PhotoFavButton
              isLiked={props.isLiked}
              toggleFav={() => props.toggleFav(props.id)}
            />
            <img className="photo-list__image" src={props.full} onClick={handleClick}/>
  
            <div className="photo-list__user-details">
  
              <img className="photo-list__user-profile" src={props.profile} />
              <div>
                <p>{props.username}</p>
                <p className="photo-list__user-location">
                  {props.city}
                  {','}
                  {props.country}</p>
  
              </div>
            </div>
          </div>
        </section>
      </div>
  
    );
  };
  
  
export default PhotoListItem;
