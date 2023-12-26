import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

//Constructor->Render->ComponentDidMount .This is the order of execution

export class News extends Component {
  static defaultProps = {
    pageSize: 8,
    country: "in",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
  }

  async fetchDataForPage() {
    let apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=e3d9358097584900842dae7d52d7906b&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let response = await fetch(apiUrl);
    let parsedData = await response.json();
    console.log(parsedData);
    this.setState({
      totalArticles: parsedData.totalResults,
      articles: parsedData.articles,
      loading: false
    });
  }

  async componentDidMount() {
    this.fetchDataForPage();
  }

  handlePrevClick = async () => {
    //The set state method being an async one doesnt needs to be used with callback as below for the function which plans to use the updated state immediately.
    this.setState({ page: this.state.page - 1 }, () => {
      this.fetchDataForPage();
    });
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchDataForPage();
    });
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 },async ()=>{
        let apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=e3d9358097584900842dae7d52d7906b&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let response = await fetch(apiUrl);
        let parsedData = await response.json();
        console.log(parsedData);
        this.setState({
          totalArticles: parsedData.totalResults,
          articles: this.state.articles.concat(parsedData.articles),
          loading: false
        });
    });
  };

  render() {
    console.log("Inside Render");
    let defaultImageUrl = "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
      <div className="container my-3">
        <h1 className="text-center mb-3">NewsNest- Top Headlines For You</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Spinner />}
          style={{overflow:"hidden", display: "flex", flexDirection:"column"}}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          >
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title !== null ? element.title : " "}
                      description={element.description !== null ? element.description : " "}
                      imageUrl={element.urlToImage !== null ? element.urlToImage : defaultImageUrl}
                      newsUrl={element.url}
                      publishedAt={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
