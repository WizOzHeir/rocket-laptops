import React, { Component } from 'react';

export default class Default extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-10 mx-auto text-center text-title pt-5">
                  <h1 className="display-4 text-uppercase">Sorry</h1>
                  <h2 className="text-lowercase">we couldn't find that page</h2>
              </div>
          </div>
      </div>
    );
  };
};
