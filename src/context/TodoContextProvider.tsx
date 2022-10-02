import React, {useState} from 'react'

export const TodoContext = React.createContext<showTypes | null>(null)

export type showTypes = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}
type childrenTypes ={
    children :React.ReactNode,
}

const TodoContextProvider = ({children}:childrenTypes) => {
    const [show,setShow] = useState(false)
    return (
        <TodoContext.Provider value={{show,setShow}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
