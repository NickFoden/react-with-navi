import * as React from "react";
import { NavLink } from "react-navi";
import { registerUser } from "../actions/authActions";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    registerUser(this.state.email, this.state.password);
  };
  render() {
    return (
      <div>
        <h2>Register for navi react</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              autoComplete="email"
              name="email"
              onChange={this.handleInputChange}
              placeholder="E-mail"
            />
          </div>
          <div>
            <input
              autoComplete="current-password"
              name="password"
              onChange={this.handleInputChange}
              placeholder="Password"
              type="password"
            />
          </div>
          <button onClick={this.handleSubmit}>Sign Up</button>
          <br />
        </form>
        <nav>
          <NavLink href="/login"> Already a member? Login</NavLink>
        </nav>
      </div>
    );
  }
}

export default Register;
