import React, {useState} from 'react';
import {itemTypes, todosTypes} from "../types/types";

const Todo = ({id , doneValue , title}:itemTypes) => {
    const [todoDone, setTodoDone] = useState<boolean>(doneValue)
    return (
        <li style={todoDone?{color:"red"}:{color:"black"}}
            key={id}>
            {id}: {title}
            <button
                onClick={()=>{
                    setTodoDone((prev)=>!prev)
                }}
            >
                done
            </button>
        </li>
    );
};

export default Todo;
