import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './LeftNavigation.css';

class LeftNavigation extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="main-nav">
                <div className="main-links">
                    <Link to="/portfolio" >портфолио</Link>
                    <Link  to="/">главная</Link>
                    <Link  to="/about">инфа</Link>
                </div>
            </div>
        );
    }
}

export default LeftNavigation;