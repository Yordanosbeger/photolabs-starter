import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = ({slug, title }) => {
  return (
    
      <div className="topic-list__item">
        <span className="topic-list__item span">{slug} {title}</span>
      </div>
    );
  
};

export default TopicListItem;
