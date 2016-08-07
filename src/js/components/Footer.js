import React, {PropTypes} from 'react';

const Footer = (props) => {
    return <footer class="footer">Total: {props.count}</footer>
};

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;
