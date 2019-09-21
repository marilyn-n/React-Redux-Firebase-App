import React, { Component } from 'react';

export class Notifications extends Component {
  render() {
    return (
      <div className="notifications">
          <div className="card text-dark bg-light mb-3">
            <div className="card-header">Notifications</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Notification</li>
              <li class="list-group-item">Notification</li>
              <li class="list-group-item">Notification</li>
              <li class="list-group-item">Notification</li>
              <li class="list-group-item">Notification</li>
            </ul>
            {/* <div className="card-footer bg-transparent border-dark">Footer</div> */}
          </div>
      </div>
    );
  }
}

export default Notifications;
