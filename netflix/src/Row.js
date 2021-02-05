import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from './requests';
import "./Row.css";
import YouTube from 'react-youtube';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
    autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img
          key={movie.id}
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          src={`${requests.baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
          alt={movie.name} />
        ))}
      </div>
      <YouTube videoId={trailerUrl} opt={opts} />
    </div>
  )
}

export default Row
