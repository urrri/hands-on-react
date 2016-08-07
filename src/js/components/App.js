import React, { Component } from 'react';

import Bookshelf from "./Bookshelf";
import Header from "./Header";
import Footer from "./Footer";

const zoom = 0.1;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //step 3.B add books from props to state, update usage
            cardZoom: 1
        };
    }

    render() {
        const {books} = this.props;
        const {cardZoom, layout} = this.state;
        return (
            <div class="app">
                <Header title="Bookshelf" onChangeZoom={this.changeZoom.bind(this)} onChangeLayout={this.changeLayout.bind(this)}/>
                <Bookshelf books={books} cardZoom={cardZoom} layout={layout}/>
                <Footer count={books.length}/>
            </div>
        );
    }

    //step 3.B - add onRemoveBook handler, filter books, apply back to state

    changeZoom(val) {
        const cardZoom = this.state.cardZoom + val * zoom;
        this.setState({cardZoom});
    }

    changeLayout(layout){
        this.setState({layout});
    }
}
