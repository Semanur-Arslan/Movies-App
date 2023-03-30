import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';





function EditMovie(props) {

    const [edit, setEdit] = useState(
        {
            name: ' ',
            rating: ' ',
            overview: ' ',
            imageURL: ' '
        }

    );

    // CALL DATA FOR EDİT OPERATİON
    
    useEffect(() => {
        const id = window.location.pathname.replace("/edit/", "")
        async function fetchData() {
            let response = await axios.get(`http://localhost:3001/movies/${id}`);
            const MovieData = response.data
            setEdit({
                name: MovieData.name,
                rating: MovieData.rating,
                imageURL: MovieData.imageURL,
                overview: MovieData.overview
            })
        }

        fetchData()

    }, []);


    // INPUT CHANGE
    const onInputChange = (e) =>{

        setEdit({
            ...edit,
            [e.target.name] : e.target.value,
        
        })
    }



    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const name = edit.name;
        const rating = edit.rating;
        const overview = edit.overview;
        const imageURL = edit.imageURL

        const id = window.location.pathname.replace("/edit/", "")

        const updateMovie = {
            name:name,
            rating:rating,
            overview:overview,
            imageURL:imageURL
        }
        console.log(updateMovie)

        props.onEditMovie(id, updateMovie)

        navigate('/');
        navigate(0);

    }


    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <h5 className="mt-5 d-flex justify-content-center border-bottom border-warning p-2">Movie Editing</h5>
                <form onSubmit={handleFormSubmit} className="col-10  mt-5">
                    <div className="row">
                        <div className="mb-3 col-10">
                            <label htmlFor="exampleInputEmail1" className="form-label">Movie Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name='name'
                                value={edit.name}
                                onChange={onInputChange}
                                 />
                        </div>
                        <div className="mb-3 col-2">
                            <label htmlFor="exampleInputEmail1" className="form-label">Rating</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name='rating'
                                value={edit.rating}
                                onChange={onInputChange}
                                />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">İmg URL</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name='imageURL' value={edit.imageURL}
                        onChange={onInputChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Overview</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='overview' value={edit.overview}
                        onChange={onInputChange} ></textarea>
                    </div>

                    <button type="submit" className='btn btn-success mt-5 px-3 '>Edit</button>
                </form>
            </div>

        </div>
    )

};




export default EditMovie;
