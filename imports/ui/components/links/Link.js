import React from 'react';

import Logout from './Logout';
import AddLink from './AddLink';
import SingleLink from './SingleLink';
import LinksList from './LinksList';

export default class Link extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Logout/>
        <AddLink title="Shorten Your URL" buttonText="Shorten URL"/>
        <SingleLink/>
      </div>
    );
  }
}