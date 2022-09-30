import React, {useState} from 'react';
import {setTodosType} from "../types/types";

function TodoItem ({id,title,done}:setTodosType) {
    const [change , setChange] = useState<boolean>(false)
    return (
        <li key = {id}
            style={change?
                {color:'red'}
                :
                {color:'black'}}
            onClick={()=>{
                setChange(prev=>!prev)
            }}
        >
            {title}

        </li>
    );
};

export default TodoItem;
