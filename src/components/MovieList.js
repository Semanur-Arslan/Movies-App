import React from 'react';

const MovieList = (props) => {

  
    return (
        <div className='row'>

            {props.movies.map((movie) => (
                <div className='col-lg-4' key={movie.id}>
                    <div className='card'>
                        <img className='card-img-top' src={movie.imageURL} />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>{movie.name}</h5>
                        <p className='card-text textWidth'>{movie.overview}</p>
                        <div className='d-flex justify-content-between align-items-center' >
                        <button   type="button"  onClick={(event) => props.deleteM(movie)} className="btn btn-outline-danger">Delete</button>
                        <h3><span className='badge bg-warning text-dark'>{movie.rating}</span></h3>

                        </div>
                    </div>
                </div>

            ))}
        </div>
    )

   
};

export default MovieList