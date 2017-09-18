import React from 'react'
import reactScroll from "react-scroll";

var Link = reactScroll.Link;

export default () => {
    return (
        <header id="page-top" className="masthead parallax">
            <div className="header-content">
                <div className="header-content-inner">
                    <h1 id="homeHeading">Your Favorite Song Sharing App is now Here!</h1>
                    <hr />
                    <p>Song Share can help you share songs your friends should listen to!</p>
                    <Link className="btn btn-primary btn-xl"
                        to="share"
                        activeClass="activeScroll"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>Share a song</Link>
                </div>
            </div>
        </header>
    )
}
