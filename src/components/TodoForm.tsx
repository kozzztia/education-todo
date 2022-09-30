import React from 'react';
import {todoFormTypes} from "../types/types";
import {createId} from "../support/support";
import {setTodosType} from "../types/types"

const TodoForm = ({inputValue , setInputValue , setTodos ,todos}:todoFormTypes) => {
    return (
        <form
            onSubmit={(e)=>{
                e.preventDefault()
                const newTodo : setTodosType = {
                    id:createId(),
                    title:inputValue,
                    done:false,
                }
                setTodos((prev:todoFormTypes[])=>[...prev, newTodo])
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
            <button
                disabled={inputValue.length < 5}
                type='submit'>
                Add todo
            </button>
        </form>
    );
};

export default TodoForm;
