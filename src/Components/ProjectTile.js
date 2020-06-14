import React from "react";

export default function ProjectTile({ img, title, text, link, source, video }) {
  return (
    <div className="project-tile">
      <div className="project-tile__img">
        <a href={link} target="_blank">
          {video ? (
            <video src={video} playsinline autoPlay loop muted></video>
          ) : img ? (
            <img src={img} alt="" />
          ) : null}
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
