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
      <div className="profile__body">
        <h1 className="profile__body__header"> Edit Profile </h1>
        <div className="profile__body__row">
          <img
            className="profile__body__avatar"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F666011864883662849%2FgQwK8LLw.jpg&f=1&nofb=1"
            alt="Netflix User Avatar"
          />
          <div className="profile__body__col">
            <input type="mail" className="profile__body__input" placholder="Email" />
            <h3 className="profile__body__input__plans"> Plans (Current Plan: premium) </h3>
          </div>
        </div>
        <div className="profile__body__row">
          <h4 className="profile__body__date"> Renewal date: 10/06/2021 </h4>
        </div>
        <div className="profile__body__row__plans">
          <div className="profile__body__row__col">
            <h4 className="profile__body__plan"> Netflix Standard </h4>
            <h6 className="profile__body__resolution"> 1080p </h6>
          </div>
          <button className="profile__body__button"> Subscribe </button>
        </div>
        <div className="profile__body__row__plans">
          <div className="profile__body__row__col">
            <h4 className="profile__body__plan"> Netflix Basic </h4>
            <h6 className="profile__body__resolution"> 480p </h6>
          </div>
          <button className="profile__body__button"> Subscribe </button>
        </div>
        <div className="profile__body__row__plans">
          <div className="profile__body__row__col">
            <h4 className="profile__body__plan"> Netflix Premium </h4>
            <h6 className="profile__body__resolution"> 4K+HDR </h6>
          </div>
          <button className="profile__body__button"> Subscribe </button>
        </div>
        <div className="profile__body__row">
          <button className="profile__body__button signout__button"> Sign Out </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
