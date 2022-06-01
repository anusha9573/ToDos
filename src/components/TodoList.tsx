import React from 'react'
import { useAppSelector } from '../hooks';
import SingleTodo from './SingleTodo';
import './../css/TodoList.css';
import { motion } from 'framer-motion';
import { Droppable, Draggable } from 'react-beautiful-dnd';



const TodoList: React.FC = () => {
    
    const todos = useAppSelector(state => state.todos.list);

    return (
        <Droppable droppableId="TodoL">
            {(provided) => (<ul
                {...provided.droppableProps} ref={provided.innerRef}
                className="Todolist">
                {todos?.map((todo, index) => (
                    <Draggable key={todo.id}
                        draggableId={todo.id.toString()}
                        index={index}>
                        {(provided) => (<div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}>
                            <motion.li
                    
                                initial={{ x: 1500 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <SingleTodo todo={todo}   />
                            </motion.li></div>)}
                
                    </Draggable>
                ))}
                {provided.placeholder}
      </ul>)}
      
      </Droppable>
  )
}

export default TodoList;
