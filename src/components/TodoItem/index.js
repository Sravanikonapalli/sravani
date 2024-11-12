// // import './index.css'
// // const TodoItem = props => {
// //   const {todoDetails, deleteTodo} = props
// //   const {id, title} = todoDetails
// //   const onDeleteTodo = () => {
// //     deleteTodo(id)
// //   }
// //   return (
// //     <li className="todo-list">
// //       <p className="paragraph">{title}</p>
// //       <button type="button" className="delete-button" onClick={onDeleteTodo}>
// //         Delete
// //       </button>
// //     </li>
// //   )
// // }
// // export default TodoItem

// import {useState} from 'react'
// import './index.css'

// const TodoItem = props => {
//   const {todoDetails, deleteTodo, updateTodo} = props
//   const {id, title} = todoDetails

//   const [isEditing, setIsEditing] = useState(false)
//   const [editText, setEditText] = useState(title)

//   const onDeleteTodo = () => {
//     deleteTodo(id)
//   }

//   const handleEditClick = () => {
//     setIsEditing(true)
//   }

//   const handleSaveClick = () => {
//     updateTodo(id, editText)
//     setIsEditing(false)
//   }

//   const changeInputValue = event => {
//     setEditText(event.target.value)
//   }

//   return (
//     <li className="todo-item">
//       {isEditing ? (
//         <input
//           type="text"
//           value={editText}
//           onChange={changeInputValue}
//           className="edit-input"
//         />
//       ) : (
//         <p className="todo-text">{title}</p>
//       )}
//       {isEditing ? (
//         <button type="button" onClick={handleSaveClick} className="save-button">
//           Save
//         </button>
//       ) : (
//         <button type="button" onClick={handleEditClick} className="edit-button">
//           Edit
//         </button>
//       )}
//       <button type="button" onClick={onDeleteTodo} className="delete-button">
//         Delete
//       </button>
//     </li>
//   )
// }

// export default TodoItem

import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, updateTodo} = props
  const {id, title} = todoDetails

  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(title)

  const handleDeleteClick = () => {
    deleteTodo(id)
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    updateTodo(id, editText)
    setIsEditing(false)
  }

  const handleInputChange = event => {
    setEditText(event.target.value)
  }

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={handleInputChange}
          className="edit-input"
        />
      ) : (
        <p className="todo-text">{title}</p>
      )}
      {isEditing ? (
        <button type="button" onClick={handleSaveClick} className="save-button">
          Save
        </button>
      ) : (
        <button type="button" onClick={handleEditClick} className="edit-button">
          Edit
        </button>
      )}
      <button
        type="button"
        onClick={handleDeleteClick}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
