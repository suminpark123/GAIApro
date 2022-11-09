import React from "react";
class Reviewsu extends React.Component {
  render() {
    return (
      <div>
        <p>
          <span>{this.props.p_id}</span>
          <span>{this.props.m_id}</span>
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default Reviewsu;
