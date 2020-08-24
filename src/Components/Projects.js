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
        img="https://res.cloudinary.com/twatter/image/upload/v1598229539/twatter_jdmww5.png"
        title="Twatter"
        text="A Twitter clone. As a personal challenge I've tried to make a Twitter clone that looks just like the real Twitter. I used React/Redux (using typescript) for the front end, and GraphQL for the back end. It's still a work in progress, but please check it out! If you want to skip registration, log in with username/password: testuser/testuser"
        link="https://twatter-dev.xyz/"
        source="https://github.com/ekerik220/twitter-clone-frontend"
      />
      <ProjectTile
        video="https://res.cloudinary.com/twatter/video/upload/v1598229141/acnh-tracker_aeqods.mp4"
        title="ACNH Tracker"
        text="Animal Crossing New Horizons catalogue tracking application. Made with React, Redux, Express, MongoDB, and Node.js. You can login and save items that you own or want, view lists and statistics about your catalogue, and compare your catalogue with other users to see what you can offer each other at a catalogue party! If you want to skip registration, log in with email: acnh.tester@gmail.com, password: tester"
        link="http://www.acnh-tracker.net/"
        source="https://github.com/ekerik220/acnh-tracker-front"
      />
      <ProjectTile
        img="https://res.cloudinary.com/twatter/image/upload/v1598229224/recipe-finder-preview_elh5ja.png"
        title="Recipe Finder"
        text="A personal project I made to get my hands wet with React Router, React Bootstrap, and get a bit more familiar with APIs. Simply use the search bar to search for recipes and select the one you're interested in. The application will display an ingredient list, nutrition info, and a link to the preparation instructions for the recipe."
        link="https://ekerik220.github.io/recipe-search/"
        source="https://github.com/ekerik220/recipe-search"
      />
      <ProjectTile
        img="https://res.cloudinary.com/twatter/image/upload/v1598229224/first-trend-preview_fsipob.png"
        title="First Trend"
        text="A personal project I made to learn React Hooks and Redux. It's a section of a mock shopping website. You can filter clothing by type, color, size, and price, and add them to the cart."
        link="https://ekerik220.github.io/First-Trend-Clothing/"
        source="https://github.com/ekerik220/First-Trend-Clothing"
      />
      <ProjectTile
        img="https://res.cloudinary.com/twatter/image/upload/v1598229223/weather-preview_i4ddkh.png"
        title="Weather"
        text="A personal project I made to learn how to use an API and location services in Javascript. The application displays the current and weekly weather conditions for the user's current location. Weather data is from Dark Sky API (https://darksky.net/dev). Locationiq API is used for reverse geocoding the user's city name (https://locationiq.com/)."
        link="https://ekerik220.github.io/weather/"
        source="https://github.com/ekerik220/weather"
      />
    </section>
  );
}
