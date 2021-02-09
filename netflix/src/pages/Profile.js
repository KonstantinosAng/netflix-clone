import React from 'react'
import './Profile.css';

function Profile() {

  function handleRedirectBrowse() {
    window.location.replace('/');
  }

  return (
    <div className="profile__root">
      <div className="profile__row__banner">
        <img
          onClick={handleRedirectBrowse}
          className="profile__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <img
          className="profile__avatar"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
          alt="Netflix User Avatar"
        />
      </div>
    </div>
  )
}

export default Profile
