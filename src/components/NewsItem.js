import React, { Component } from "react";

export class NewsItem extends Component {
  getGMTTime = (dateString) => {
    let dateObj = new Date(dateString);
    return dateObj.toGMTString();
  };

  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:'90%'}}>{source}</span>
            </h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} at {this.getGMTTime(publishedAt)}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
