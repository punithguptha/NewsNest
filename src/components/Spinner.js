import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div class="d-flex justify-content-center">
        <div className="d-flex justify-content-center spinner-border">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Spinner;
