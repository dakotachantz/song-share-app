import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
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

        <PlayListForm />
        <PlayList />
      </div>
    );
  }
}

export default App;
