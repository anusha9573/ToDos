import React from 'react'
import './../css/InputField.css'
import { useAppDispatch } from '../hooks'
import { addTodo } from './../../src/redux/slice';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 0.8,
        duration: 0.5
      }}
      className="input-wrapper">
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="input-element" placeholder="Enter your task" />
      <button onClick={() => handleAdd(text) } className="input-button"> Add</button>
    </motion.div>
  )
}

export default InputField;