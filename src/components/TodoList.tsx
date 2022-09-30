import React from 'react';
import {todoListTypes} from "../types/types";
import TodoItem from "../components/TodoItem"

function TodoList  ({todos} :todoListTypes)  {
    return (
        <ul className="todoList">
            {
                todos.map(item=>
                    <TodoItem
                        id={item.id}
                        title={item.title}
                        done={item.done}
                    />)
            }
        </ul>
    );
};

export default TodoList;
