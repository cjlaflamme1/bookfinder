import React, { useRef, useState, useEffect } from 'react';
import BookDisplay from '../components/bookDisplay';
import API from '../utils/api';

function Search() {
    const searchInputRef = useRef();
    const searchByRef = useRef();
    const [books, setBooks] = useState([])

 

        // Set useState to set state of books to an array of objects.

    const submitSearch = (event) => {
        event.preventDefault();
   
        if(searchByRef.current.value === "Title") {
            API.searchByTitle(searchInputRef.current.value).then((res) => {
                
                const newBooks = [];
                // console.log(res);
                const { data: { items}} = res;
                items.map(({ volumeInfo }) => {
                    const { authors:[author], description, imageLinks, infoLink, subtitle, title } = volumeInfo;
                    newBooks.push({author, description, imageLinks, infoLink, subtitle, title})
                })
                console.log(newBooks);
                setBooks(newBooks);

            }).catch(err => console.log(err));
        } else {
            API.searchByAuthor(searchInputRef.current.value).then((res) => {
                console.log(res);
            }).catch(err => console.log(err));
        }
        // Set this submitSearch function to fill the state of the books array with the retried items.
        //  THEN, set the props for the bookdisplay as the current state.
        // return;
    }

    return (
        <>
            <div className="search-container">
                <h4>
                    Book Search
            </h4>
                <form onSubmit={submitSearch}>
                    <input name="searchContent" ref= {searchInputRef}/>
                    <br />
                    <label for="searchMethod">Search by:</label>
                    <select name="searchMethod" id="searchMethod" ref={searchByRef}>
                        <option value="Title" >Title</option>
                        <option value="Author" >Author</option>
                    </select>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="books-container">
                {books && 
                books.map((book) => {
                    return <BookDisplay data={book} />
                })
                }
            </div>
        </>
    )
}

export default Search;