import React from "react";
import serialize from "form-serialize";
import { useNavigate } from "react-router-dom";





function AddMovie(props) {

    const navigate = useNavigate();
    


    const handleFormSubmit =(e) => {
        e.preventDefault(); 
        const newMovieobj = serialize(e.target, { hash: true }); 
        console.log(newMovieobj);
        props.onAddMovie(newMovieobj);
        
         navigate('/');
         navigate(0); 
        
         

        
    }

    
   
       
   

   

   
 
  



    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <h5 className="mt-5 d-flex justify-content-center border-bottom border-warning p-2">Fill The Form To Add Movie</h5>
                <form onSubmit={handleFormSubmit} className="col-10  mt-5">
                    <div className="row">
                        <div className="mb-3 col-10">
                            <label htmlFor="exampleInputEmail1" className="form-label">Movie Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name='name' />
                        </div>
                        <div className="mb-3 col-2">
                            <label htmlFor="exampleInputEmail1" className="form-label">Rating</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name='rating' />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">İmg URL</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name='imageURL' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Oweview</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='overview'></textarea>
                    </div>

                    <button  type="submit" className='btn btn-success mt-5 px-3 '>Add Movie</button>
                </form>
            </div>

        </div>
    )

};




export default AddMovie;
