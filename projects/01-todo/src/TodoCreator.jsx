import { useState } from "react";

export const TodoCreator = ({callback}) => {

    const [newItemText, setNewItemText] = useState("");

    const updateNewTextValue = (event) => {
        setNewItemText(event.target.value);
    };
    
    const createNewTodo = () => {
        callback(newItemText);
        setNewItemText("");
    };

    return (
        <div className="my-1">
            <input type="text" 
                   className="form-control"
                   value={newItemText}
                   onChange={updateNewTextValue} />
            <button className="btn btn-primary mt-1"
                    onClick={createNewTodo}>
                Add
            </button>
        </div>
    )
};