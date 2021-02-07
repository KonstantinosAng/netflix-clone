import React from 'react'
import './VideoDescription.css';

function VideoDescription({ show, title, desc }) {
  return (
    <div className={`row__Popup ${show && "row__showPopup"}`}>
      <h1 className="popup__title"> { title } </h1>
      <h3 className="popup__desc"> { desc } </h3>
    </div>
  )
}

export default VideoDescription
