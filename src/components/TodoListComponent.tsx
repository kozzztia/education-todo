import React,{useContext} from 'react';
import TodoForm from "./TodoForm";
import {TodoContext} from "../App";
import {contextType} from "../types/types";

const TodoListComponent = () => {
    const {...context} = useContext(TodoContext)
    return (
        <div>
            <h2
                style={context.doneValue?{color:"red"}:{color:"green"}}
            >{context.text}</h2>
        </div>
    );
};

export default TodoListComponent;
