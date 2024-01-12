import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, fetchPhotosByTopic }) => {
  if (!topics) {
    return null;
  }
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} title={topic.title} onClick={(e) => {
          e.preventDefault()
          fetchPhotosByTopic(topic.id)
        }
        }
        />
      ))}
    </div>
  );
};

export default TopicList;
