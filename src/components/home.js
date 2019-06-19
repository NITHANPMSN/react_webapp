import React, { Component } from "react";
import Form from "./form";
import Table from "./table";
export default class home extends Component {
  state = {
    tabledata: [
      {
        name: "sathish",
        email: "123@123.com",
        password: "123",
        mobile: " 4557755756365"
      }
    ]
  };
  submit = object => {
    console.log(object);

    this.setState({
      tabledata: [...this.state.tabledata, object]
    });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <Form data={this.state} submit={this.submit} />
        <Table tabledata={this.state.tabledata} />
      </div>
    );
  }
}
