import React from 'react';


export type contextType ={
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    text : string,
    inputValue: string,
    todos: todosTypes[] | [],
    setTodos: React.Dispatch<React.SetStateAction<todosTypes[] | []>>
}
export type todosTypes ={
    id: number,
    title: string,
    doneValue: boolean,
}

export type itemTypes = {
    id: number,
    title: string,
    doneValue: boolean,
}

