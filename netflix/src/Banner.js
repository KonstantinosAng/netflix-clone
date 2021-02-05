import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from 'axios';
import requests from './requests.js';

function Banner() {
  
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]);
      return request
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header className="banner"
      style={{backgroundImage: `url(${requests.baseUrl}${movie?.backdrop_path})`}}>
      <div className="banner__contents">
        <h1> {movie?.title || movie?.name || movie?.original_name} </h1>
        <div className="banner__buttons">
          <button className="banner__button"> Play </button> 
          <button className="banner__button"> My List </button> 
        </div>
        <h1 className="banner__description"> {movie?.overview} </h1>
      </div>
    </header>
  )
}

export default Banner
