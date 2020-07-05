import React, { Component } from 'react'
import css from './footer.custom.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
         <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Movie Trailer</h5>
                <p className="grey-text text-lighten-4">
                  Movie Trailer it´s a project created after the BOOTCAMP Web Developer
                  Full Stack. To make this possible was use MongoDB, NodeJs, React and much
                  more.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Portfolio</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Contact me</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Created by Thiago H. R. Costa - Check my GITHUB 
            </div>
          </div>
        </footer>
            
      </div>
    )
  }
}
