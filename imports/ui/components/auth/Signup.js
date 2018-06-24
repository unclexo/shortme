import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

export default class Signup extends React.Component {
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
      return this.setState({
        'error': 'Please fill in all the fields.'
      });
    }

    Accounts.createUser({email, password}, (err) => {
      console.log('Signup', err);
      if (err) {
        this.setState({
          'error': err.reason 
        });
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
              <h4>Sign up</h4>
              { this.state.error ? <p>{this.state.error}</p> : undefined }
              <form onSubmit={this.onSubmit.bind(this)}>
                <div>
                  <input ref="email" name="email" placeholder="Email" />
                </div>
                <div>
                  <input ref="password" name="password" placeholder="Password" />
                </div>
                <button className="btn waves-effect waves-light" type="submit">
                  Sign UP <i className="material-icons right">send</i>
                </button>
              </form>
            </div>  
          </div>
          <a href="/login">Already have account?</a>
        </div>      
      </div>
    );
  }
}