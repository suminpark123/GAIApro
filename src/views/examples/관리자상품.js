import React from "react";
class Customer2 extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <b>{this.props.p_id}</b>
        </td>
        <td>
          <b>{this.props.p_name}</b>
        </td>
        <td>
          <b>{this.props.p_price}</b>
        </td>
        <td>
          <b>{this.props.p_point}</b>
        </td>
        <td>
          <b>{this.props.p_brand}</b>
        </td>
      </tr>
    );
  }
}
export default Customer2;
