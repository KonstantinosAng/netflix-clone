import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__social">
        <i className="social fa fa-facebook-official" />
        <i className="social fa fa-instagram" />
        <i className="social fa fa-youtube-play" />
      </div>
      <div className="footer__row">
        <h5> Audio and Subtitles </h5>
        <h5> Audio Description </h5>
        <h5> Help Centre </h5>
        <h5> Gift Cards </h5>
      </div>
      <div className="footer__row">
        <h5> Media Centre </h5>
        <h5> Investor Relations </h5>
        <h5> Jobs </h5>
        <h5> Terms of Use </h5>
      </div>
      <div className="footer__row">
        <h5> Privacy </h5>
        <h5> Legal Notices </h5>
        <h5> Cookie Preferences </h5>
        <h5> Corporate Information </h5>
      </div>
      <div className="footer__row">
        <h5> Contact Us </h5>
      </div>
    </div>
  )
}

export default Footer
