import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <p className={this.props.classes}>{this.props.message} </p>;
  }
}

export default Alert;
