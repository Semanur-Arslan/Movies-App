import React, { useState } from 'react';



const SearchBar = (props) => {



const handleFormSubmit = (event) => {
    event.preventDefault();
}

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='form-row  mt-5'>
                <div className='col-12 '>
                <input  
                onChange={props.searchM} 
                type="text" 
                className='form-control' 
                placeholder="Search a movie"
                />
                </div>
            </div>
        </form>
    )
}


export default SearchBar