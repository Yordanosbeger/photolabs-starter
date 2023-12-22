// App.jsx

import React from 'react';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';

const App = () => {
  const sampleDataList = [
    {
      id: "1",
      location: {
        city: "Montreal",
        country: "Canada",
      },
      imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
      username: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
      liked: true,  // Add a liked property if needed
    }
  ];

  // Repeat the data to create three instances
  const repeatedDataList = Array(3).fill(sampleDataList[0]);

  return (
    <div className="App">
      {repeatedDataList.map((data, index) => (
        <PhotoListItem
          key={index}  // Use a unique key for each instance
          id={data.id}
          location={data.location}
          imageSource={data.imageSource}
          username={data.username}
          profile={data.profile}
          liked={data.liked}  // Pass the liked prop if needed
        />
        
      ))}
      <PhotoFavButton/>
    </div>
  );
};

export default App;
