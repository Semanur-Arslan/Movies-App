import React from "react";


function AddMovie() {


    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <h5 className="mt-5 d-flex justify-content-center border-bottom border-warning p-2">Fill The Form To Add Movie</h5>
                <form onSubmit={handleFormSubmit} className="col-10  mt-5">
                    <div className="row">
                        <div class="mb-3 col-10">
                            <label for="exampleInputEmail1" class="form-label">Movie Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" />
                        </div>
                        <div class="mb-3 col-2">
                            <label for="exampleInputEmail1" class="form-label">Rating</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">İmg URL</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Oweview</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="submit" className='btn btn-success mt-5 px-3 '>Add Movie</button>
                </form>
            </div>

        </div>
    )

};




export default AddMovie;