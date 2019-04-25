import React, { Component } from 'react';
import './w.css';
import One from './w1.jsx.js';
import Two from './w2.jsx.js';
import Footer from './w3.jsx.js';
import pic from './pic.jpeg';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <One />
        <Two />
        <Footer />
        
      </div>
    );
  }
}

export default App;
