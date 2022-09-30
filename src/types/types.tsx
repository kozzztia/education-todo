import React from 'react';

export type todoFormTypes = {
    inputValue : string,
    setInputValue : React.Dispatch<React.SetStateAction<string>>,
    // setTodos: React.Dispatch<[]> | React.Dispatch<React.SetStateAction<setTodosType[]>>,
    setTodos:  any,
    todos: setTodosType[];
}
export type setTodosType = {
    id: number,
    title:string,
    done:boolean,
}
export type todoListTypes = {
    todos: setTodosType[];
}

