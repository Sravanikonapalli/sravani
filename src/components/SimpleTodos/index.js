// import {Component} from 'react'
// import TodoItem from '../TodoItem'

// import './index.css'

// const initialTodosList = [
//   {
//     id: 1,
//     title: 'Book the ticket for today evening',
//   },
//   {
//     id: 2,
//     title: 'Rent the movie for tomorrow movie night',
//   },
//   {
//     id: 3,
//     title: 'Confirm the slot for the yoga session tomorrow morning',
//   },
//   {
//     id: 4,
//     title: 'Drop the parcel at Bloomingdale',
//   },
//   {
//     id: 5,
//     title: 'Order fruits on Big Basket',
//   },
//   {
//     id: 6,
//     title: 'Fix the production issue',
//   },
//   {
//     id: 7,
//     title: 'Confirm my slot for Saturday Night',
//   },
//   {
//     id: 8,
//     title: 'Get essentials for Sunday car wash',
//   },
// ]

// // Write your code here
// class SimpleTodos extends Component {
//   state = {todosList: initialTodosList, inputValue: ''}

//   deleteTodo = id => {
//     const {todosList} = this.state
//     const filteredTodoData = todosList.filter(eachTodo => eachTodo.id !== id)
//     this.setState({todosList: filteredTodoData})
//   }

//   changeInputValue = event => {
//     this.setState({inputValue: event.target.value})
//   }

//   updateTodo = (id, newTitle) => {
//     this.setState(prevList =>
//       prevList.map(todo =>
//         todo.id === id ? {...todo, title: newTitle} : todo,
//       ),
//     )
//   }

//   addTheItem = () => {
//     const {inputValue} = this.state
//     if (inputValue.trim() === '') return
//     this.setState(prevState => ({
//       todosList: [...prevState, inputValue],
//       inputValue: '',
//     }))
//   }

//   render() {
//     const {todosList, inputValue} = this.state
//     return (
//       <div className="app-container ">
//         <div className="todo-container">
//           <h1 className="heading">Simple Todos</h1>
//           <div className="input-container">
//             <input
//               type="text"
//               value={inputValue}
//               onChange={this.changeInputValue}
//               placeholder="Enter todo item"
//             />
//             <button type="button" onClick={this.addTheItem}>
//               Add
//             </button>
//           </div>
//           <ul>
//             {todosList.map(eachTodo => (
//               <TodoItem
//                 deleteTodo={this.deleteTodo}
//                 todoDetails={eachTodo}
//                 key={eachTodo.id}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

// export default SimpleTodos

import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList, inputValue: ''}

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredTodos = todosList.filter(todo => todo.id !== id)
    this.setState({todosList: filteredTodos})
  }

  changeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  updateTodo = (id, newTitle) => {
    const {todosList} = this.state
    const updatedTodos = todosList.map(todo =>
      todo.id === id ? {...todo, title: newTitle} : todo,
    )
    this.setState({todosList: updatedTodos})
  }

  addTodoItem = () => {
    const {inputValue, todosList} = this.state
    if (inputValue.trim() === '') return

    // Check if the input ends with a number
    const match = inputValue.match(/(\d+)$/)
    const count = match ? parseInt(match[1], 10) : 1
    const baseTitle = inputValue.replace(/ \d+$/, '')

    // Generate new todo items
    const newTodos = Array.from({length: count}, (_, index) => ({
      id: todosList.length + index + 1,
      title: baseTitle,
    }))

    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodos],
      inputValue: '',
    }))
  }

  render() {
    const {todosList, inputValue} = this.state
    return (
      <div className="app-container">
        <div className="todo-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={this.changeInputValue}
              placeholder="Enter todo item"
            />
            <button type="button" onClick={this.addTodoItem}>
              Add
            </button>
          </div>
          <ul>
            {todosList.map(todo => (
              <TodoItem
                key={todo.id}
                todoDetails={todo}
                deleteTodo={this.deleteTodo}
                updateTodo={this.updateTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
