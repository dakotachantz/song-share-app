import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header id="page-top" className="masthead parallax">
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1 id="homeHeading">Your Favorite Song Sharing App is now Here!</h1>
                        <hr />
                        <p>Song Share can help you share songs your friends should listen to!</p>
                        <a className="btn btn-primary btn-xl" href="#share">Share a song</a>
                    </div>
                </div>
            </header>
        )
    }
}
