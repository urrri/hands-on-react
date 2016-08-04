import React, { Component } from 'react';

import Bookshelf from "./Bookshelf";

export default class App extends Component {
    render() {
        const {books} = this.props;
        return (
            <div>
                {/* begin Header.js */}
                <header class="header">Bookshelf</header>
                {/* end Header.js */}
                <Bookshelf books={books}/>
            </div>
        );
    }
}
