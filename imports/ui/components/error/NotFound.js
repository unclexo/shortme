import React from 'react';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <div className="row">
          <div className="col s4 offset-s4">
            <div className="card">
              <div className="card-content">
                <h2 className="center-align">404</h2>
                <h3 className="center-align">Not Found</h3>
              </div>
            </div>  
          </div>    
        </div>
      </div>
    );
  }
}