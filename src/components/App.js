import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

const App = () => {
    

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <SearchBar/>
                </div>
            </div>

            <MovieList/>
        </div>
    )
}

export default App;