import React, { useEffect, useState } from 'react';
import BookDisplay from '../components/bookDisplay';
import API from '../utils/api';

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        API.getSavedBooks().then((data) => {
            console.log(data.data);
            
            setSavedBooks(data.data);
        })
    }, [])

    const submitDelete = (event) => {
        event.preventDefault();

        const bookID = event.target.childNodes[0].dataset.id;
        
        API.deleteSaved(bookID);

        API.getSavedBooks.then((data) => {
            setSavedBooks(data.data);
        })
    }


    return (
        <>
        <div className=" d-flex justify-content-center border">
            <h4>
                Saved Books
            </h4>
            </div>
        <div className="books-container row"> 
            {console.log(savedBooks)}
            {savedBooks &&
            
            savedBooks.map((book) => {
                return <form onSubmit={submitDelete} className="col-12 col-md-4 my-2">
                    <BookDisplay data={book}/>
                <button type="submit"  className="btn btn-info">Delete</button>
                </form>

            })}
        </div>
        </>
    )
}

export default Saved;