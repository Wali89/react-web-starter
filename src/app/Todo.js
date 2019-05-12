import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      nums: [1, 2, 3]
    }
  }

  handleClick(e) {
    console.log('there')
    this.setState()
  }
  render() {
    return (
      <div>hello

      <button onClick={this.handleClick.bind(this)}>click </button>
      </div>
    );
  }
}
