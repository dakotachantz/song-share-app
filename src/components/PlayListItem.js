import React, { Component } from 'react'

export default class PlayListItem extends Component {

    viewSongs = () => {
        console.log("did you get here", this.props.songs);
    }


    render() {
        let songs;
        songs = this.props.songs.map((song, index) => {
            return (
                <div className="row" key={index}>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="service-box">
                            <i className="fa fa-4x fa-music text-primary sr-icons"></i>
                            <h3>- {song.userName}</h3>
                            <p className="text-muted">Artist: {song.songArtist}</p>
                            <p className="text-muted">Song: {song.songTitle}</p>
                            <p className="text-muted">Notes: {song.songNotes}</p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {songs}
            </div>
        );
    }
}
