import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from 'axios';
import requests from '../extras/requests.js';
import useSWR from 'swr';

function Banner() {
  
  const [movie, setMovie] = useState([]);
  
  useSWR(requests.fetchNetflixOriginals, (url) => axios.get(url).then((respond) => setMovie(respond.data.results[Math.floor(Math.random()*respond.data.results.length - 1)])));

  function truncate_string(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className="banner"
      style={{backgroundImage: `url(${requests.baseUrl}${movie?.backdrop_path})`}}>
      <div className="banner__contents">
        <h1 className="banner__title"> {movie?.title || movie?.name || movie?.original_name} </h1>
        <div className="banner__buttons">
          <button className="banner__button"> Play </button> 
          <button className="banner__button"> My List </button> 
        </div>
        <h1 className="banner__description"> {truncate_string(movie?.overview, 150)} </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  )
}

export default Banner
