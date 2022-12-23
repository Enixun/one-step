import React from "react";

const Delete = ({deleteCharacter}) => {

  return (
    <button className="delete" onClick={deleteCharacter}>X</button>
  );
};

export default Delete;