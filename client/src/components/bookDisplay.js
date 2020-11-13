import React from 'react';

function BookDisplay(props) {





    return(
        <>
        <div className="single-book-display">
            <img className="book-image" />
            <div className="book-title"></div>
            <div className="book-author"></div>
            <div className="book-description"></div>
            <a className="book-link" href="#">Learn More Here</a>
        </div>
        </>
    )
}

export default BookDisplay;