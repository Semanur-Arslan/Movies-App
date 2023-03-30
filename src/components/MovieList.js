import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {


    // Overview Length Function
     const turuncateOverview = (string, maxLength) =>{
         if(!string) return null;
         if(string.length <= maxLength) return string;
         if(string.length > maxLength) return `${string.substring(0, maxLength)} ...`
         
     }

     
    return (
        <div className='row'>

            {props.movies.map((movie) => (
                <div className='col-lg-4 ' key={movie.id}>
                    <div className='card mt-5'>
                        <img alt="movie img" className='card-img-top' src={movie.imageURL} />
                    </div>
                    <div className='card-body border'>
                        <h5 className='card-title'>{movie.name}</h5>
                        <p className='card-text'>{turuncateOverview(movie.overview, 150)}</p>
                        <div className='d-flex bd-highlight ' >
                        <h3><span className='me-auto p-2 bd-highlight badge bg-warning text-dark'>{movie.rating}</span></h3>
                        <Link to={`edit/${movie.id}`} type='button' className='ms-auto p-2 bd-highlight btn btn-outline-success'>Edit</Link>
                        <button  type="button"  onClick={(event) => props.deleteM(movie)} className="ms-2 p-2 bd-highlight btn btn-outline-danger ">Delete</button>
                        
                        

                        </div>
                    </div>
                </div>

            ))}
        </div>
    )

   
};

export default MovieList