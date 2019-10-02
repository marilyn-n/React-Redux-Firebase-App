import React, { Component } from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const { notifications } = props;
     
    return (
      <div className="notifications">
          <div className="card text-dark bg-light mb-3">
            <div className="card-header">Notifications</div>
            <ul className="list-group list-group-flush">
             {notifications && notifications.map(item => {
               return (
                 <li className="list-item" key={item.id}>
                   <span>{ item.user } </span>
                   <span>{ item.content} </span>
                   <div className="text-gray">{ moment(item.time.toDate()).fromNow() }</div>
                 </li>
               )
             }) }
            </ul>
          </div>
      </div>
    );
}

export default Notifications;
