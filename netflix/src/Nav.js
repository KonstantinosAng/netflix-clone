import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", useEffect);
    };
  }, []);

  const Reload = () => {
    window.location.reload();
  };

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img 
      onClick={Reload}
      className="nav__logo"
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      alt="Netflix Logo"
      />
      <div className="nav__row">
        <h5 className="nav__home"> Home </h5>
        <h5 className="nav__series"> Series </h5>
        <h5 className="nav__films"> Films </h5>
        <h5 className="nav__news"> News & Popular </h5>
        <h5 className="nav__list"> My List </h5>
      </div>
      <img 
      className="nav__avatar"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
      alt="Netflix User Avatar"
      />
    </div>
  )
}

export default Nav
