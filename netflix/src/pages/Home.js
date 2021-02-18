import React, { useState, useEffect } from 'react'
import './Home.css';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';

function Home() {

  const [showAlert, setShowAlert] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  function handleRedirect() {
    const mail = document.getElementById('email');
    if (mail.value === '') {
      setShowAlert(true);
      document.getElementById('alert').innerHTML = 'Email is required!';
      mail.style.borderBottom = '2px solid orange';
    } else {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(mail.value)) {
        document.getElementById('alert').innerHTML = 'Invalid email address!';
        mail.style.borderBottom = '2px solid orange';
        setShowAlert(true);
      } else {
        setShowAlert(false);
        mail.style.borderBottom = 'none';
        setSignUp(true);
      }
    }
  }
  
  return (
    <div className="login__root">
      <div className="login__banner">
        <img
        onClick={() => window.location.reload()}
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        />
        <button onClick={() => setSignIn(true)} className="login__button"> <h3> Sign In </h3> </button>
      </div>
      <div className="login__fade__top"></div>
      <div className="login__body">
        {signUp ? (<SignUp mail={document.getElementById('email').value} />) :
        signIn ? (<SignIn />) :
        ( <>
            <div className="login__body__row">
              <h1 className="login__body__header"> Unlimited Movies, TV shows, and more. </h1>
            </div>
            <div className="login__body__row">
              <h2 className="login__body__row2"> Watch anywhere. Cancel anytime. </h2>
            </div>
            <div className="login__body__row">
              <h3 className="login__body__row2 row3"> Ready to watch? Enter your email to create or restart your membership. </h3>
            </div>
            <div className="login__body__col">
              <div className="alert__row">
                <input id="email" className="login__body__email" type="email" placeholder="Email address" required />
                <button type="submit" onClick={handleRedirect} className="login__body__button"> TRY 30 DAYS FREE {`>`} </button>
              </div>
              <div className="alert__row">
                <div id="alert" className={`login__body__alert ${showAlert && "show__alert"}`} />
              </div>
            </div>
            <div className="login__body__row">
              <h3 className="login__body__row2 row3"> Only new members are eligible for this offer. </h3>
            </div>  
          </>
        )}
      </div>
    </div>
  )
}

export default Home
