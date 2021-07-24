import React from "react";
import { useState } from "react";
import "./MovieList.css";
import "./MovieCard.css";

const MovieList = (props) => {
  const FavouriteComponent = props.favouritesComponent;

  const [popUpMovie, setPopupMovie] = useState({});
  const [clickState, setClickState] = useState(false);

  const getMovieDetails = async (movieName) => {
    const url = `https://www.omdbapi.com/?i=${movieName.imdbID}&apikey=2bc39733`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setPopupMovie(responseJson);
  };

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img
            src={movie.Poster}
            alt="movie"
            onClick={() => {
              getMovieDetails(movie);
              setClickState(!clickState);
            }}
          ></img>

          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
      <div className={clickState ? "movie-card active" : "movie-card"}>
        <div className="poster">
          <img src={popUpMovie.Poster} alt="Movie Poster" />
        </div>
        <div className="details">
          <h1 align="center">{popUpMovie.Title}</h1>
          <h4 align="center">Directed by: {popUpMovie.Director}</h4>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span>Year : {popUpMovie.Year}</span> &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
          &nbsp; &nbsp;
          <span>Runtime : {popUpMovie.Runtime}</span> &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp;
          <span>Language : {popUpMovie.Language}</span>
          <p>
            Genre: <br></br>
            {popUpMovie.Genre}
          </p>
          <p>
            Synopsis: <br></br>
            {popUpMovie.Plot}
          </p>
          <p>
            Cast:<br></br>
            {popUpMovie.Actors}
          </p>
          <p> Rating: {popUpMovie.imdbRating}/10</p>
        </div>
        <div className="close">
          <button
            type="button"
            className="btn-close"
            aria-label="close"
            onClick={() => setClickState(!clickState)}
          ></button>
        </div>
      </div>
      <div
        className={
          clickState ? "modals-overlay overlay-active" : "modals-overlay"
        }
      ></div>
    </>
  );
};

export default MovieList;
