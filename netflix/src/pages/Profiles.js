import React, { useState, useEffect } from 'react';
import './Profiles.css';

function Profiles() {

  const [toggleButton, setToggleButton] = useState(false);

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

  useEffect(() => {
    function handleButton() {
      const button = document.getElementById('box__name');
      const box = document.getElementById('box');
      if (toggleButton) {
        button.textContent = 'Done';
        button.style.color = '#000!important';
        box.style.backgroundColor = 'white';
        const opacity = '.7';
        document.getElementById('user1__avatar').style.opacity = opacity;
        document.getElementById('user2__avatar').style.opacity = opacity;
        document.getElementById('user3__avatar').style.opacity = opacity;
        document.getElementById('user4__avatar').style.opacity = opacity;
        document.getElementById('user5__avatar').style.opacity = opacity;
        box.onmouseover = () => {
          box.style.backgroundColor = '#e50914';
        }
        box.onmouseleave = () => {
          box.style.backgroundColor = 'white';
        }
      } else {
        button.textContent = 'MANAGE PROFILES';
        button.style.color = 'gray!important';
        box.style.backgroundColor = '#111';
        box.onmouseover = () => {};
        box.onmouseleave = () => {};
        document.getElementById('user1__avatar').style.opacity = '1';
        document.getElementById('user2__avatar').style.opacity = '1';
        document.getElementById('user3__avatar').style.opacity = '1';
        document.getElementById('user4__avatar').style.opacity = '1';
        document.getElementById('user5__avatar').style.opacity = '1';
      }    
    }
    handleButton()
  }, [toggleButton])

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
          <div onMouseOut={() => handleHoverOff(["user1__avatar", "user1__name"])} onMouseOver={() => handleHoverOn(["user1__avatar", "user1__name"])} className="profile__user">
            <img
              onClick={handleRedirect}
              onMouseOut={() => handleHoverOff(["user1__avatar", "user1__name"])}
              onMouseOver={() => handleHoverOn(["user1__avatar", "user1__name"])}
              id="user1__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 onClick={handleRedirect} onMouseOut={() => handleHoverOff(["user1__avatar", "user1__name"])} onMouseOver={() => handleHoverOn(["user1__avatar", "user1__name"])} id="user1__name" className="profile__avatar__name"> User 1 </h3>
              <svg className={`svg__edit ${toggleButton && "show__edit"}`} id="edit" viewBox="0 0 32 32">
                <path fill="currentColor" d="M16 0c8.833 0 16 7.167 16 16 0 8.8-7.167 16-16 16s-16-7.2-16-16c0-8.833 7.167-16 16-16zM16 1.7c-7.9 0-14.3 6.4-14.3 14.3s6.4 14.3 14.3 14.3 14.3-6.4 14.3-14.3-6.4-14.3-14.3-14.3zM22.333 12.9l0.3-0.267 0.867-0.867c0.467-0.5 0.4-0.767 0-1.167l-1.767-1.767c-0.467-0.467-0.767-0.4-1.167 0l-0.867 0.867-0.267 0.3zM18.3 11.1l-8.6 8.6-0.833 3.767 3.767-0.833 0.967-1 7.633-7.6z" />
              </svg>
          </div>
          <div onMouseOut={() => handleHoverOff(["user2__avatar", "user2__name"])} onMouseOver={() => handleHoverOn(["user2__avatar", "user2__name"])} className="profile__user">
            <img
              onClick={handleRedirect}
              onMouseOut={() => handleHoverOff(["user2__avatar", "user2__name"])}
              onMouseOver={() => handleHoverOn(["user2__avatar", "user2__name"])}
              id="user2__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 onClick={handleRedirect} onMouseOut={() => handleHoverOff(["user2__avatar", "user2__name"])} onMouseOver={() => handleHoverOn(["user2__avatar", "user2__name"])} id="user2__name" className="profile__avatar__name"> User 2 </h3>
              <svg className={`svg__edit ${toggleButton && "show__edit"}`} id="edit" viewBox="0 0 32 32">
                <path fill="currentColor" d="M16 0c8.833 0 16 7.167 16 16 0 8.8-7.167 16-16 16s-16-7.2-16-16c0-8.833 7.167-16 16-16zM16 1.7c-7.9 0-14.3 6.4-14.3 14.3s6.4 14.3 14.3 14.3 14.3-6.4 14.3-14.3-6.4-14.3-14.3-14.3zM22.333 12.9l0.3-0.267 0.867-0.867c0.467-0.5 0.4-0.767 0-1.167l-1.767-1.767c-0.467-0.467-0.767-0.4-1.167 0l-0.867 0.867-0.267 0.3zM18.3 11.1l-8.6 8.6-0.833 3.767 3.767-0.833 0.967-1 7.633-7.6z" />
              </svg>
          </div>
          <div onMouseOut={() => handleHoverOff(["user3__avatar", "user3__name"])} onMouseOver={() => handleHoverOn(["user3__avatar", "user3__name"])} className="profile__user">
            <img
              onClick={handleRedirect}
              onMouseOut={() => handleHoverOff(["user3__avatar", "user3__name"])}
              onMouseOver={() => handleHoverOn(["user3__avatar", "user3__name"])}
              id="user3__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 onClick={handleRedirect} onMouseOut={() => handleHoverOff(["user3__avatar", "user3__name"])} onMouseOver={() => handleHoverOn(["user3__avatar", "user3__name"])} id="user3__name" className="profile__avatar__name"> User 3 </h3>
              <svg className={`svg__edit ${toggleButton && "show__edit"}`} id="edit" viewBox="0 0 32 32">
                <path fill="currentColor" d="M16 0c8.833 0 16 7.167 16 16 0 8.8-7.167 16-16 16s-16-7.2-16-16c0-8.833 7.167-16 16-16zM16 1.7c-7.9 0-14.3 6.4-14.3 14.3s6.4 14.3 14.3 14.3 14.3-6.4 14.3-14.3-6.4-14.3-14.3-14.3zM22.333 12.9l0.3-0.267 0.867-0.867c0.467-0.5 0.4-0.767 0-1.167l-1.767-1.767c-0.467-0.467-0.767-0.4-1.167 0l-0.867 0.867-0.267 0.3zM18.3 11.1l-8.6 8.6-0.833 3.767 3.767-0.833 0.967-1 7.633-7.6z" />
              </svg>
          </div>
          <div onMouseOut={() => handleHoverOff(["user4__avatar", "user4__name"])} onMouseOver={() => handleHoverOn(["user4__avatar", "user4__name"])} className="profile__user">
            <img
              onClick={handleRedirect}
              onMouseOut={() => handleHoverOff(["user4__avatar", "user4__name"])}
              onMouseOver={() => handleHoverOn(["user4__avatar", "user4__name"])}
              id="user4__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 onClick={handleRedirect} onMouseOut={() => handleHoverOff(["user4__avatar", "user4__name"])} onMouseOver={() => handleHoverOn(["user4__avatar", "user4__name"])} id="user4__name" className="profile__avatar__name"> User 4 </h3>
              <svg className={`svg__edit ${toggleButton && "show__edit"}`} id="edit" viewBox="0 0 32 32">
                <path fill="currentColor" d="M16 0c8.833 0 16 7.167 16 16 0 8.8-7.167 16-16 16s-16-7.2-16-16c0-8.833 7.167-16 16-16zM16 1.7c-7.9 0-14.3 6.4-14.3 14.3s6.4 14.3 14.3 14.3 14.3-6.4 14.3-14.3-6.4-14.3-14.3-14.3zM22.333 12.9l0.3-0.267 0.867-0.867c0.467-0.5 0.4-0.767 0-1.167l-1.767-1.767c-0.467-0.467-0.767-0.4-1.167 0l-0.867 0.867-0.267 0.3zM18.3 11.1l-8.6 8.6-0.833 3.767 3.767-0.833 0.967-1 7.633-7.6z" />
              </svg>
          </div>
          <div onMouseOut={() => handleHoverOff(["user5__avatar", "user5__name"])} onMouseOver={() => handleHoverOn(["user5__avatar", "user5__name"])} className="profile__user">
            <img
              onClick={handleRedirect}
              onMouseOut={() => handleHoverOff(["user5__avatar", "user5__name"])}
              onMouseOver={() => handleHoverOn(["user5__avatar", "user5__name"])}
              id="user5__avatar"
              className="profile__avatar"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
              alt="Netflix User Avatar"
              />
              <h3 onClick={handleRedirect} onMouseOut={() => handleHoverOff(["user5__avatar", "user5__name"])} onMouseOver={() => handleHoverOn(["user5__avatar", "user5__name"])} id="user5__name" className="profile__avatar__name"> Children </h3>
              <svg className={`svg__edit ${toggleButton && "show__edit"}`} id="edit" viewBox="0 0 32 32">
                <path fill="currentColor" d="M16 0c8.833 0 16 7.167 16 16 0 8.8-7.167 16-16 16s-16-7.2-16-16c0-8.833 7.167-16 16-16zM16 1.7c-7.9 0-14.3 6.4-14.3 14.3s6.4 14.3 14.3 14.3 14.3-6.4 14.3-14.3-6.4-14.3-14.3-14.3zM22.333 12.9l0.3-0.267 0.867-0.867c0.467-0.5 0.4-0.767 0-1.167l-1.767-1.767c-0.467-0.467-0.767-0.4-1.167 0l-0.867 0.867-0.267 0.3zM18.3 11.1l-8.6 8.6-0.833 3.767 3.767-0.833 0.967-1 7.633-7.6z" />
              </svg>
          </div>
        </div>
        <div onClick={() => setToggleButton(toggleButton?false:true)} onMouseOut={handleHoverProfileOver} onMouseOver={handleHoverProfile} id="box" className="profiles__box">
          <h3 onClick={() => setToggleButton(toggleButton?false:true)} onMouseOut={handleHoverProfileOver} onMouseOver={handleHoverProfile} id="box__name" className="profiles__box__name"> MANAGE PROFILES </h3>
        </div>
      </div>
    </div>
  )
}

export default Profiles
