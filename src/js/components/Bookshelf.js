import React from "react";

export default class Bookshelf extends React.Component {
    render() {
        var book = this.props.books[0];
        return (
            <div class="bookshelf">
                {book.title
                    /*<Book bookId={book.bookId} title={book.title} author={book.author} rating={book.rating} cover={book.cover}/>*/}
            </div>
        );
    }
}
