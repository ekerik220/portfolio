import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content-box">
        <img
          src="https://res.cloudinary.com/twatter/image/upload/v1598229224/portrait_u8g0qj.jpg"
          alt="Evan"
          className="header__portrait"
        />
        <div className="header__info">
          <h4>
            <strong>EVAN KERIK</strong>
          </h4>
          <h5 className="faded-text">Software engineer</h5>
          <div className="header__icons">
            <a
              href="https://github.com/ekerik220"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/evan-kerik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:ekerik220@gmail.com" target="_top">
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
