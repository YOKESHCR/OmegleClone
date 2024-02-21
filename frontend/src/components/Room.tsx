import React, { useState } from "react";
import { Link, useHref } from "react-router-dom";

const Room = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <Link to={`/room/?name=${name}`}>Join</Link>
    </div>
  );
};

export default Room;
