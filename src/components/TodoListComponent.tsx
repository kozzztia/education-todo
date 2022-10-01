import React,{useContext} from 'react';
import {TodoContext} from "../App";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


const TodoListComponent = () => {
    const {...context} = useContext(TodoContext)
    return (
        <div>
            <h2>{context.text}</h2>
            <TodoForm/>
            <TodoList/>
        </div>
    );
};

export default TodoListComponent;
