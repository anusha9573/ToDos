import React, { useState } from "react";
import { Todo } from "./../model";
import "./../css/Single.css";
import {
  RiDeleteBin2Fill,
  RiFileEditFill,
  RiCheckboxCircleFill
} from "react-icons/ri";
import { removeTodo, doneTodo } from "../redux/slice";
import { useAppDispatch } from "../hooks";

interface SingleProps {
    todo: Todo;
    
}

const SingleTodo: React.FC<SingleProps> = ({ todo,  }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.text);
  const dispatch = useAppDispatch();

    const handleEdit = (todo: Todo) => {
        if (!todo.isDone && !edit) {
          setEdit(!edit)
        }
        
  };
  return (
    <div>
          <div className="paper">
              {
                  edit ? (<div><input type="text" value={editText} onChange={(e) => {
                      setEditText(e.target.value);
                      
                  }} /><button onClick={() => { setEdit(false) }}
                  >X</button></div>)
                      : (todo.isDone ? <s>{editText}</s> : <span>{editText}</span>)
              }
        
        <span className="icons-wrapper">
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="icon delete"
          >
            <RiDeleteBin2Fill />
          </button>
          <button
            onClick={() => dispatch(doneTodo(todo.id))}
            className="icon done"
          >
            <RiCheckboxCircleFill />
          </button>
          <button onClick={() => handleEdit(todo)} className="icon edit">
            <RiFileEditFill />
          </button>
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
