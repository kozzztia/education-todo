import React from 'react';
import {todoFormTypes} from "../types/types";

const TodoForm = ({inputValue , setInputValue , setTodos}:todoFormTypes) => {
    return (
        <form
            onSubmit={(e)=>{
                e.preventDefault()
                setInputValue("")
            }}
        >
            <input
                type="text"
                onChange={(e)=>{
                    setInputValue(e.target.value)
                }}
                value={inputValue}

            />
            <button type='submit'>Add todo</button>
        </form>
    );
};

export default TodoForm;
