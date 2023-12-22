import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = ({slug}) => {
  return (
    <div className="topic-list__item">
      
      <span className= 'topic-list__item span'>{slug}</span>
    </div>
  );
};

export default TopicListItem;
