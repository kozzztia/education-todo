import React from 'react';

export type todoFormTypes = {
    inputValue : string,
    setInputValue : React.Dispatch<React.SetStateAction<string>>,
    setTodos: React.Dispatch<React.SetStateAction<setTodosType[]>> | any[],
}
type setTodosType = {
    id: number,
    title:string,
    done:boolean,
}
