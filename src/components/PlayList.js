import React, { Component } from 'react'
import PlayListItem from './PlayListItem';

export default class PlayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: []
        }
    }

    componentDidMount = () => {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ songs: data });
            console.log("state", this.state.songs);
        })
    }

    fetchData = (e) => {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ songs: data });
            console.log("fetched songs: ", data);
        })
    }

    render() {
        let songs = this.state.songs;
        return (
            <div id="playlist">
                <div className="playlist-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">Playlist</h2>
                                <hr className="primary" />
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.fetchData}>
                        <button className="btn btn-primary btn-xl">Update List</button>
                    </form>
                    <div className="container">
                        <PlayListItem songs={songs} />
                    </div>
                </div>
            </div>
        );
    };
};