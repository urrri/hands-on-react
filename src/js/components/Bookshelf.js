import React, { Component, PropTypes } from 'react';

import BookCard from "./BookCard"

export default class Bookshelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: props.books
        }
    }

    componentWillReceiveProps(newProps) {
        this.state.books = newProps.books.filter((book) => !newProps.filter || book.title.indexOf(newProps.filter) >= 0 || (book.author && book.author.indexOf(newProps.filter) >= 0) );
    }

    render() {
        const {cardZoom, layout, onRemoveBook} = this.props;
        const {books} = this.state;
        const cardStyle = {
            zoom: cardZoom
        };

        const cards = books.map((book) => {
            const {bookId} = book;
            return (
                <div key={bookId} class="bookshelf-item" style={cardStyle}>
                    <BookCard {...book}/>
                    <button class="delete" onClick={onRemoveBook.bind(null, bookId)}>&#x2716;</button>
                </div >
            );

        });
        return (
            <div class={"bookshelf " + layout}>
                {cards}
            </div>
        );
    }
}

Bookshelf.propTypes = {
    cardZoom: PropTypes.number,
    layout: PropTypes.string,
    onRemoveBook: PropTypes.func,
    books: PropTypes.arrayOf(PropTypes.shape({
            bookId: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string,
            rating: PropTypes.number,
            cover: PropTypes.string
        })
    )
};

Bookshelf.defaultProps = {
    onRemoveBook(){},
    cardZoom: 1
};
