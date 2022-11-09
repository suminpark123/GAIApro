import React from "react";
class Deliver extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <b>{this.props.name}</b>
        </td>
        <td>
          <b>{this.props.phone}</b>
        </td>
        <td>
          <b>{this.props.product1}</b>
        </td>
        <td>
          <b>{this.props.total}</b>
        </td>
        <td>
          <b>{this.props.addr1}</b>
        </td>
        <td>
          <b>{this.props.addr2}</b>
        </td>
        <td>
          <b>{this.props.pay}</b>
        </td>
        <td>
          <b>{this.props.deliver}</b>
        </td>
      </tr>
    );
  }
}

export default Deliver;
