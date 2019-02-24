import React, { Component } from 'react';
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-white rounded">
                <img src="foto.jpg" alt="..." class="rounded-circle"></img>
                <div className="content-text">
                    <a className="navbar-brand font-weight-bold">Igor Sousa</a>
                    <a className="navbar-brand">Estudante</a>
                </div>
                <div className="social-content">
                    <a href="https://github.com/igorsousa0"><img src="github.png" alt="..." class="rounded-github"></img></a>
                </div>
            </nav>
        )
    }
}