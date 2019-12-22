import React from 'react';

const TodoItem = (props) => {
    const {todoItem, handleDelete} = props
    return (
     <div>
         <li>
          <p>{todoItem}
          <button 
          onClick={handleDelete}
          value={todoItem}
          >x</button></p>
         </li>
     </div>
    )
}

export default TodoItem;