import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import Header from './Header';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';



class App extends Component {
  render() {

    return (
      <div className="App">
        <NavBar />
        <Header />
        <PlayListForm />
        <PlayList />
      </div>
    );
  }
}

export default App;
