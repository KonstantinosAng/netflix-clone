import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from './requests';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "")
      .then(url => {
        url = url.substr(0, 4) + url.substr(5);
        url = url.substr(url.indexOf("=")+1);
        setTrailerUrl(url+'?showinfo=0&enablejsapi=1&origin=http://localhost:3000');
      })
      .catch(error => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img
          key={movie.id}
          onClick={() => handleClick(movie)}
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          src={`${requests.baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
          alt={movie.name} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opt={opts} />}
    </div>
  )
}

export default Row
