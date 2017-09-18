import React, { Component } from 'react'

export default class PlayListItem extends Component {

    render() {
        let songs;
        songs = this.props.songs.map((song, index) => {
            return (

                <tr key={index}>
                    <td><p className="card-subtitle text-muted"><i className="fa fa-2 x fa-user text-primary sr-icons"></i>  {song.songArtist}</p></td>
                    <td><p className="card-subtitle text-muted"><i className="fa fa-2 x fa-music text-primary sr-icons"></i>  {song.songTitle}</p></td>
                    <td><p className="card-subtitle text-muted"><i className="fa fa-2 x fa-comments text-primary sr-icons"></i>  {song.songNotes}</p></td>
                    <td><p className="card-subtitle text-muted"><i className="fa fa-2 x fa-person text-primary sr-icons"></i>  {song.userName}</p></td>
                </tr>
            )
        })
        return (
            <div className="container playlist-items">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Artist</th>
                            <th>Track Title</th>
                            <th>Comments</th>
                            <th>User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs}
                    </tbody>
                </table>
            </div>
        );
    }
}
