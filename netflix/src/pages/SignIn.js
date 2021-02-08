import React, { useState } from 'react'
import './SignIn.css';

function SignIn() {

  const [showAlert, setShowAlert] = useState(false);
  const [user, setUser] = useState(false);

  function handleSignIn(event) {
    event.preventDefault();
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
        setUser(true);
      }
    }
  }

  function handleRegister(event) {
    event.preventDefault();
  }

  return (
    <div className="signIn__root">
      <h1 className="signIn__header"> Sign In </h1>
      <form>
        <input id="email" type="mail" className="signIn__input__mail" placeholder="Email" />
        <div id="alert" className={`alertSignIn login__body__alert ${showAlert && "show__alert"}`} />
        <input type="password" className="signIn__input__password" placeholder="Password" />
        <button onClick={handleSignIn} type="submit" className="signIn__button"> Sign In </button>
        <h4 className="signIn__signUp"> 
          <span className="signIn__span__gray"> New to Netflix? </span>
          <span onClick={handleRegister} className="signIn__span__white"> Sign up now. </span>
        </h4>
      </form>
    </div>
  )
}

export default SignIn
