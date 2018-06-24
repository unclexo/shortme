import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

export default class LinksListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    }
  }

  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);
    this.clipboard.on('success', () => {
      this.setState({copied: true});
      setTimeout(() => this.setState({copied: false}), 1500);
    }).on('error', () => {
      console.log('Unable to copy');
    });
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return(
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <a href={this.props.shortUrl} target="_blank">Visit</a>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>
          {this.state.copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    );
  }  
}

LinksListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
}