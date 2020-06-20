import React, { Component} from 'react';

export default class App extends Component {
  
  constructor(){
    super();
    
    this.state = {
    allCountries: [],
  };
}
  render(){
    return <h1>React Contries</h1>;
  }
}
