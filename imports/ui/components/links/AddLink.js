import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

export default class AddLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }
  onSubmit(event) {
    event.preventDefault();
    const url = this.refs.url.value.trim();
    if (url) {
      Meteor.call('links.insert', url, (error, result) => {
        if (error) {
          this.setState({error: error.reason });
        } else {
          this.setState({error: '' });
        }
      });
      this.refs.url.value = '';
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col s4 offset-s4 center-align">
          <div className="card">
            <div className="card-content">
              <span className="card-title add-link-title">{this.props.title}</span>
              <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" ref="url" placeholder="Example: http://www.example.com"/>
                { this.state.error ? <p className="link-error">{this.state.error}</p> : undefined }
                <button className="btn waves-effect waves-light">
                  {this.props.buttonText} <i className="material-icons right">autorenew</i>
                </button>               
              </form>
            </div>  
          </div>   
        </div>    
      </div>
    );
  }
}

AddLink.defaultProps = {
  title: 'Add Link',
  buttonText: 'Add Link'
}

AddLink.propTypes = {
  title: PropTypes.string.isRequired
}