import { createSlice } from '@reduxjs/toolkit';

const itemsTodoListSlice = createSlice({
    name: 'itemsTodoList',
    initialState: {
        itemsTodoList: JSON.parse(localStorage.getItem('todo_list')) || [],
    },
    reducers: {
        addItemTodoList(state, action) {
            state.itemsTodoList.push({
                id: Date.now(),
                checked: false,
                text: action.payload.inputValue,
            });
        },
        checkedItemTodoList(state, action) {
            state.itemsTodoList = state.itemsTodoList.map(item => item.id === action.payload.id ? { ...item, checked: !item.checked } : item);

        },
        delItemTodoList(state, action) {
            state.itemsTodoList = state.itemsTodoList.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addItemTodoList, checkedItemTodoList, delItemTodoList } = itemsTodoListSlice.actions;

export default itemsTodoListSlice.reducer;