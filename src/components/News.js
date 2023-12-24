import React, { Component } from "react";
import NewsItem from "./NewsItem";

//Constructor->Render->ComponentDidMount .This is the order of execution

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalArticles:0,
      lastPage:1
    };
    this.pageSize=15;
    // console.log("Inside News Class Constructor");
  }

  async fetchDataForPage(pageNumber) {
    let apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=e3d9358097584900842dae7d52d7906b&country=in&category=general&page=${pageNumber}&pageSize=${this.pageSize}`;
    let response = await fetch(apiUrl);
    let parsedData = await response.json();
    let lastPageNum=Math.ceil(parsedData.totalResults/this.pageSize);
    console.log(parsedData);
    this.setState({
        totalArticles:parsedData.totalResults,
        articles:parsedData.articles,
        lastPage:lastPageNum
    });
  }

  async componentDidMount() {
    console.log("Inside Component Did Mount");
    this.fetchDataForPage(this.state.page);
  }

  handlePrevClick=async ()=>{
    let currentPage=this.state.page;
    if(currentPage!==1){
        this.setState({page:currentPage-1});
        this.fetchDataForPage(currentPage-1);
    }
    console.log("Inside PrevClick"+ this.state.page);
  }

  handleNextClick=async ()=>{
    let currentPage=this.state.page;
    if(currentPage+1 <= this.state.lastPage){
        this.setState({page:currentPage+1});
        this.fetchDataForPage(currentPage+1);
    }
    console.log("Inside NextClick"+ this.state.page);
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
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page===1?true:false} onClick={this.handlePrevClick} className="btn btn-primary">&laquo; Previous</button>
        <button type="button" disabled={this.state.page===this.state.lastPage?true:false} onClick={this.handleNextClick} className="btn btn-primary">Next &raquo;</button>
        </div>
      </div>
    );
  }
}

export default News;
