import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import "./Profiles.css";
import Avatar from "../assets/avatar.png";

function Profiles() {
  const [toggleButton, setToggleButton] = useState(false);

  const Reload = () => {
    window.location.reload();
  };

  function handleHoverOn(hoverId) {
    document.getElementById(hoverId[1]).style.color = "white";
    document.getElementById(hoverId[0]).style.border = "3px solid white";
  }

  function handleHoverOff(hoverId) {
    document.getElementById(hoverId[1]).style.color = "gray";
    document.getElementById(hoverId[0]).style.border = "none";
  }

  function handleHoverProfile() {
    document.getElementById("box").style.border = "1px solid white";
    document.getElementById("box__name").style.color = "white";
  }

  function handleHoverProfileOver() {
    document.getElementById("box").style.border = "1px solid gray";
    document.getElementById("box__name").style.color = "gray";
  }

  function handleRedirect() {
    window.location.replace("/browse");
  }

  useEffect(() => {
    function handleButton() {
      const button = document.getElementById("box__name");
      const box = document.getElementById("box");
      if (toggleButton) {
        button.textContent = "Done";
        button.style.color = "#000!important";
        box.style.backgroundColor = "white";
        const opacity = ".7";
        document.getElementById("user1__avatar").style.opacity = opacity;
        document.getElementById("user2__avatar").style.opacity = opacity;
        document.getElementById("user3__avatar").style.opacity = opacity;
        document.getElementById("user4__avatar").style.opacity = opacity;
        document.getElementById("user5__avatar").style.opacity = opacity;
        box.onmouseover = () => {
          box.style.backgroundColor = "#e50914";
        };
        box.onmouseleave = () => {
          box.style.backgroundColor = "white";
        };
      } else {
        button.textContent = "MANAGE PROFILES";
        button.style.color = "gray!important";
        box.style.backgroundColor = "#111";
        box.onmouseover = () => {};
        box.onmouseleave = () => {};
        document.getElementById("user1__avatar").style.opacity = "1";
        document.getElementById("user2__avatar").style.opacity = "1";
        document.getElementById("user3__avatar").style.opacity = "1";
        document.getElementById("user4__avatar").style.opacity = "1";
        document.getElementById("user5__avatar").style.opacity = "1";
      }
    }
    handleButton();
  }, [toggleButton]);

  return (
    <div className="profile">
      <div className="fade__top"></div>
      <img
        loading="lazy"
        onClick={Reload}
        className="netflix__logo"
        src={Logo}
        alt="Netflix Logo"
      />
      <div className="profile__col">
        <h1 className="profile__header"> Who's Watching? </h1>
        <div className="profile__row">
          {Array(5)
            .fill(1)
            .map((arr, idx) => (
              <div
                key={`avatar_user_${idx}`}
                onMouseOut={() =>
                  handleHoverOff([
                    `user${idx + 1}__avatar`,
                    `user${idx + 1}__name`,
                  ])
                }
                onMouseOver={() =>
                  handleHoverOn([
                    `user${idx + 1}__avatar`,
                    `user${idx + 1}__name`,
                  ])
                }
                className="profile__user"
              >
                <div className="profile__avatar__container">
                  <img
                    loading="lazy"
                    onClick={handleRedirect}
                    onMouseOut={() =>
                      handleHoverOff([
                        `user${idx + 1}__avatar`,
                        `user${idx + 1}__name`,
                      ])
                    }
                    onMouseOver={() =>
                      handleHoverOn([
                        `user${idx + 1}__avatar`,
                        `user${idx + 1}__name`,
                      ])
                    }
                    id={`user${idx + 1}__avatar`}
                    className="profile__avatar"
                    src={Avatar}
                    alt="Netflix User Avatar"
                  />
                  <svg
                    className={`svg__edit ${toggleButton && "show__edit"}`}
                    id="edit"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M16 0c8.833 0 16 7.167 16 16 0 8.8-7.167 16-16 16s-16-7.2-16-16c0-8.833 7.167-16 16-16zM16 1.7c-7.9 0-14.3 6.4-14.3 14.3s6.4 14.3 14.3 14.3 14.3-6.4 14.3-14.3-6.4-14.3-14.3-14.3zM22.333 12.9l0.3-0.267 0.867-0.867c0.467-0.5 0.4-0.767 0-1.167l-1.767-1.767c-0.467-0.467-0.767-0.4-1.167 0l-0.867 0.867-0.267 0.3zM18.3 11.1l-8.6 8.6-0.833 3.767 3.767-0.833 0.967-1 7.633-7.6z"
                    />
                  </svg>
                </div>
                <h3
                  onClick={handleRedirect}
                  onMouseOut={() =>
                    handleHoverOff([
                      `user${idx + 1}__avatar`,
                      `user${idx + 1}__name`,
                    ])
                  }
                  onMouseOver={() =>
                    handleHoverOn([
                      `user${idx + 1}__avatar`,
                      `user${idx + 1}__name`,
                    ])
                  }
                  id={`user${idx + 1}__name`}
                  className="profile__avatar__name"
                >
                  {idx !== 4 ? `User ${idx + 1}` : "Children"}
                </h3>
              </div>
            ))}
        </div>
        <div
          onClick={() => setToggleButton(toggleButton ? false : true)}
          onMouseOut={handleHoverProfileOver}
          onMouseOver={handleHoverProfile}
          id="box"
          className="profiles__box"
        >
          <h3
            onClick={() => setToggleButton(toggleButton ? false : true)}
            onMouseOut={handleHoverProfileOver}
            onMouseOver={handleHoverProfile}
            id="box__name"
            className="profiles__box__name"
          >
            {" "}
            MANAGE PROFILES{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
