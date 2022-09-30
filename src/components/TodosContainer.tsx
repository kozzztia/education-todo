import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import {setTodosType} from "../types/types"

const TodosContainer = () => {
    const [inputValue , setInputValue] = useState<string>("");
    const [todos , setTodos] = useState<setTodosType[] | []>([
        {id:1, title:"one", done:false},
        {id:2, title:"two", done:false},
        {id:3, title:"three", done:false},
    ]);
    return (
        <>
            <TodoForm
                inputValue ={inputValue}
                setInputValue ={setInputValue}
                setTodos={setTodos}
                todos={todos}
            />
            {
                todos.length === 0?
                    <h2>you have no todos</h2>
                    :
                    <TodoList todos={todos}/>
            }

        </>
    );
};

export default TodosContainer;
