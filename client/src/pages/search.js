import React, { useRef } from 'react';
import BookDisplay from '../components/bookDisplay';
import API from '../utils/api';

function Search() {
    const searchInputRef = useRef();
    const searchByRef = useRef();


    const submitSearch = (event) => {
        event.preventDefault();
        if(searchByRef === "Title") {
            API.searchByTitle(searchInputRef.current.value).then((res) => {
                console.log(res);
            }).catch(err => console.log(err));
        } else {
            API.searchByAuthor(searchInputRef.current.value).then((res) => {
                console.log(res);
            }).catch(err => console.log(err));
        }

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
                <BookDisplay />
            </div>
        </>
    )
}

export default Search;