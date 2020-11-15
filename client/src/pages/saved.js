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
        console.log('buttons pressed');
        const bookID = event.target.childNodes[0].dataset.id;
        console.log(`trying to delete ${bookID}`);
        API.deleteSaved(bookID);
    }


    return (
        <div className="books-container">
            <h4>
                Saved Books
            </h4> 
            {console.log(savedBooks)}
            {savedBooks &&
            
            savedBooks.map((book) => {
                return <form onSubmit={submitDelete}>
                    <BookDisplay data={book}/>
                <button type="submit">Delete</button>
                </form>

            })}
        </div>
    )
}

export default Saved;