import React, { Component } from 'react';

export default class Logout extends Component {
  onLogout() {
    Accounts.logout();
  }

  render() {
    return (
      <div className="row">
        <div className="col s4 offset-s4 right-align logout-button">
          <button className="btn waves-effect waves-light pink lighten-1" onClick={this.onLogout.bind(this)}>Log out</button>
        </div>
      </div>
    );
  }
}