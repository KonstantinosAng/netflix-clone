import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "../extras/firebase";
import { login } from "../extras/userSlice";
import "./Home.css";
import Logo from "../assets/logo.svg";

function Home() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            uid: result.user.uid,
            email: result.user.email,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login__root">
      <div className="login__banner">
        <img
          loading="lazy"
          onClick={() => window.location.reload()}
          className="login__logo"
          src={Logo}
          alt="Netflix Logo"
        />
        <button onClick={handleLogin} className="login__button">
          <h3> Sign In with Google </h3>
        </button>
      </div>
      <div className="login__fade__top"></div>
      <div className="login_body_container">
        <div className="login__body">
          <div className="login__body__row">
            <h1 className="login__body__header">
              Unlimited Movies, TV shows, and more.
            </h1>
          </div>
          <div className="login__body__row">
            <h2 className="login__body__row2">
              Watch anywhere. Cancel anytime.
            </h2>
          </div>
          <div className="login__body__row">
            <h3 className="login__body__row2 row3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
          </div>
          <div className="login__body__col">
            <div className="alert__row">
              <input
                id="email"
                className="login__body__email"
                type="email"
                placeholder="Email address"
                required
              />
              <button type="submit" className="login__body__button">
                {" "}
                TRY 30 DAYS FREE {`>`}{" "}
              </button>
            </div>
          </div>
          <div className="login__body__row">
            <h3 className="login__body__row2 row3">
              {" "}
              Only new members are eligible for this offer.{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="disclaimer">
        <div className="disclaimer__box">
          Disclaimer: This is not the original Netflix. This is just a portfolio
          copy.
        </div>
      </div>
    </div>
  );
}

export default Home;
