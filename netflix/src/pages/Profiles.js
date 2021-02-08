import React from 'react';
import './Profiles.css';

function Profiles() {

  const Reload = () => {
    window.location.reload();
  };

  function handleHoverOn(hoverId) {
    document.getElementById(hoverId[1]).style.color = 'white';
    document.getElementById(hoverId[0]).style.border = '3px solid white';
  }

  function handleHoverOff(hoverId) {
    document.getElementById(hoverId[1]).style.color = 'gray';
    document.getElementById(hoverId[0]).style.border = 'none';
  }

  function handleHoverProfile() {
    document.getElementById("box").style.border = '1px solid white';
    document.getElementById("box__name").style.color = 'white';
  }

  function handleHoverProfileOver() {
    document.getElementById("box").style.border = '1px solid gray';
    document.getElementById("box__name").style.color = 'gray';
  }

  function handleRedirect() {
    window.location.replace('/browse');
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
          <div onClick={handleRedirect} onMouseOut={() => handleHoverOff(["user1__avatar", "user1__name"])} onMouseOver={() => handleHoverOn(["user1__avatar", "user1__name"])} className="profile__user">
            <img
              onMouseOut={() => handleHoverOff(["user1__avatar", "user1__name"])}
              onMouseOver={() => handleHoverOn(["user1__avatar", "user1__name"])}
              id="user1__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 onMouseOut={() => handleHoverOff(["user1__avatar", "user1__name"])} onMouseOver={() => handleHoverOn(["user1__avatar", "user1__name"])} id="user1__name" className="profile__avatar__name"> User 1 </h3>
          </div>
          <div onClick={handleRedirect} onMouseOut={() => handleHoverOff(["user2__avatar", "user2__name"])} onMouseOver={() => handleHoverOn(["user2__avatar", "user2__name"])} className="profile__user">
            <img
              onMouseOut={() => handleHoverOff(["user2__avatar", "user2__name"])}
              onMouseOver={() => handleHoverOn(["user2__avatar", "user2__name"])}
              id="user2__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 onMouseOut={() => handleHoverOff(["user2__avatar", "user2__name"])} onMouseOver={() => handleHoverOn(["user2__avatar", "user2__name"])} id="user2__name" className="profile__avatar__name"> User 2 </h3>
          </div>
          <div onClick={handleRedirect} onMouseOut={() => handleHoverOff(["user3__avatar", "user3__name"])} onMouseOver={() => handleHoverOn(["user3__avatar", "user3__name"])} className="profile__user">
            <img
              onMouseOut={() => handleHoverOff(["user3__avatar", "user3__name"])}
              onMouseOver={() => handleHoverOn(["user3__avatar", "user3__name"])}
              id="user3__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 onMouseOut={() => handleHoverOff(["user3__avatar", "user3__name"])} onMouseOver={() => handleHoverOn(["user3__avatar", "user3__name"])} id="user3__name" className="profile__avatar__name"> User 3 </h3>
          </div>
          <div onClick={handleRedirect} onMouseOut={() => handleHoverOff(["user4__avatar", "user4__name"])} onMouseOver={() => handleHoverOn(["user4__avatar", "user4__name"])} className="profile__user">
            <img
              onMouseOut={() => handleHoverOff(["user4__avatar", "user4__name"])}
              onMouseOver={() => handleHoverOn(["user4__avatar", "user4__name"])}
              id="user4__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 onMouseOut={() => handleHoverOff(["user4__avatar", "user4__name"])} onMouseOver={() => handleHoverOn(["user4__avatar", "user4__name"])} id="user4__name" className="profile__avatar__name"> User 4 </h3>
          </div>
          <div onClick={handleRedirect} onMouseOut={() => handleHoverOff(["user5__avatar", "user5__name"])} onMouseOver={() => handleHoverOn(["user5__avatar", "user5__name"])} className="profile__user">
            <img
              onMouseOut={() => handleHoverOff(["user5__avatar", "user5__name"])}
              onMouseOver={() => handleHoverOn(["user5__avatar", "user5__name"])}
              id="user5__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 onMouseOut={() => handleHoverOff(["user5__avatar", "user5__name"])} onMouseOver={() => handleHoverOn(["user5__avatar", "user5__name"])} id="user5__name" className="profile__avatar__name"> Children </h3>
          </div>
        </div>
        <div onMouseOut={handleHoverProfileOver} onMouseOver={handleHoverProfile} id="box" className="profiles__box">
          <h3 onMouseOut={handleHoverProfileOver} onMouseOver={handleHoverProfile} id="box__name" className="profiles__box__name"> MANAGE PROFILES </h3>
        </div>
      </div>
    </div>
  )
}

export default Profiles
