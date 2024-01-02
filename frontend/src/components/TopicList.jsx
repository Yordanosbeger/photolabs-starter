import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const topics = [
  {
    "id": "1",
    "slug": "topic-1",
    "title": "Nature"
  },  
  {
    "id": "2",
    "slug": "topic-2",
    "title": "Travel"
  },
  {
    "id": "3",
    "slug": "topic-3",
    "title": "People"
  },
  {
    "id": "4",
    "slug": "topic-4",
    "title": "Fashion"
  },  
  {
    "id": "5",
    "slug": "topic-5",
    "title": "Animals"
  }
];



const TopicList = ({ topics}) => {
  if (!topics) {
    return null;
  }
  return (
    <div className="top-nav-bar__topic-list">
      
        {topics.map((topic) => (
          <TopicListItem key={topic.id} slug={topic.slug} />
        ))}
        
      
    </div>
  );
};

export default TopicList;
