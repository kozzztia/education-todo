import React, {useState} from 'react';
import {createId} from '../support/support'
import '../App.css';



function TodosForm () {
    const [inputValue, setInputValue] = useState( '')
    const [todos, setTodos] = useState([{id:1, title:"start", done:false}])
    const addNewTodo = () =>{
        let newTodo = {
            id : createId(),
            title: inputValue,
            done:false,
        }
        return newTodo
    }
    return (
        <div>
        <h2>TodoForm</h2>
            <form
            onSubmit={(e)=>{
                e.preventDefault();
                setTodos(prevState => ([...todos , addNewTodo()]))
                setInputValue("");
            }}
            >
                <input type="text"
                    onChange={(e)=>{
                        setInputValue(e.target.value)
                    }}
                       value = {inputValue}
                />
                <button type = 'submit'>
                    AddTodo
                </button>
            </form>
            <ul>
                {todos.map((item) =>
                    (<li key={item.id}>{item.id} : {item.title}</li>))
                }

            </ul>
        </div>
    );
};

export default TodosForm;
