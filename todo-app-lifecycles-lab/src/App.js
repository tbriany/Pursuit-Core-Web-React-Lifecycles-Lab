import React from 'react';
import './App.css';
import Form from './Components/Form'
import TodosList from './Components/TodosList'
import TodoItem from './Components/TodoItem'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: [],
      todoItem: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {todoItem, todoList} = this.state
    this.setState({
      todoList: [...todoList,todoItem]
    })
  }

  handleInput = (event) => {
    let todo = event.target.value

    this.setState ({
      todoItem: todo
    })
  }

  handleDelete = (event) => {
    const {todoList} = this.state
    let todo = event.target.value
    let newArr = todoList.filter(el => {
      return (
        el !== todo 
      )
    })

   this.setState({
     todoList: newArr
   })

  }

  render(){
  const {handleSubmit, handleInput, handleDelete} = this
  const {todoList} = this.state

  const mapArr = todoList.map(el => {
    return (
    <TodoItem
      key={el}
      todoItem={el}
      handleDelete = {handleDelete}
    />
    )
  })

  return (
    <div className="App">
      <Form 
       handleSubmit = {handleSubmit}
       handleInput = {handleInput}
      />
      <TodosList
       todoItem={mapArr}
      />
    </div>
  );
 }
}

export default App;
