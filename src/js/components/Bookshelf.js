import React, { Component } from 'react';

export default class Bookshelf extends Component {
    render() {
        const {bookId, title, author, rating, cover} = this.props.books[0];
        return (
            <div class="bookshelf">
                {title}
                {/*<BookCard bookId={bookId} title={title} author={author} rating={rating} cover={cover}/>*/}
            </div>
        );
    }
}
