import "./Work.css";
import React from "react";
import WorkCard from "./WorkCard";
import ProjectCardData from "../data/WorkData";
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((card,ind)=>{
          return (
            <WorkCard 
            key={ind}
            imageSrc={card.imageSrc}
            title={card.title}
            text={card.text}
            view={card.view}
            source={card.source}

            />
          )
        })}
      </div>
    </div>
  );
};

export default Work;
