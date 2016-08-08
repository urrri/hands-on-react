import React, { Component } from 'react';

import Bookshelf from "./Bookshelf";
import Header from "./Header";
import Footer from "./Footer";

const zoom = 0.1;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [...this.props.books],
            cardZoom: 1,
            layout:'grid',
            filter:''
        };
        this.filterBooks = this.filterBooks.bind(this);
    }

    render() {
        const {books, cardZoom, layout, filter} = this.state;
        return (
            <div class="app">
                <Header title="Bookshelf" onChangeZoom={this.changeZoom.bind(this)} onChangeLayout={this.changeLayout.bind(this)} onChangeSearch={this.filterBooks.bind(this)}/>
                <Bookshelf books={books} cardZoom={cardZoom} layout={layout} onRemoveBook={this.removeBook.bind(this)} filter={filter}/>
                <Footer count={books.length}/>
            </div>
        );
    }

    removeBook(bookId) {
        const books = this.state.books.filter((book) => book.bookId !== bookId);
        this.setState({books});
    }

    changeZoom(val) {
        const cardZoom = this.state.cardZoom + val * zoom;
        this.setState({cardZoom});
    }

    changeLayout(layout){
        this.setState({layout});
    }

    filterBooks(e){
        const filter = e.target.value;
        this.setState({filter});
    }
}
