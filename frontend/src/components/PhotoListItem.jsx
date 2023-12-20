import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list-item">
      {/* Your component code goes here */}
      <img src={imageSource} alt={`Photo by ${username}`} />
      <div>
        <p>{username}</p>
        <p>{location.city}, {location.country}</p>
      </div>
    </div>
  );
}

export default PhotoListItem;
