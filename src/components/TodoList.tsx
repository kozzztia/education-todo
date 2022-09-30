import React from 'react';
import {todoListTypes} from "../types/types";


function TodoList  ({todos} :todoListTypes)  {
    return (
        <ul>
            {
                todos.map(item=><li key={item.id}>{item.title}</li>)
            }
        </ul>
    );
};

export default TodoList;
