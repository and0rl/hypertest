import React from "react";

export const SecondaryNews = props => (
  <div>
    {props.newsData.map(item => (
      <div key={item.id} className="secondary-news">
        <img src={item.thumbnailUrl} alt={item.id} />
        <h3>{item.title}</h3>
      </div>
    ))}
  </div>
);
