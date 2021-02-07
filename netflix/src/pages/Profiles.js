import React, { useState } from 'react';
import './Profiles.css';

function Profiles() {

  const [hoverId, setHoverId] = useState([]);

  const Reload = () => {
    window.location.reload();
  };

  function handleHover() {
    document.getElementById(id)
  }

  return (
    <div className="profile">
      <div className="fade__top"></div>
      <img 
      onClick={Reload}
      className="netflix__logo"
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      alt="Netflix Logo"
      />
      <div className="profile__col">
        <h1 className="profile__header"> Who's Watching? </h1>
        <div className="profile__row">
          <div className="profile__user">
            <img
              id="user1__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 id="user1__name" className="profile__avatar__name"> User 1 </h3>
          </div>
          <div className="profile__user">
            <img
              id="user2__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 id="user2__name" className="profile__avatar__name"> User 2 </h3>
          </div>
          <div className="profile__user">
            <img
              id="user3__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 id="user3__name" className="profile__avatar__name"> User 3 </h3>
          </div>
          <div className="profile__user">
            <img
              id="user4__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 id="user4__name" className="profile__avatar__name"> User 4 </h3>
          </div>
          <div className="profile__user">
            <img
              id="user5__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 id="user5__name" className="profile__avatar__name"> Children </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles
