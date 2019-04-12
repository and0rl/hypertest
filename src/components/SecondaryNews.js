// @flow
import React from "react";

type NewsData = {
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
};
type Props = {
  newsData: Array<NewsData>
};

export const SecondaryNews = (props: Props) => (
  <div className="secondary-news">
    {props.newsData.map(item => (
      <div key={item.id} className="secondary-news-box">
        <img src={item.thumbnailUrl} alt={item.id} />
        <h3>{item.title}</h3>
      </div>
    ))}
  </div>
);
