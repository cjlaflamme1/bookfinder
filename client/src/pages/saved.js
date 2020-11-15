import React, { useEffect, useState } from 'react';
import BookDisplay from '../components/bookDisplay';
import API from '../utils/api';

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        API.getSavedBooks().then((data) => {
            console.log(data.data);
            const newData = data.data;
            setSavedBooks({...savedBooks, newData});
        })
    }, [savedBooks])


    return (
        <div className="books-container">
            <h4>
                Saved Books
            </h4> 
            {savedBooks &&
            savedBooks.map((book) => {
                <BookDisplay data={book}/>

            })}
        </div>
    )
}

export default Saved;