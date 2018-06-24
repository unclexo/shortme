import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

export default class AddLinkModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      error: '',
      isOpen: false
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let { url } = this.state;
    url = url.trim();
    console.log(url);

    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        if (err) {
          this.setState({ error: err.reason });
        } else {
          this.setState({ isOpen: false, error: '' });
        }
      });
      url = '';
    }
  }

  onChange(e) {
    this.setState({ url: e.target.value });
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false, url: '', error: '' });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal.bind(this)}>{this.props.buttonText}</button>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel="Add Link"
        >
          <h2>{this.props.title}</h2>
          { this.state.error ? <p>{this.state.error}</p> : undefined }
          <form onSubmit={this.onSubmit.bind(this)}>
            <input 
              type="text" 
              value={this.state.url} 
              onChange={this.onChange.bind(this)}
              placeholder="URL"/>
            <button>{this.props.buttonText}</button>
          </form>
          <button onClick={this.closeModal.bind(this)}>Close</button>
        </Modal>
      </div>
    );  
  }
}

AddLinkModal.defaultProps = {
  buttonText: 'Add Link'
}

AddLinkModal.propTypes = {
  title: PropTypes.string.isRequired,
}