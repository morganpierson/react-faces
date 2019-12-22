import React from "react";
export default function Pet({ name, pic }) {
  return (
    <div>
      <img src={pic} alt="User avatar" />
      {name}
    </div>
  );
}
