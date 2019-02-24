import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-2 bg-dark text-white">
                <p>© Copyright 2019 Igor Sousa</p>
            </nav>
        )
    }
}