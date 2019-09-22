import React, { Component } from 'react';

export class Notifications extends Component {
  render() {
    return (
      <div className="notifications">
          <div className="card text-dark bg-light mb-3">
            <div className="card-header">Notifications</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Notification</li>
              <li className="list-group-item">Notification</li>
              <li className="list-group-item">Notification</li>
              <li className="list-group-item">Notification</li>
              <li className="list-group-item">Notification</li>
            </ul>
            {/* <div className="card-footer bg-transparent border-dark">Footer</div> */}
          </div>
      </div>
    );
  }
}

export default Notifications;
