import React, {useContext} from 'react';
import {TodoContext} from "../context/TodoContextProvider";

const TodoContainer = () => {
    const {...content} = useContext(TodoContext)
    return (
        <form style={!content.show?{color:"red"}:{color:"green"}}>
            {
                !content.show?<h2>show</h2>:<h2>bye bye</h2>
            }
        </form>
    );
};

export default TodoContainer;
