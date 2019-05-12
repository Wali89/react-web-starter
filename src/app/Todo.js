import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      nums: [1, 2, 3]
    }
  }
  render() {
    return (
      <div>hello

      <button>click </button>
      </div>
    );
  }
}
