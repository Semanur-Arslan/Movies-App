import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
import AddMovie from './AddMovie';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';




const App = () => {
    const [deger, setDeger] = useState(
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
    async function fetchData() {
        let response = await axios.get('http://localhost:3001/movies');
        setDeger({ movies: response.data })
    }

    useEffect(() => {
        fetchData();
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
    function deleteMovie(movie) {
        axios.delete(`http://localhost:3001/movies/${movie.id}`)
        const newMovieList = this.movies.filter(
            m => m.id !== movie.id
        );
        setDeger({
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

    //FILTER FUNCTİON
    let filterMovied = deger.movies.filter(
        (movie) => {
            if (idea === '') {
                return movie
            } else {
                return movie.name.toLowerCase().indexOf(idea.idea.toLowerCase()) !== -1
            }
        }
    );

    // ADD MOVİE FUNCTİON
    let movieAdd = async (movie) => {
        await axios.post('http://localhost:3001/movies/', movie);
        setDeger({
            movies: this.movies.concat([movie])
        });

    }


    
 
     

    return (
        <Router>
            <Routes>

                <Route path='/' element={
                    <React.Fragment>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-10'>
                                    <SearchBar
                                        searchM={searchMovie} />
                                </div>
                                <div className='col-lg-2 '>
                                    <Link to='/add' type="button" className='btn btn-success mt-5 px-3 float-end '>Add Movie</Link>
                                </div>
                            </div>

                            <MovieList
                                movies={filterMovied}
                                deleteM={deleteMovie} />
                        </div>
                    </React.Fragment>
                }>

                </Route>

                <Route  path='add' element={<AddMovie
                onAddMovie={(movie) => {movieAdd(movie)}}
                />} />

            </Routes>
        </Router >
    );

};





export default App;
