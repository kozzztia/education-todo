import React, {useContext} from 'react';
import {TodoContext} from "../App";
import {createId} from "../support/support";



const TodoForm = () => {
    const {...context} = useContext(TodoContext)
    return (
        <form
            onSubmit={(e)=>{
                e.preventDefault()
                const newTodo = {
                    id: createId(),
                    title: context.inputValue,
                    doneValue: false,
                }
                context.setTodos([...context.todos , newTodo])
                console.log(context.todos)
                context.setInputValue("")
            }}
        >
            <input type="text"
                   onChange={(e)=>{
                        context.setInputValue(e.target.value)
                   }}
                   value={context.inputValue}
            />
            <button
                type="submit"
                disabled={context.inputValue.length <5}
            >Add new task</button>
        </form>
    );
};

export default TodoForm;
