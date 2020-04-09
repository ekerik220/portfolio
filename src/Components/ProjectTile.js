import React from "react";

export default function ProjectTile(props) {
  const img = props.img;
  const title = props.title;
  const text = props.text;
  const link = props.link;
  const source = props.source;

  return (
    <div className="project-tile">
      <div className="project-tile__img">
        <a href={link} target="_blank">
          <img src={img} alt="" />
        </a>
      </div>
      <div className="project-tile__title-bar">
        <h4>{title}</h4>
        <a href={source} target="_blank">
              <i className="fab fa-github"></i>
        </a>
      </div>
      <span>{text}</span>
    </div>
  );
}
