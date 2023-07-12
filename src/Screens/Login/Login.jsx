import React from 'react';
import './login.css';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  handleClick = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    this.props.history.push('/mainpage');
  };

  render() {
    return (
      <div>
        <div className="BackgroundImage"></div>
        <div className="Rectangle">
          <h1 className="Logo">
            LOGO
            <br />
            <p className="Login">Log in to your account</p>
            <br />
            <div className="Login Son">
              <form>
                <div className="form">
                  <br />
                  <br />
                  <input type="text" name="text" autoComplete="off" required />
                  <label htmlFor="text" className="label-name">
                    <span className="content-name">Username</span>
                  </label>
                </div>
                <div className="form">
                  <input type="password" name="passwd" autoComplete="off" required />
                  <label htmlFor="text" className="label-name">
                    <span className="content-name">Password</span>
                  </label>
                </div>
                <div>
                  <input className="btn" type="button" value="LogIn" onClick={this.handleClick} />
                </div>
              </form>
            </div>
          </h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);