import React,{useContext} from 'react';
import TodoForm from "./TodoForm";
import {TodoContext} from "../App";

const TodoListComponent = () => {
    const context = useContext(TodoContext)
    return (
        <div>
            <h2
                style={context?{color:'red'}:{color:"green"}}
            >TodoList</h2>
        </div>
    );
};

export default TodoListComponent;
