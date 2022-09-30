import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodosContainer = () => {
    const [inputValue , setInputValue] = useState("");
    const [todos , setTodos] = useState([]);
    return (
        <>
            <TodoForm
                inputValue ={inputValue}
                setInputValue ={setInputValue}
                setTodos={setTodos}
                todos={todos}
            />
            <TodoList
                todos={todos}
            />

        </>
    );
};

export default TodosContainer;
