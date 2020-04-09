import React from "react";
import ProjectTile from "./ProjectTile";

export default function Projects() {
  return (
    <section className="projects">
      <div>
        <h2 className="faded-text">Projects</h2>
        <hr className="faded-text"></hr>
      </div>
      <ProjectTile
        img={require("../imgs/first-trend-preview.png")}
        title="First Trend"
        text="A personal project I made to learn React Hooks and Redux. It's a section of a mock shopping website. You can filter clothing by type, color, size, and price, and add them to the cart."
        link="https://ekerik220.github.io/First-Trend-Clothing/"
        source="https://github.com/ekerik220/First-Trend-Clothing"
      />
      <ProjectTile
        img={require("../imgs/recipe-finder-preview.png")}
        title="Recipe Finder"
        text="A personal project I made to get my hands wet with React Router, React Bootstrap, and get a bit more familiar with APIs. Simply use the search bar to search for recipes and select the one you're interested in. The application will display an ingredient list, nutrition info, and a link to the preparation instructions for the recipe."
        link="https://ekerik220.github.io/recipe-search/"
        source="https://github.com/ekerik220/recipe-search"
      />
      <ProjectTile
        img={require("../imgs/weather-preview.png")}
        title="Weather"
        text="A personal project I made to learn how to use an API and location services in Javascript. The application displays the current and weekly weather conditions for the user's current location. Weather data is from Dark Sky API (https://darksky.net/dev). Locationiq API is used for reverse geocoding the user's city name (https://locationiq.com/)."
        link="https://ekerik220.github.io/weather/"
        source="https://github.com/ekerik220/weather"
      />
      <ProjectTile
        img={require("../imgs/calculator-preview.png")}
        title="Calculator"
        text="A personal project I made to learn React, Javascript, and CSS. You can either click the buttons on the calculator or use the keyboard to enter an equation. The calculator also has a history function for quick access to your history of equations and answers."
        link="https://ekerik220.github.io/calculator/"
        source="https://github.com/ekerik220/calculator"
      />
    </section>
  );
}
