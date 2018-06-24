import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Links } from '../../../api/links/links';
import SingleLinkDisplay from './SingleLinkDisplay';

export default class SingleLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: {}
    };
  }
  
  componentDidMount() {
    this.linkTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      const link = Links.findOne({}, {sort: {createdAt: -1}, limit: 1});
      this.setState({ link });
    });
  }

  componentWillUnmount() {
    this.linkTracker.stop();
  }

  renderSingleLink() {
    const link = this.state.link;
    if (link) {
      const shortUrl = Meteor.absoluteUrl(link._id);
      if (shortUrl) {
        return <SingleLinkDisplay key={link._id} shortUrl={shortUrl} />
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        {this.renderSingleLink()}
      </div>        
    );
  }
}