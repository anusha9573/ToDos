import React, { useState, useRef, useEffect } from "react";
import { Todo } from "./../model";
import "./../css/Single.css";
import {
  RiDeleteBin2Fill,
  RiFileEditFill,
  RiCheckboxCircleFill
} from "react-icons/ri";
import { removeTodo, doneTodo } from "../redux/slice";
import { HiThumbUp } from 'react-icons/hi';
import { useAppDispatch } from "../hooks";

interface SingleProps {
  todo: Todo;
  index: number;
}

const SingleTodo: React.FC<SingleProps> = ({ todo, index  }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.text);

  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

    const handleEdit = (todo: Todo) => {
        if (!todo.isDone && !edit) {
          setEdit(!edit)
        }
        
  };
  return (
    <div>
      <div className="paper">
        <span className="number">{index + 1 + '.'}</span>
              {
          edit ? (<div className="input_area">
            <input ref={inputRef} className="input_edit" type="text" value={editText} onChange={(e) => {
                      setEditText(e.target.value);
                      
            }} />
            <button className="input_thumb" onClick={() => { setEdit(false) }}
            ><HiThumbUp /></button>
          </div>)
            : (todo.isDone ? <div className="text isdone">{editText}</div>
              : <div className="text" >{editText}</div>)
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
