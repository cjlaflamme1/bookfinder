import React, { useEffect, useRef, useState } from 'react';

function BookDisplay(props) {


    return (
        <>
        {console.log("BookDisplay rendered")}
            <div className="single-book-display" data-id={props.data.id}>
                {props.data.imageLinks.thumbnail &&
                <img className="book-image" src={props.data.imageLinks.thumbnail} />
                
                }
                <div className="book-title">{props.data.title}</div>
                <div className="book-author">{props.data.authors}</div>
                <div className="book-description">{props.data.description}</div>
                <a className="book-link" href={props.data.infoLink} target="_blank">Learn More Here</a>
                
            </div>
        </>
    )
}

export default BookDisplay;