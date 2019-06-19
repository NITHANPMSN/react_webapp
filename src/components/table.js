import React, { Component } from "react";

export default class table extends Component {
  render() {
    console.log(this.props.tabledata);
    let tbody = this.props.tabledata.map(item => {
      console.log(item);
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.mobile}</td>
        </tr>
      );
    });
    return (
      <div>
        <table id="mytable">
          <thead class="tab">
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Mobile.No</th>
          </thead>
          <tbody>{tbody}</tbody>
        </table>
      </div>
    );
  }
}
