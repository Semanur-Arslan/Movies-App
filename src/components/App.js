import React, { useState, useEffect }  from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';

const App = () => {
    const [değer, setDeger] = useState(
        {
            "movies": []
        }
    );


// data call (fetch)
    //  useEffect(async() => {
    //     const baseURL = 'http://localhost:3003/movies';
    //     const response = await fetch(baseURL);
    //     console.log(response);
    //     const data = await response.json();
    //     console.log(data)
    //     setDeger({movies : data})
    //   }, []);

// data call (axios)
     useEffect(async() => {
        const response = await axios.get('http://localhost:3003/movies');
        console.log(response);
        setDeger({movies : response.data})
      }, []);


// DELETE FUNCTİON
    //  function deleteMovie (movie) {
    //     const newMovieList = this.movies.filter(
    //         m => m.id !== movie.id
    //     );
    //     setDeger ({
    //         movies: newMovieList
    //     });

    // };


    // DELETE FUNCTİON(axios)
    function deleteMovie (movie) {
        axios.delete(`http://localhost:3003/movies/${movie.id}`)
        const newMovieList = this.movies.filter(
            m => m.id !== movie.id
        );
        setDeger ({
            movies: newMovieList
        });

    };

//SEARCH STATE AND FUNCTİON
const [idea, setIdea] = useState('');

    function searchMovie(event) { 
        
        setIdea({
            idea: event.target.value
        });
       
    };


    let filterMovied = değer.movies.filter(
        (movie) => {
            if(idea ===''){
               return movie 
            }else{
                return movie.name.toLowerCase().indexOf(idea.idea.toLowerCase()) !== -1
            }
        }
    );

      
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <SearchBar 
                    searchM={searchMovie}/>
                </div>
            </div>

            <MovieList
                movies={filterMovied}
                deleteM={deleteMovie}/>
        </div>
    );

};





export default App;