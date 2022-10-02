import React, {useContext, useState} from 'react';
import {Context} from "../App";

const TodoContainer = () => {
    const {inputValue, setInputValue} = useContext(Context)
    return (
        <form
            onSubmit={(e)=>{
                e.preventDefault()
                console.log(inputValue)
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
            <button type="submit">AddNewTodo</button>
        </form>
    );
};

export default TodoContainer;
