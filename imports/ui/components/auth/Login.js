import React from 'react';
import { Meteor } from 'meteor/meteor';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'error': ''
    };
  }

  onSubmit(event) {
    event.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (!email || !password) {
      return this.setState({ 'error': 'Please provide your login details.' });
    }

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({ 'error': 'Your email and password did not match!' });
      } else {
        this.setState({ 'error': '' });
      }
    });
  }

  render() {
    return (
      <div className="row">
        <div className="auth-box">
          <div className="card">
            <div className="card-content">
              <h3 className="center-align">Short Me</h3>
              <h4>Log in</h4>
              { this.state.error ? <p>{this.state.error}</p> : undefined }
              <form onSubmit={this.onSubmit.bind(this)}>
                <div>
                  <input ref="email" name="email" placeholder="Email" />
                </div>
                <div>
                  <input ref="password" name="password" placeholder="Password" />
                </div>
                <button className="btn waves-effect waves-light">
                  Login <i className="material-icons right">send</i>
                </button>
              </form>
            </div>  
          </div>
          <a href="/signup">Create new account?</a>
        </div>      
      </div>
    );
  }
}