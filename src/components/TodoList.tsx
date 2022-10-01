import React, {useContext} from 'react';
import {TodoContext} from "../App";
import Todo from "./Todo";

const TodoList = () => {
    const {...context} = useContext(TodoContext)
    return (
        <ul>
            {
                context.todos.map(item =>
                    <Todo
                        id={item.id}
                        title={item.title}
                        doneValue={item.doneValue}
                    />
                )
            }

        </ul>
    );
};

export default TodoList;
