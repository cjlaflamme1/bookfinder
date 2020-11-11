import React from 'react';
import BookDisplay from '../components/bookDisplay';

function Search() {


    return (
        <>
            <div className="search-container">
                <h4>
                    Book Search
            </h4>
                <form>
                    <input />
                    <br />
                    <label for="searchMethod">Search by:</label>
                    <select name="searchMethod" id="searchMethod">
                        <option value="Title">Title</option>
                        <option value="Author">Author</option>
                    </select>
                    <button>Search</button>
                </form>
            </div>
            <div className="books-container">
                <BookDisplay />
            </div>
        </>
    )
}

export default Search;