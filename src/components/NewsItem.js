import React from "react";

const NewsItem =(props)=> {
  const getGMTTime = (dateString) => {
    let dateObj = new Date(dateString);
    return dateObj.toGMTString();
  };

    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;
    return (
      <div className="my-3">
        <div className="card">
            <div className="position-absolute" style={{display:"flex",right:0,justifyContent:"flex-end"}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} at {getGMTTime(publishedAt)}
            </small>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
