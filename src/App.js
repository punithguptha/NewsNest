import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 20;
  state={
    progress:0
  };

  setProgress = (progressed) => {
    this.setState({progress:progressed});
  };
  
  newsApiKey=process.env.REACT_APP_NEWS_API_KEY;

  render() {
    // console.log(process.env.NODE_ENV);

    return (
      <Router>
        <div>
        <LoadingBar color="red" progress={this.state.progress} height={3} />
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress} apiKey={this.newsApiKey} key="home" pageSize={this.pageSize} country="in" category="general" />
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress} apiKey={this.newsApiKey} key="business" pageSize={this.pageSize} country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress} apiKey={this.newsApiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />
            </Route>
            <Route exact path="/general">
              <News setProgress={this.setProgress} apiKey={this.newsApiKey} key="general" pageSize={this.pageSize} country="in" category="general" />
            </Route>
            <Route exact path="/health">
              <News setProgress={this.setProgress} apiKey={this.newsApiKey} key="health" pageSize={this.pageSize} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress} apiKey={this.newsApiKey} key="science" pageSize={this.pageSize} country="in" category="science" />
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress} apiKey={this.newsApiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress} apiKey={this.newsApiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
