import "./WorkCard.css"
import React from "react";
import { Link } from "react-router-dom";
const WorkCard = (props) => {
  return (
    <div className="project-card" >
      <img src={props.imageSrc} />
      <h2 className="project-title">{props.tittle}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <Link className="btn">View</Link>
          <Link className="btn">Source</Link>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
