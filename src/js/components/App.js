import React, { Component } from 'react';

import Bookshelf from "./Bookshelf";
import Header from "./Header";
// step 1.A - import Footer

const zoom = 0.1;

export default class App extends Component {
    //step 3.A add constructor, init state, add cardZoom = 1
    //step 3.B add books from props to state, update usage

    render() {
        const {books} = this.props;
        const {layout} = this.state || {};
        return (
            <div class="app">
                <Header title="Bookshelf" onChangeLayout={this.changeLayout.bind(this)}/>
                <Bookshelf books={books} layout={layout}/>
                {/* step 1.A - begin Footer.js */}
                <footer class="footer">Total: 1</footer>
                {/* end Footer.js */}
            </div>
        );
    }

    //step 3.A - add onChangeZoom handler, update cardZoom on state

    //step 3.B - add onRemoveBook handler, filter books, apply back to state

    changeLayout(layout) {
        this.setState({layout});
    }
}
