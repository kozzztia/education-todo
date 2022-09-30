import React, {useState} from 'react';
import TodoForm from "./TodoForm";

const TodosContainer = () => {
    const [inputValue , setInputValue] = useState("");
    const [todos , setTodos] = useState([{id:1, title:"first", done: false}]);
    return (
        <>
            <TodoForm
                inputValue ={inputValue}
                setInputValue ={setInputValue}
                setTodos={setTodos}
            />

        </>
    );
};

export default TodosContainer;
