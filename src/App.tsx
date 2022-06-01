import React, {useState} from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { useAppSelector, useAppDispatch } from "./hooks";
import { update } from './redux/slice';

const App = () => {
  const tododo = useAppSelector(state => state.todos.list);
  
  const [text, setText] = useState<string>("");
  

 
  const dispatch = useAppDispatch();
  function handleOnDragEnd(result: DropResult) {
    

    const { source, destination } = result;
    if(!destination) return;

    if (source.droppableId === destination?.droppableId &&
       source.index === destination.index) {
      return;
    }
    
    const items = Array.from(tododo);
    const[movedEl] = items.splice(source.index, 1);
    items.splice(destination.index, 0, movedEl);

    
    dispatch(update(items));

}

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="App">
        <span className="header">Todo List</span>
      <InputField text={text} setText={setText} />
        <TodoList />
      </div>
      </DragDropContext>
    
  );
};

export default App;