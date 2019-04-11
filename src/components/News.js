// @flow
import React, { Component } from "react";
import { SecondaryNews } from "./SecondaryNews";

type JsonPlace = {
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
};

type Props = {
  /* ... */
};

type State = {
  primaryNewsData: JsonPlace,
  secondaryNewsData: Array<JsonPlace>
};

class News extends Component<Props, State> {
  endPoint: string;
  constructor() {
    super();
    this.state = {
      primaryNewsData: {},
      secondaryNewsData: []
    };

    this.endPoint =
      "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5";
  }

  fetchNews() {
    (async () => {
      const response = await fetch(this.endPoint);
      const news = await response.json();

      this.setState({
        primaryNewsData: news[0],
        secondaryNewsData: news.slice(1, 5)
      });
    })();
  }

  componentDidMount() {
    this.fetchNews();
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="primary-image"
          style={{ backgroundImage: `url(${this.state.primaryNewsData.url})` }}
        />
        <div className="container-flex">
          <div className="container">
            <h2>{this.state.primaryNewsData.title} </h2>
            <SecondaryNews newsData={this.state.secondaryNewsData} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
