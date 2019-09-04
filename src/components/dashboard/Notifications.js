import React, { Component } from 'react';

export class Notifications extends Component {
  render() {
    return (
      <div className="notifications">
          <div className="card text-dark bg-light mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            {/* <div className="card-footer bg-transparent border-dark">Footer</div> */}
          </div>
      </div>
    );
  }
}

export default Notifications;
