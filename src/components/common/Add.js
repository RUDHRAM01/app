import React from "react";

function Add(props) {
  return (
    <div className="add">
      <div className="add-img-container">
        <img src={props.adds.url.type} alt="img" className="add-img" />
      </div>
      <div className="add-info">
        <span className="add-name">{props.adds.name}</span>
        <span className="add=title">{props.adds.title}</span>
      </div>
    </div>
  );
}

export default Add;
