import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

export default class SingleLinkDisplay extends Component {
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
    return (
      <div className="row">
        <div className="col s4 offset-s4">
          <div className="card scale-transition scale-in">
            <div className="card-content">
              <div className="center-align">
                <p>{this.props.shortUrl}</p>
              </div>
            </div>
            <div className="card-action">
              <a className="btn waves-effect waves-light pink lighten-1 left-align" 
                href={this.props.shortUrl}
                target="_blank">
                Visit
              </a>
              <a ref="copy"
                className="btn waves-effect waves-light pink lighten-1 right" 
                data-clipboard-text={this.props.shortUrl}>
                {this.state.copied ? 'Copied' : 'Copy'}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SingleLinkDisplay.propTypes = {
  // _id: PropTypes.string.isRequired,
  // url: PropTypes.string.isRequired,
  // userId: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
}