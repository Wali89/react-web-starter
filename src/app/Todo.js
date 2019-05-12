import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(e) {
    const {value} = e.target;
    this.setState({newTodo: value}); 
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleChange.bind(this)} value={this.state.newTodo} type="text" placeholder="new todo"/>
          <button>create</button>
        </form>  
      </div>
    );
  }
}
