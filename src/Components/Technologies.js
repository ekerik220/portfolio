import React from "react";

export default function Technologies() {
  return (
    <section className="technologies">
      <div>
        <h2 className="faded-text">Technologies</h2>
        <hr className="faded-text"></hr>
      </div>
      <div className="technologies__icon-container">
        <div className="technologies__icon">
          <i className="fab fa-html5 fa-3x" style={{ color: "#e34f26" }}></i>
          <span className="faded-text">HTML5</span>
        </div>
        <div className="technologies__icon">
          <i className="fab fa-css3-alt fa-3x" style={{ color: "#264de4" }}></i>
          <span className="faded-text">CSS3</span>
        </div>
        <div className="technologies__icon">
          <i
            className="fab fa-js-square fa-3x"
            style={{ color: "#f7df1e" }}
          ></i>
          <span className="faded-text">Javascript</span>
        </div>
        <div className="technologies__icon">
          <i className="fab fa-react fa-3x" style={{ color: "#00d8ff" }}></i>
          <span className="faded-text">React</span>
        </div>
        <div className="technologies__icon">
          <div className="redux-icon"></div>
          <span className="faded-text">Redux</span>
        </div>
        <div className="technologies__icon">
          <div className="ts-icon"></div>
          <span className="faded-text">TypeScript</span>
        </div>
        <div className="technologies__icon">
          <div className="styled-components-icon"></div>
          <span className="faded-text">Styled Components</span>
        </div>
        <div className="technologies__icon">
          <i className="fab fa-node fa-3x"></i>
          <span className="faded-text">Node.js</span>
        </div>
        <div className="technologies__icon">
          <div className="mongodb-icon"></div>
          <span className="faded-text">MongoDB</span>
        </div>
        <div className="technologies__icon">
          <div className="graphql-icon"></div>
          <span className="faded-text">GraphQL</span>
        </div>
      </div>
    </section>
  );
}
