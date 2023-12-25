import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center spinner-border">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Spinner;
