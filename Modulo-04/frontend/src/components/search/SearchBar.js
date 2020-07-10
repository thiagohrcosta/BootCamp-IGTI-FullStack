import React, { Component } from 'react'
import css from './searchbar.custom.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="container">
        <div className={css.searchPosition}>
          <br className="space"/>
          <br/>
          <input className={css.inputField} type="text" placeholder="Search a movie to watch"></input>        

        </div>
 
      </div>
    )
  }
}
