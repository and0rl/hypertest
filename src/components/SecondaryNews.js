import React, { Component } from "react";

class SecondaryNews extends Component {
  render() {
    return (
      <div>
        {this.props.newsData.map(item => (
          <div key={item.id} className="ddd">
            <h3>{item.title}</h3>
            <img src={item.thumbnailUrl} alt={item.id} />
          </div>
        ))}
      </div>
    );
  }
}

export default SecondaryNews;
