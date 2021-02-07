import React, { useState, useEffect } from 'react';
import './Nav.css';
import axios from 'axios';
import requests from './requests.js';

function Nav({ fetchUrl }) {

  const [show, handleShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [hideSearch, setHideSearch] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [movies, setMovies] = useState([]);
  const [showBellPopup, setShowBellPopup] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results.slice(0, 7));
      return request;
    }
    fetchData();
  }, [fetchUrl])

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
    document.addEventListener("visibilitychange", (event) => {
      if (document.visibilityState !== "visible") {
        setShowSearch(false);
        setHideSearch(true);
        animation_out();
      }
    })
    return () => {
      document.removeEventListener("visibilitychange", useEffect);
    };
  }, [])

  useEffect(() => {
    window.addEventListener("click", function test(e) {
        if (showSearch && e.target.className !== 'search__bar__input') {
          setShowSearch(false);
          setHideSearch(true);
          animation_out();
        } else if (!showSearch && e.target.id ==='search1') {
          setShowSearch(true);
          setHideSearch(false);
          animation_in();
        }
      }
    );
    return () => {
      window.removeEventListener("click", useEffect);
    }
  }, [showSearch])

  function handleClick() {
    if (showSearch) {
      setShowSearch(false);
      setHideSearch(true);
      document.getElementById("search__field").style.animation = "fade_out 1.5s";
      animation_out();
    } else {
      setShowSearch(true);
      setHideSearch(false);
      document.getElementById("search__field").style.animation = "fade_in 1.5s";
      animation_in(); 
    }
  }

  function animation_out() {
    document.getElementById("search1").style.display = 'block';
    var move = 36;
    for (var i=0;i<16;i++) {
      document.getElementById("search1").style.right = `${move}rem`;
      move = move - 1;
    }
  }

  function animation_in() {
    document.getElementById("search1").style.display = 'block';
    var move = 21;
    for (var i=0;i<16;i++) {
      document.getElementById("search1").style.right = `${move}rem`;
      move = move + 1;
    }
  }

  const Reload = () => {
    window.location.reload();
  };

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function handlePopupShow() {
    setShowPopup(true);
    setShowBellPopup(false);
  }

  function handlePopupHide() {
    setShowPopup(false);
  }

  function handleBellPopupShow() {
    setShowPopup(false);
    setShowBellPopup(true);
  }

  function handleBellPopupHide() {
    setShowBellPopup(false);
  }

  function handleRedirect() {
    window.location.replace('/');
  }

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
      <i onMouseOver={handleBellPopupShow} className="fa fa-bell"></i>
      <div onMouseOver={handleBellPopupShow} onMouseOut={handleBellPopupHide} className={`bell__popup ${showBellPopup && "bell__popup__show"}`}>
        <span className="bell__popup__carret">&#9660;</span>
        <div className="bell__popup__col">
          {movies.map(movie => (
          <div id={movie.id} className="bell__popup__row">
            <img
            key={movie.id}
            className="bell__popup__posters"
            src={`${requests.baseUrl}${movie.backdrop_path}`} 
            alt={movie.name} />
            <div className="bell__popup__posters__col">
              <h4 className="bell__popup__header"> New Arrival </h4>
              <h4 className="bell__popup__movieName"> {movie?.name || movie?.title || movie?.original_name} </h4>
              <h4 className="bell__popup__movieDate"> { movie?.first_air_date || movie?.release_date } </h4>
            </div>
          </div>
          ))}
        </div>
      </div>
      <i className="fa fa-gift"></i>
      <h5 className="nav__children"> CHILDREN </h5>
      <i id="search1" className={`fa fa-search ${hideSearch && "search__barShow"}`} onClick={handleClick}></i>
      <div id="search__appear" className={`search__bar ${showSearch && "search__barShow"}`}>
        <input ref={input => input && input.focus()} id="search__field" type="text" className="search__bar__input" placeholder="Titles, people, genres" />  
        <i id="search2" className={`fa fa-search second-search ${showSearch && "search__barShow"}`} onClick={handleClick}></i>
      </div>
      <img
      onMouseOver={handlePopupShow}
      className="nav__avatar"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
      alt="Netflix User Avatar"
      />
      <span onMouseOver={handlePopupShow} className="nav__avatar__carret">&#9660;</span>
      <div onMouseOver={handlePopupShow} onMouseOut={handlePopupHide} className={`nav__avatar__popup ${showPopup && "nav__avatar__popup__show"}`}>
        <div onMouseOver={handlePopupShow} className="nav__avatar__popup__col">
          <span className="nav__avatar__popup__carret">&#9660;</span>
          <div className="nav__avatar__popup__row">
            <img 
              className="nav__avatar__popup__user"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
            />
            <h5 className="nav__avatar__popup__username"> User 1 </h5>
          </div>
          <div className="nav__avatar__popup__row">
            <img 
              className="nav__avatar__popup__user"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
            />
            <h5 className="nav__avatar__popup__username"> User 2 </h5>
          </div>
          <div className="nav__avatar__popup__row">
            <img 
              className="nav__avatar__popup__user"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
            />
            <h5 className="nav__avatar__popup__username"> User 3 </h5>
          </div>
          <div className="nav__avatar__popup__row">
            <img 
              className="nav__avatar__popup__user"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
            />
            <h5 className="nav__avatar__popup__username"> User 4 </h5>
          </div>
          <div className="nav__avatar__popup__row">
            <h5 onClick={handleRedirect} className="nav__avatar__popup__profiles"> Manage profiles </h5>
          </div>
        </div>
      </div>
      <div onMouseOver={handlePopupShow} className={`nav__avatar__popup__2 ${showPopup && "nav__avatar__popup__show"}`}>
        <div onMouseOut={handlePopupHide} onMouseOver={handlePopupShow} className="nav__avatar__popup__col">
          <h5 className="nav__avatar__popup__2__profiles first__element"> Account </h5>
          <h5 className="nav__avatar__popup__2__profiles"> Help Centre </h5>
          <h5 className="nav__avatar__popup__2__profiles last__element"> Sign out of Netflix </h5>
        </div>
      </div>
    </div>
  )
}

export default Nav
