import React, { Component } from "react";

class SecondaryNews extends Component {
  render() {
    return (
      <div>
        <h1>SecondaryNews </h1>
        {this.props.newsData.map(item => (
          <div key={item.id} className="ddd">
            <h2>{item.title}</h2>
            <img src={item.thumbnailUrl} alt={item.id} />
          </div>
        ))}
      </div>
    );
  }
}

export default SecondaryNews;
