import React from 'react';
import Hero from './Hero';
import {Link} from 'react-router-dom';





const MovieCard = ({movie}) => {

  

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`
  return (
    <div className= "col-lg-3 col-md-3 col-2 my-4">
       <div className="card">
  <img src={posterUrl}  className="card-img-top" alt={movie.original_title} />
  <div className="card-body">
    <h5 className="card-title">{movie.original_title} </h5>
    
    <Link to={detailUrl} className="btn btn-primary">show details</Link>
  </div>
</div>
    </div>
   
  )
}


const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  return (
    <>
      {keyword ? <Hero text={title} /> : <Hero text="Search for a movie!" />}

      {resultsHtml && keyword ? (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      ) : (
        <></>
      )}

      {resultsHtml.length === 0 && keyword ? (
        <div className="container my-5 bg-success text-white rounded-3 shadow-lg p-5">
        <h1 className="text-center my-3">Sorry!</h1>
        <h2 className="text-center my-3">Result not found for {keyword}</h2>
        <p className="lead text-center my-3">Please Try Again!</p>
        </div>
      ) : (
        <></>
      )}

    </>
  );
};
export default SearchView;
