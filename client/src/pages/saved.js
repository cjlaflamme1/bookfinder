import React from 'react';
import BookDisplay from '../components/bookDisplay';

function Saved() {


    return (
        <div className="books-container">
            <h4>
                Saved Books
            </h4> 
            <BookDisplay />
        </div>
    )
}

export default Saved;