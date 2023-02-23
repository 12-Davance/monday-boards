import React from "react";

const Notification = ({ title, type, align }) => {
  return (
    <div className={`alert alert-${type} text-${align}`}>
      <h5>{title}</h5>
    </div>
  );
};

export default Notification;
