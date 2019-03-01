import React, { Component } from 'react';
import './ToDoList.css';
import ToDoItem from './ToDoItem'
import InputAdd from './InputAdd'
import InputSearch from './InputSearch'

class Todo extends Component {
  state = {
    addActive: true,
    items: [],
    addValue: '',
    updatedItems: [],
    completed: []
  }

  handleAddInputShow = () => {
    this.setState({
      addActive: !this.state.addActive
    })
  }

  handleAddInputChange = e => {
    this.setState({
      addValue: e.target.value,
    })
  }

  handleSearchItem = e => {
    const { items } = this.state
    let searchedValue = e.target.value.toLowerCase(),
      updatedItems = items.filter((el) => {
        let itemValue = el.text.toLowerCase();
        return itemValue.indexOf(searchedValue) !== -1;
      })

    this.setState({
      updatedItems
    })
  }


  handleAddItem = e => {
    const { items, addValue } = this.state

    if (e.key === 'Enter' && addValue !== '') {
      const newItems = [...items];
      newItems.push({
        text: addValue,
        id: Date.now()
      })

      this.setState({
        items: newItems,
        addValue: "",
        updatedItems: newItems

      })
    }
  }


  handleDeleteItem(id, e) {
    e.stopPropagation()
    const items = [...this.state.items]
    const index = items.findIndex(item => item.id === id)
    items.splice(index, 1)

    this.setState({
      updatedItems: items,
      items
    })
  }

  handleCompletedItem = index => {
    const completed = [...this.state.completed]
    const currentIndex = completed.indexOf(index)

    if (completed.includes(index)) {
      completed.splice(currentIndex, 1)
    } else {
      completed.push(index)
    }

    this.setState({
      completed
    })
  }

  render() {

    const { addActive, addValue, completed, updatedItems } = this.state
    const listItems = updatedItems.map((item, index) =>
      <ToDoItem
        key={item.id}
        deleteItem={this.handleDeleteItem.bind(this, item.id)}
        text={item.text}
        completed={this.handleCompletedItem.bind(this, index)}
        toggleClass={completed.includes(index)}
      />)

    return (
      <div className="container" >
        <h1 > To - do list <button
          className="fa fa-plus"
          onClick={this.handleAddInputShow}>
        </button></h1 >
        {addActive &&
          <InputAdd
            value={addValue}
            change={this.handleAddInputChange}
            keypress={this.handleAddItem}
          />}
        <InputSearch
          change={this.handleSearchItem}
        />
        {updatedItems ? <ul> {listItems}</ul> : updatedItems} </div>);
  }
}

export default Todo;