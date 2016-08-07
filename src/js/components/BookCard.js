import React, { Component } from 'react';

export default class BookCard extends Component {
    render() {
        const {title, author, rating, cover} = this.props;
        return (
            <div class="book">
                <div class="title" title={title}>{title}</div>
                {(author) ? <div class="author">by {author}</div> : <div>&nbsp;</div>}
                <div class="rating">{rating}</div>
                <div class="cover"><img src={cover}/></div>
            </div>
        );
    }
}
