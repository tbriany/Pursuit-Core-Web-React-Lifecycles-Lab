import React from 'react';

const TodosList = (props) => {
    const {todoItem} = props
    return (
     <div>
        <ul>
         {todoItem}
        </ul>
     </div>
    )
}

export default TodosList;