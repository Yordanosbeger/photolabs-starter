// App.jsx

import React from 'react';
//import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';

const App = () => {
 

  // Repeat the data to create three instances
  //const repeatedDataList = Array(3).fill(sampleDataList[0]);

  return (
    <div className="App">
     {/*repeatedDataList.map((data, index) => (
        <PhotoListItem
          key={index}  // Use a unique key for each instance
          id={data.id}
          location={data.location}
          imageSource={data.imageSource}
          username={data.username}
          profile={data.profile}
          liked={data.liked}  // Pass the liked prop if needed
        />
        
     ))*/}
     <TopNavigation/>
     
      <PhotoFavButton/>
      <PhotoList/>
    
      
    </div>
  );
};

export default App;
