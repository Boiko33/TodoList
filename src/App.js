import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      return {
        ...prevState, 
        todos: prevState.todos.map(item => {
          return item.id === id ? {...item, completed: !item.completed} : item
      })}
    })
  }
  render() {
    const todoComponents = this.state.todos.map(item =>
      <TodoItem key={item.id}
        todosData={item}
        handleChange={this.handleChange} />)
    return (
      <ul className="todoList">
        <li>{todoComponents}</li>
      </ul>
    );
  }
}
export default App;
