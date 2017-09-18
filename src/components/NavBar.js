import React, { Component } from 'react';
import reactScroll from "react-scroll";

var Link = reactScroll.Link;

export default class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: "transparent",
            color: "rgba(255, 255, 255, 0.9)"
        }
    }
    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = (e) => {
        const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        console.log('scrollTop: ', scrollTop);

        if (scrollTop < 20) {
            this.setState({ backgroundColor: "transparent", color: "rgba(255, 255, 255, 0.7)" })
        } else {
            this.setState({ backgroundColor: "white", color: "#f91e56" })
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top"
                style={{ backgroundColor: this.state.backgroundColor }}
                id="mainNav">
                <Link className="navbar-brand"
                    to="page-top"
                    style={{ color: this.state.color }}
                    activeClass="activeScroll"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} >Song Share</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link navLink"
                            to="share"
                            style={{ color: this.state.color }}
                            activeClass="activeScroll"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>Add Song</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navLink"
                            to="playlist"
                            style={{ color: this.state.color }}
                            activeClass="activeScroll"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>View Playlist</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
