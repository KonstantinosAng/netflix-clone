import React from 'react'
import './Footer.css';

function Footer() {

  function redirect__social(link) {
    window.open(link, '_blank');
  }

  return (
    <div className="footer">
      <div className="footer__social">
        <i onClick={() => redirect__social("https://www.facebook.com/NetflixGR/")} className="social fa fa-facebook-official" />
        <i onClick={() => redirect__social("https://www.instagram.com/Netflix/")} className="social fa fa-instagram" />
        <i onClick={() => redirect__social("https://www.youtube.com/channel/UCNG0bMYut0wL3C9BS5ffQXw")} className="social fa fa-youtube-play" />
      </div>
      <div className="footer__row">
        <div className="footer__col">
          <h5> Audio and Subtitles </h5>
          <h5> Media Centre </h5>
          <h5> Privacy </h5>
          <h5> Contact Us </h5>
        </div>
        <div className="footer__col">
          <h5> Audio Description </h5>
          <h5> Investor Relations </h5>
          <h5> Legal Notices </h5>
          <h4>  </h4>
        </div>
        <div className="footer__col">
          <h5> Help Centre </h5>
          <h5> Jobs </h5>
          <h5> Cookie Preferences </h5>
          <h4>  </h4>
        </div>
        <div className="footer__col">
          <h5> Gift Cards </h5>
          <h5> Terms of Use </h5>
          <h5> Corporate Information </h5>
          <h4>  </h4>
        </div>
      </div>
      <div className="footer__row">
        <button className="footer__button"> Service Code </button>
      </div>
      <div className="footer__row">
        <span> © 1997-2021 Netflix, Inc. </span>
        <span> &lrm; </span>
      </div>
    </div>
  )
}

export default Footer
