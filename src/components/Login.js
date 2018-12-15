import React, { Component } from "react";
import { loginUser, forgotPassword } from "../actions/authActions";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    loginUser(this.state.email, this.state.password);
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleForgotPassword(e) {
    e.preventDefault();
    if (!this.state.email) {
      window.alert("Please enter your email and then click forgot");
    }
    forgotPassword(this.state.email);
  }
  render() {
    // if (this.props.authUser !== null) {
    //   return <Redirect to="/" />;
    // }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          <input
            autoComplete="email"
            name="email"
            onChange={this.handleInputChange}
            placeholder="email"
          />
          <br />
          <label>Password: </label>
          <input
            autoComplete="current-password"
            name="password"
            onChange={this.handleInputChange}
            placeholder="password"
            type="password"
          />
          <br />
          <button onClick={this.handleSubmit}>Log In</button>
          <br />
          <button onClick={this.handleForgotPassword}> Forgot Password</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
