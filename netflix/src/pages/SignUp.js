import React, { useState, useRef, useEffect } from 'react';
import { auth } from '../extras/firebase.js';
import SignIn from './SignIn.js';
import './SignUp.css';

function SignUp({ mail }) {

  const [showAlert, setShowAlert] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSignUp(event) {
    event.preventDefault();
    const mail_element = document.getElementById('email');
    if (mail === '') {
      setShowAlert(true);
      document.getElementById('alert').innerHTML = 'Email is required!';
      mail_element.style.borderBottom = '2px solid orange';
    } else {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(mail)) {
        document.getElementById('alert').innerHTML = 'Invalid email address!';
        mail_element.style.borderBottom = '2px solid orange';
        setShowAlert(true);
      } else {
        setShowAlert(false);
        mail_element.style.borderBottom = 'none';
        register();
      }
    }
  }

  function register() {    
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((user) => {
      console.log(user);
    }).catch((error) => {
      document.getElementById('alert__error').innerHTML = error.message;
      document.getElementsByClassName('signUp__input__password')[0].value = '';
      setShowAlert(true);
    });
  }

  useEffect(() => {
    document.getElementById('email').value = mail || null;
    document.getElementsByClassName('login__button')[0].style.display = 'none';
    document.getElementsByClassName('login__banner')[0].style.cursor = 'pointer';
  }, [])

  return (
    <div className="signUp__root">
      {signIn ? <SignIn /> :
      <>
        <h1 className="signUp__header"> Sign Up </h1>
        <form>
          <input ref={emailRef} id="email" type="mail" className="signUp__input__mail" placeholder="Email" />
          <div id="alert" className={`alertSignUp login__body__alert ${showAlert && "show__alert"}`} />
          <input ref={passwordRef} type="password" className="signUp__input__password" placeholder="Password" />
          <button onClick={handleSignUp} type="submit" className="signUp__button"> Sign Up </button>
          <div id="alert__error" className={`alertSignUp alert__error login__body__alert ${showAlert && "show__alert"}`} />
          <h4 className="signIn__signUp"> 
            <span className="signUp__span__gray"> Already have an account? </span>
            <span onClick={() => setSignIn(true)} className="signUp__span__white"> Sign in now. </span>
          </h4>
        </form>
      </>
      }
    </div>
  )
}

export default SignUp
