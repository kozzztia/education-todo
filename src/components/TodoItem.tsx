import React, {useState} from 'react';
import {setTodosType} from "../types/types";

function TodoItem ({id,title,done}:setTodosType) {
    const [change , setChange] = useState<boolean>(false)
    return (
        <li key = {id}
            className="todoItem"
            style={change?
                {color:'red'}
                :
                {color:'black'}}
            onClick={()=>{
                setChange(prev=>!prev)
            }}
        >
            {id}: {title}
        </li>
    );
};

export default TodoItem;
