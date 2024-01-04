import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics}) => {
   if (!topics) {
     return null;
  }
  return (
    <div className="top-nav-bar__topic-list">
    {topics.map((topic) => (
      <TopicListItem key={topic.id} slug={topic.slug} title={topic.title}/>
    ))}
  </div>
  );
};

export default TopicList;
