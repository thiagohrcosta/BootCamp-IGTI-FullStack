import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      candidates: [],
    };

    this.interval = null;
  }

  componentDidMount(){
    this.interval = setInterval(() =>{
      fetch('http://localhost:8080/votes')
      .then(res => {
        return res.json()
        .then((json) =>{
          this.setState({
            candidates: json.candidates,
          });
        })
      })
    }, 1000);
  }

  render() {
    const { candidates } = this.state;

    if(candidates.length === 0){
      return <span>Carregando...</span>
    }
    return <span>Candidatos</span>
    
  }
}
