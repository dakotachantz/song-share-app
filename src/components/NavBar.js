import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <a className="navbar-brand" href="#page-top">Song Share</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link navLink" href="#share">Add Song</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navLink" href="#playlist">View Playlist</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
