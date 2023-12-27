import React, { useEffect,useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

//Constructor->Render->ComponentDidMount .This is the order of execution

const News = (props)=> {

  const [articles,setArticles]=useState([]);
  const [page,setPage]=useState(1);
  const [totalArticles,setTotalArticles]=useState(0);


  const fetchDataForPage=async ()=> {
    let apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30);
    let response = await fetch(apiUrl);
    props.setProgress(60);
    let parsedData = await response.json();
    // console.log(parsedData);
    setTotalArticles(parsedData.totalResults);
    setArticles(parsedData.articles);
    props.setProgress(100);
  }
  useEffect(() => {
    fetchDataForPage();
  }, []);

  const fetchMoreData=async ()=> {
    let apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&page=${page+1}&pageSize=${props.pageSize}`;
    let response = await fetch(apiUrl);
    let parsedData = await response.json();
    setTotalArticles(parsedData.totalResults);
    setArticles(articles.concat(parsedData.articles));
    setPage(page+1);
  };

    let defaultImageUrl = "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
      <div className="container my-3">
        <h1 className="text-center mb-3">NewsNest- Top Headlines For You</h1>
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={articles.length !== totalArticles}
          loader={<Spinner />}
          style={{overflow:"hidden", display: "flex", flexDirection:"column"}}
          >
            <div className="row" style={{width:'100%', alignSelf:"center"}}>
              {articles.map((element) => {
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

News.defaultProps={
    pageSize: 8,
    country: "in"
}

News.propTypes={
    pageSize: PropTypes.number,
    country: PropTypes.string.isRequired,
    setProgress: PropTypes.func.isRequired,
    apiKey: PropTypes.string.isRequired
}

export default News;
