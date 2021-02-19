import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../extras/requests';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import VideoDescription from './VideoDescription.js';
// import useSWR from 'swr';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movie__, setMovie__] = useState([]);
  var scrollAmount = 0;
  const image = isLargeRow?'.row__poster':'.row__posterLarge';

  // useSWR(fetchUrl, (url) => axios.get(url).then((respond) => setMovies(respond.data.results)));
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
    width: "640",
    playerVars: {
    autoplay: 1,
    start: 1
    }
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
        setMovie__(movie);
      })
      .catch(error => console.log(error));
    }
  };

  function truncate_string(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const handleVideo = () => {
    document.getElementsByClassName("youtubeVideo").play();
  }

  function handleShowNavCarret() {
    document.getElementById('leftCarret').style.display = 'block';
  }

  function handleHideNavCarret() {
    document.getElementById('leftCarret').style.display = 'block';
  }

  function sliderScrollLeft() {
    document.querySelector(`.${title.split(' ')[0]}`).scrollTo({
      top: 0,
      left: scrollAmount -= document.querySelector(image).clientWidth*5,
      behavior: "smooth",
    });
  }

  function sliderScrollRight() {
    document.querySelector(`.${title.split(' ')[0]}`).scrollTo({
      top: 0,
      left: scrollAmount += document.querySelector(image).clientWidth*5,
      behavior: "smooth",
    });
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row__posters ${title.split(' ')[0]}`}>
        {movies?.map(movie => (
          <img
          key={movie?.id}
          onClick={() => handleClick(movie)}
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          src={`${requests.baseUrl}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`} 
          alt={movie?.name} />
        ))}
        <div onClick={sliderScrollLeft} onMouseOver={handleShowNavCarret} onMouseOut={handleHideNavCarret} className={`switchRowleft ${isLargeRow && "switchLargeRow"}`}>
          <a onClick={sliderScrollLeft} id="leftCarret" className="switch"> {`<`} </a>
        </div>
        <div onClick={sliderScrollRight} onMouseOver={handleShowNavCarret} onMouseOut={handleHideNavCarret} className={`switchRowRight ${isLargeRow && "switchLargeRow"}`}>
          <a onClick={sliderScrollRight} id="rightCarret" className="switch"> {`>`} </a>
        </div>
      </div>
      <div className="row__popup">
        {trailerUrl && <YouTube videoId={trailerUrl} opt={opts} onReady={handleVideo} className="youtubeVideo" />}
        <VideoDescription show={trailerUrl} title={movie__?.title || movie__?.name || movie__?.original_name} desc={truncate_string(movie__?.overview, 400)}/>
      </div>
    </div>
  )
}

export default Row
