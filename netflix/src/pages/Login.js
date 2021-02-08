import React from 'react'
import './Login.css';

function Login() {

  const Reload = () => {
    window.location.reload();
  };

  return (
    <div className="login__root">
      <div className="login__banner">
        <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        />
        <button className="login__button"> <h3> Sign In </h3> </button>
      </div>
      <div className="login__fade__top"></div>
      <div className="login__body">
        <div className="login__body__row">
          <h1 className="login__body__header"> Unlimited Movies, TV shows, and more. </h1>
        </div>
        <div className="login__body__row">
          <h2 className="login__body__row2"> Watch anywhere. Cancel anytime. </h2>
        </div>
        <div className="login__body__row">
          <h3 className="login__body__row2 row3"> Ready to watch? Enter your email to create or restart your membership. </h3>
        </div>
        <div className="login__body__row col">
          <input className="login__body__email" type="email" placeholder="Email address" />
          <button className="login__body__button"> TRY 30 DAYS FREE > </button>
        </div>
        <div className="login__body__row">
          <h3 className="login__body__row2 row3"> Only new members are eligible for this offer. </h3>
        </div>
      </div>
    </div>
  )
}

export default Login
