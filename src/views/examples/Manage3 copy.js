import React from "react";
class Deliver extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <b>{this.props.m_name}</b>
        </td>
        <td>
          <b>{this.props.phone_number}</b>
        </td>
        <td>
          <b>{this.props.product_name}</b>
        </td>
        <td>
          <b>{this.props.total_pay}</b>
        </td>
        <td>
          <b>{this.props.o_delivery_addr1}</b>
        </td>
        <td>
          <b>{this.props.o_delivery_addr2}</b>
        </td>
        <td>
          <b>{this.props.status_pay}</b>
        </td>
        <td>
          <b>{this.props.status_delivery}</b>
        </td>
      </tr>
    );
  }
}

export default Deliver;
