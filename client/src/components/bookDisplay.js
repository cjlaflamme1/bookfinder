import React, { useEffect, useRef, useState } from 'react';

function BookDisplay(props) {


    return (
        <>

            <div className="single-book-display card" data-id={props.data.id}>
                {props.data.imageLinks &&
                    <img className="book-image card-img-top" src={props.data.imageLinks.thumbnail} />

                }
                <div className="card-body border">
                    <div className="book-title card-title"><span className="basic-card-heading">Title:</span> {props.data.title}</div>
                    <span className="border-bottom basic-card-heading">Author(s):</span>
                    {props.data.authors &&
                    props.data.authors.map((author) => {
                        return <div className="book-author card-subtitle">{author}</div>

                    })
                    }
                    <div className="book-description card-text border-top">{props.data.description}</div>

                </div>
                    <a className="book-link btn btn-primary" href={props.data.infoLink} target="_blank">Learn More Here</a>

            </div>
        </>
    )
}

export default BookDisplay;