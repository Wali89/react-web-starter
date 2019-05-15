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

  handleClick(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodos:''});
  }

  removeTodo(i) {
    const todos = [...this.state.todos.slice(0, i), this.state.todos.slice(i+1)]
    this.setState({todos})
  }

  render() {
    return (
      <div>

        <form>
          <input onChange={this.handleChange.bind(this)} value={this.state.newTodo} type="text" placeholder="new todo"/>
          <button onClick={this.handleClick.bind(this)}>create</button>
        </form> 

        <ul>
          {this.state.todos.map((todo, i) => (
          <li onClick={() => this.removeTodo.call(this, i)}>{todo}</li>
          ))}
          
        </ul> 

      </div>
    );
  }
}
