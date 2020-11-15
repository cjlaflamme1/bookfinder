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


    return (
        <div className="books-container">
            <h4>
                Saved Books
            </h4> 
            {console.log(savedBooks)}
            {savedBooks &&
            
            savedBooks.map((book) => {
                return <BookDisplay data={book}/>

            })}
        </div>
    )
}

export default Saved;