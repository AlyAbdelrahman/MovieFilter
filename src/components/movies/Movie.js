// import data from '../data';
import React from 'react';


 const Movie = (props) => {
    // const {data}  = props;
    return (
  
      <article key={props.imdbID} className="card">
        <header className="card__title">
          <h6>{props.Title}</h6>
          
        </header>
        <figure className="card__thumbnail">
          <img src={props.Poster === 'N/A' ? "https://phadvocates.org/wp-content/themes/cardinal/images/default-thumb.png" : props.Poster} alt='https://phadvocates.org/wp-content/themes/cardinal/images/default-thumb.png' />
        </figure>
        <main className="card__description">
        <h3>{props.Type}</h3>
          {props.Year}
        </main>
        <a href={props.Poster} className="button">Call to Action</a>
      </article>
  
  
    )
  }

  export default Movie;
  