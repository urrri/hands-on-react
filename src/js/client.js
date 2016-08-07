import React from "react";
import ReactDOM from "react-dom";

import "./../css/app.css";

import App from "./components/App";

import books from "./data/books"
// convert data to client format
const bookList = Object.keys(books.books).map(key => {
    const {book_id:bookId, title, author_fl:author, rating, cover} = books.books[key];
    return {bookId, title, author, rating, cover};
});

const app = document.getElementById('app');
ReactDOM.render(<App books={bookList}/>, app);
