import React, {PropTypes} from 'react';

const Header = (props) => {
    return (
        <header class="header">
            {props.title}
            <input onChange={props.onChangeSearch} placeholder="Find Book" type="search"/>
            <button onClick={props.onChangeZoom.bind(null, 1)}>+</button>
            <button onClick={props.onChangeZoom.bind(null, -1)}>&minus;</button>
            <button onClick={props.onChangeLayout.bind(null, "list")}>List</button>
            <button onClick={props.onChangeLayout.bind(null, "grid")}>Grid</button>
        </header>
    );
    function inc() {

    }
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onChangeZoom: PropTypes.func.isRequired,
    onChangeLayout: PropTypes.func.isRequired
};

Header.defaultProps = {
    onChangeLayout: ()=>{}
};


export default Header;
