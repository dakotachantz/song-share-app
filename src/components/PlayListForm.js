import React, { Component } from 'react'

export default class PlayListForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            songArtist: "",
            songTitle: "",
            songNotes: ""
        }
    }

    render() {
        return (
            <section className="bg-primary" id="share">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-heading text-white">Share Song Below!</h2>
                            <hr className="light" />
                            <form>
                                <div className="form-group">
                                    <label className="text-faded" htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter your name..." />
                                </div>
                                <div className="form-group">
                                    <label className="text-faded" htmlFor="name">Artist/Band</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter the Artist..." />
                                </div>
                                <div className="form-group">
                                    <label className="text-faded" htmlFor="name">Track Title</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter the Track Title..." />
                                </div>
                                <div className="form-group">
                                    <label className="text-faded" htmlFor="exampleInputEmail1">Notes about Track</label>
                                    <textarea type="email" className="form-control" id="exampleInputEmail1" placeholder="Notes on the track..."></textarea>
                                </div>

                                <button id="form-button" type="submit" className="btn btn-default btn-xl">Add Song!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
