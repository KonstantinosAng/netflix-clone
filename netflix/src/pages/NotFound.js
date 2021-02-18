import React from 'react'
import './NotFound.css';

function NotFound() {
  return (
    <div className="not__found">
      <div className="profile__row__banner">
        <img
          onClick={() => window.location.replace('/')}
          className="profile__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>
      <div className="not__found__message">
        <h1> Error 404! Sorry page {window.location.pathname} not found! </h1>
        <br />
        <br />
        <h1> 😔 </h1>
      </div>
    </div>
  )
}

export default NotFound
