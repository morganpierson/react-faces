import React, { useState } from "react";

const UserCard = ({ pic, name }) => {
  return (
    <div className="card-container">
      <img src={pic} alt="User avatar" className="avatar-img" />
      <p className="avatar-name">{name}</p>
    </div>
  );
};

export default UserCard;
