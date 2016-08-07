import React, { Component, PropTypes } from 'react';

export default class BookCard extends Component {
    render() {
        const {title, author, rating, cover} = this.props;
        return (
            <div class="book">
                <div class="title" title={title}>{title}</div>
                {(author) ? <div class="author">by {author}</div> : <div>&nbsp;</div>}
                <div class={"rating rating-" + rating}>{rating}</div>
                <div class="cover"><img src={cover}/></div>
            </div>
        );
    }
}

BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    rating: PropTypes.number,
    cover: PropTypes.string
};
