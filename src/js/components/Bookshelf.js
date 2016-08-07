import React, { Component, PropTypes } from 'react';

export default class Bookshelf extends Component {
    render() {
        const {books:[book], layout} = this.props;

        return (
            <div class={"bookshelf " + layout}>
                {book.title}
                {/*
                <div class="bookshelf-item">
                    <BookCard {...book}/>
                </div >
                 */}
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
