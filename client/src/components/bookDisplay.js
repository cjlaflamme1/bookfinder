import React, { useEffect, useRef, useState } from 'react';

function BookDisplay(props) {


    return (
        <>

            <div className="single-book-display card" data-id={props.data.id}>
                {props.data.imageLinks &&
                    <img className="book-image card-img-top" src={props.data.imageLinks.thumbnail} />

                }
                <div className="card-body">
                    <div className="book-title card-title">{props.data.title}</div>
            <div className="book-author card-subtitle">{props.data.authors[0]} || {props.data.author}</div>
                    <div className="book-description card-text">{props.data.description}</div>

                </div>
                    <a className="book-link btn btn-primary" href={props.data.infoLink} target="_blank">Learn More Here</a>

            </div>
        </>
    )
}

export default BookDisplay;