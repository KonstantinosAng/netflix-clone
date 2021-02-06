import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {

  const [show, handleShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [hideSearch, setHideSearch] = useState(true);

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

  useEffect(() => {
    window.addEventListener("click", function test(e) {
        if (showSearch && e.target.className !== 'search__bar__input') {
          setShowSearch(false);
          setHideSearch(true);
          document.getElementById("search__appear").style.animation = "fade_out 1.5s";
        } else if (!showSearch && e.target.id ==='search1') {
          setShowSearch(true);
          setHideSearch(false);
          document.getElementById("search__appear").style.animation = "fade_in 1.5s";
        }
      }
    );
    window.removeEventListener("click", useEffect);
  }, [showSearch])

  function handleClick() {
    if (showSearch) {
      setShowSearch(false);
      setHideSearch(true);
      document.getElementById("search__appear").style.animation = "fade_out 1.5s";
    } else {
      setShowSearch(true);
      setHideSearch(false);
      document.getElementById("search__appear").style.animation = "fade_in 1.5s";
    }
  }

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
      <i className="fa fa-bell"></i>
      <i className="fa fa-gift"></i>
      <h5 className="nav__children"> CHILDREN </h5>
      <i id="search1" className={`fa fa-search ${hideSearch && "search__barShow"}`} onClick={handleClick}></i>
      <div id="search__appear" className={`search__bar ${showSearch && "search__barShow"}`}>
        <input ref={input => input && input.focus()} id="search__field" type="text" className="search__bar__input" placeholder="Titles, people, genres" />  
        <i id="search2" className={`fa fa-search second-search ${showSearch && "search__barShow"}`} onClick={handleClick}></i>
      </div>
      <img 
      className="nav__avatar"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
      alt="Netflix User Avatar"
      />
      <span>&#9660;</span>
    </div>
  )
}

export default Nav
