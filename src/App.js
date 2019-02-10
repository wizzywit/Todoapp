import React, { Component } from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo";


class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'go to the market'},
      {id: 3, content: 'remind mum to pick anie from school'}
    ]
  }
  AddTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState(
      {todos: todos}
    )
  }
  deleteTodo = (id) => {
      const todos = this.state.todos.filter(
          todo =>{
            return todo.id !== id;
            //returns true if we want to keep the item in an array false otherwise
          }
      )
      this.setState({
        todos
      })
  }

  //you dont nest the todos directly inside the return method but you make use of anither component
  //and then prop the properties from that component
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> Todos
        </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.AddTodo}/>
      </div>
    );
  }
}

export default App;
