import { configureStore } from '@reduxjs/toolkit';
import itemsTodoListReducer from './itemsTodoListSlice';
import counterReducer from './counterSlice';

export default configureStore({
    reducer: {
        itemsTodoList: itemsTodoListReducer,
        counter: counterReducer
    },
});