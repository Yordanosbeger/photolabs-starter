import React from 'react';

import '../styles/HomeRoute.scss';
//import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation/>
     <PhotoList />
    </div>
  );
};

export default HomeRoute;
