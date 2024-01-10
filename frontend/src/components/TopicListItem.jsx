import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({  title, onClick, id }) => {
  return (
      <div className="topic-list__item">
        <a className="topic-list__link" key={id}  onClick={onClick}>
          <span>{title}</span>
          
        </a>
      </div>
    );
    };

export default TopicListItem;
