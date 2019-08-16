import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import SmurfList from './SmurfList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfList/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title : state.title,
    smurfs : state.smurfs
  }
}

export default connect(mapStateToProps,{})(App)
