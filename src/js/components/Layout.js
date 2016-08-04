import React from "react";

import Bookshelf from "./Bookshelf";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <div class="header">header</div>
                <Bookshelf books={this.props.books}/>
            </div>
        );
    }
}
