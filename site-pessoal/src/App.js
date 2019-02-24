import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Taskboard from './components/taskboard/Taskboard';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='body'>
          <NavBar />
          <div className='container'>
            <Taskboard />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
