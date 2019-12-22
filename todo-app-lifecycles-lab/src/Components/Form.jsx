import React from 'react';

const Form = (props) => {
   const {handleSubmit, handleInput} = props
    return (
     <div>
        <form
        onSubmit={handleSubmit}
        >
            <input
            type="text"
            placeholder="Enter a todo"
            onChange={handleInput}
            ></input>
        </form>
     </div>
    )
}

export default Form;