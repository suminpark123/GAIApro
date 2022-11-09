import React from "react";
class Deliver extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <b>{this.props.id}</b>
        </td>
        <td>
          <b>{this.props.name}</b>
        </td>
        <td>
          <b>{this.props.nick}</b>
        </td>
        <td>
          <b>{this.props.birth}</b>
        </td>
        <td>
          <b>{this.props.gender}</b>
        </td>
      </tr>
    );
  }
}

export default Deliver;
