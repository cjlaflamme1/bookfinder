import React, { useRef, useState, useEffect } from 'react';
import BookDisplay from '../components/bookDisplay';
import API from '../utils/api';

function Search() {
    const searchInputRef = useRef();
    const searchByRef = useRef();
    const [books, setBooks] = useState([])

    const submitSave = (event) => {
        event.preventDefault();
        console.log(event.target.childNodes[0].dataset.id);
        const bookID = event.target.childNodes[0].dataset.id;
        API.searchByID(bookID).then((data) => {
            console.log(data);
            const { data: { id, volumeInfo: { authors:[author], description, imageLinks, infoLink, subtitle, title }}} = data;
            const newBook = { id, title, author, description, imageLinks, infoLink, subtitle};
            console.log(newBook);
            API.addNewBook(newBook);
        })
    }

        // Set useState to set state of books to an array of objects.

    const submitSearch = (event) => {
        event.preventDefault();
   
        if(searchByRef.current.value === "Title") {
            API.searchByTitle(searchInputRef.current.value).then((res) => {
                
                const newBooks = [];
                // console.log(res);
                const { data: { items}} = res;
                items.map(({ id, volumeInfo }) => {
                    const { authors:[author], description, imageLinks, infoLink, subtitle, title } = volumeInfo;
                    newBooks.push({id, author, description, imageLinks, infoLink, subtitle, title})
                })
                console.log(newBooks);
                setBooks(newBooks);

            }).catch(err => console.log(err));
        } else {
            API.searchByAuthor(searchInputRef.current.value).then((res) => {
                const newBooks = [];
                // console.log(res);
                const { data: { items}} = res;
                items.map(({ id, volumeInfo }) => {
                    const { authors:[author], description, imageLinks, infoLink, subtitle, title } = volumeInfo;
                    newBooks.push({id, author, description, imageLinks, infoLink, subtitle, title})
                })
                console.log(newBooks);
                setBooks(newBooks);
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
                  return  <form onSubmit={submitSave}>
                     <BookDisplay data={book} />
                <button type="submit">Save</button>
                </form>
                })
                }
            </div>
        </>
    )
}

export default Search;