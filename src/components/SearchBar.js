import React, { useState } from 'react';



const SearchBar = (props) => {



const handleFormSubmit = (event) => {
    event.preventDefault();
}

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='form-row mb-5 mt-5'>
                <div className='col-12 '>
                <input  
                onChange={props.searchM} 
                type="text" 
                class="form-control" 
                placeholder="Search a movie"
                />
                </div>
            </div>
        </form>
    )
}


export default SearchBar