import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Brand extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s4 offset-s4">
          <div className="card">
            <div className="card-content center-algin">
              <h2 className="center-align">{this.props.title}</h2>
              <p className="center-align">A simple url shortener application</p>
            </div>
            <div className="card-action center-align">
             <a className="btn waves-effect waves-light pink lighten-1" 
                href="/login">
                Log in
              </a>
              <a className="btn waves-effect waves-light purple lighten-1" 
                href="/signup">
                Sign up
              </a>
            </div>
          </div>  
        </div>    
      </div>
    );  
  }
}

Brand.propTypes = {
  title: PropTypes.string.isRequired
}