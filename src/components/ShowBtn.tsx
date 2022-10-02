import React, {useContext} from 'react';
import {TodoContext} from "../context/TodoContextProvider";

const ShowBtn = () => {
    const {...content} = useContext(TodoContext)
    return (
        <button
            onClick={(e)=>{
                e.preventDefault()
                content.setShow((prev)=>!prev)
            }}
        >
            add
        </button>
    );
};

export default ShowBtn;
