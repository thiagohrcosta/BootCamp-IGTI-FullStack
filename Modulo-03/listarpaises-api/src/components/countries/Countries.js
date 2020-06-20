import React, { Component } from 'react'

export default class Countries extends Component {
  render() {
    const { countries } = this.props;

    return (
       <div>
         <ul>
           {countries.map(country =>{
             return <li key={country.id}>{country.name}</li>;
           })}
         </ul>
      </div>
      );
    }
}
