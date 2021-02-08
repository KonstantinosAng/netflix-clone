import React from 'react'
import './Login.css';

function Login() {

  const Reload = () => {
    window.location.reload();
  };

  return (
    <div className="login__root">
      <div className="login__fade__top"></div>
      <div className="login__banner">
        <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        />
        <button className="login__button"> <h3> Sign In </h3> </button>
      </div>
    </div>
  )
}

export default Login
