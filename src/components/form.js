import React, { Component } from "react";
import Table from "./table";
export default class form extends Component {
  state = {
    user: {
      name: "",
      email: "",
      password: "",
      mobile: ""
    }
  };

  inputChange = e => {
    console.log(e.target.value);
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };
  submit = e => {
    e.preventDefault();
    this.props.submit(this.state.user);
    console.log(this.state);
  };
  render() {
    console.log(this.props);
    console.log(this.state, "state");
    return (
      <div>
        <form id="myform" onSubmit={this.submit}>
          <br />
          <input
            className="box"
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.user.name}
            onChange={this.inputChange}
            required
          />
          <br />
          <br />
          <input
            className="box"
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.user.email}
            onChange={this.inputChange}
            required
          />
          <br /> <br />
          <input
            className="box"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.user.password}
            method="post"
            onChange={this.inputChange}
            required
          />
          <br />
          <br />
          <input
            className="box"
            type="text"
            name="mobile"
            placeholder="Mobile.No"
            value={this.state.user.mobile}
            onChange={this.inputChange}
            required
          />
          <br /> <br />
          <button className="box" type="submit" name="submit" value="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}
