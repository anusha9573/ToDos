import React from 'react'
import './../css/InputField.css'
import { useAppDispatch } from '../hooks'
import { addTodo } from './../../src/redux/slice'; 

interface InputStateProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const InputField: React.FC<InputStateProps>  = ({text, setText}) => {

  const dispatch = useAppDispatch();

  const handleAdd = (someText: string) => {
    if (someText.trim()) {
      dispatch(addTodo(someText));
      setText('');
    }
  }
  
  return (
      <div className="input-wrapper">
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="input-element" placeholder="Enter your task" />
      <button onClick={() => handleAdd(text) } className="input-button"> Add</button>
    </div>
  )
}

export default InputField;