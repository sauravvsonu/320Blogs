import React from "react";
import moment from "moment";

const Notifications = (props) => {
  console.log(props);
  const { notifications } = props;
  return (
    <div className="section">
      {console.log(notifications)}
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title ">Notifications:</span>
          <ul className="online-users">
            {notifications &&
              notifications.map((item) => {
                return (
                  <li key={item.id}>
                    <span className="pink-text">{item.user} </span>
                    <span>{item.message}</span>
                    <div className="note-date grey-text text-darken-3">
                      {moment(item.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;