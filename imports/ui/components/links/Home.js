import React from 'react';

import Brand from './Brand';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Brand title="Short Me"/>
      </div>
    );
  }
}