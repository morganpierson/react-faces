import React, { useState } from "react";

const UserCard = ({ pic, name }) => {
  return (
    <div>
      <img src={pic} alt="User avatar" />
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {name}
    </div>
  );
};

export default UserCard;