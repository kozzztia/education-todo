import React, {useState} from 'react';








const TodoForm = () => {
    const [inputValue , setInputValue] = useState <string> ("");
    return (
        <form
            onSubmit={(e)=>{
                e.preventDefault()
                console.log(inputValue)
                setInputValue("")
            }}
        >
            <input type="text"
                    onChange={(e)=>{
                        setInputValue(e.target.value)
                    }}
                   value={inputValue}
            />
            <button type="submit">Add new task</button>
        </form>
    );
};

export default TodoForm;
