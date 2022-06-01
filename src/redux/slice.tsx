import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './../model';



type initialStateType = {
    list: Todo[],
}

const initialState: initialStateType = {
    list: []
}

const TodoSlice = createSlice({
    name: "TodoList",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>)  {
            state.list.push({
                id: Math.random()*1000,
                text: action.payload,
                isDone: false,
            })
        },
        removeTodo(state, action:PayloadAction<number>) {
            state.list = state.list.filter(todo => todo.id !== action.payload)
        },
        doneTodo(state, action: PayloadAction<number>) {
            state.list = state.list.map(todo => (todo.id === action.payload)
                ? { ...todo, isDone: !todo.isDone} : todo)
        },
        update(state, action: PayloadAction<Todo[]>) {
            state.list = action.payload;
        }
    }
})

export const { addTodo, removeTodo, doneTodo, update } = TodoSlice.actions;

export const reducer = TodoSlice.reducer;