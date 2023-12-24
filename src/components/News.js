import React, { Component } from "react";
import NewsItem from "./NewsItem";

//Constructor->Render->ComponentDidMount .This is the order of execution

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
    // console.log("Inside News Class Constructor");
  }

  async componentDidMount() {
    console.log("Inside Component Did Mount");
    let apiUrl = "https://newsapi.org/v2/top-headlines?apiKey=e3d9358097584900842dae7d52d7906b&country=in&category=general";
    let response = await fetch(apiUrl);
    let parsedData = await response.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles});
  }

  render() {
    console.log("Inside Render");
    let defaultImageUrl="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
      <div className="container my-3">
        <h1> NewsNest- Top Headlines For You</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title!==null?element.title:" "} description={element.description!==null?element.description:" "} imageUrl={element.urlToImage!==null? element.urlToImage:defaultImageUrl} newsUrl={element.url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
