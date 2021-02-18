import React, { useState, useRef, useEffect} from 'react'
import { auth } from '../extras/firebase.js';
import './SignIn.css';
import SignUp from './SignUp.js';

function SignIn() {

  const [showAlert, setShowAlert] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    document.getElementsByClassName('login__button')[0].style.display = 'none';
    document.getElementsByClassName('login__banner')[0].style.cursor = 'pointer';
  }, [])

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
        auth.signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        ).then((res) => {
          console.log(res);
        }).catch((error) => {
          document.getElementById('alert__error').innerHTML = error.message;
          document.getElementsByClassName('signIn__input__password')[0].value = '';
          setShowAlert(true);
        });
      }
    }
  }

  return (
    <div className="signIn__root">
      {signUp ? <SignUp /> :
        <>
          <h1 className="signIn__header"> Sign In </h1>
          <form>
            <input ref={emailRef} id="email" type="mail" className="signIn__input__mail" placeholder="Email" />
            <div id="alert" className={`alertSignIn login__body__alert ${showAlert && "show__alert"}`} />
            <input ref={passwordRef} type="password" className="signIn__input__password" placeholder="Password" />
            <button onClick={handleSignIn} type="submit" className="signIn__button"> Sign In </button>
            <div id="alert__error" className={`alertSignIn alert__error login__body__alert ${showAlert && "show__alert"}`} />
            <h4 className="signIn__signUp"> 
              <span className="signIn__span__gray"> New to Netflix? </span>
              <span onClick={() => setSignUp(true)} className="signIn__span__white"> Sign up now. </span>
            </h4>
          </form>
        </>
      }
    </div>
  )
}

export default SignIn
