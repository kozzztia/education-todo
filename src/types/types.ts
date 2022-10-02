import React from "react";

export type contextType ={
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
