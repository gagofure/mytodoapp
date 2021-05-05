import React, { Component } from 'react';
import Todos from './Todos'
import Addtodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Buy some milk' }, { id: 2, content: 'Mop the sitting room' }, { id: 3, content: 'Call hauwa' }, { id: 4, content: ' Finish documentation for App service' },
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  addTodo=(todo)=>{
    todo.id = Math.random() * 100
    let todos = [...this.state.todos, todo ]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app">
        <div className="todo-app container" >

          <h1 className="center blue-text "> Todo's </h1>
          <Addtodo  addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
