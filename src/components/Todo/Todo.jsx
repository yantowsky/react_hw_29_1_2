import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemTodoList } from '../../store/itemsTodoListSlice';
import TodoForms from '../TodoForms/TodoForms';
import TodoList from '../TodoList/TodoList';
import EmptyTodoList from '../EmptyTodoList/EmptyTodoList';

import './Todo.css';

const Todo = () => {
    const [text, setText] = useState('');
    const itemsTodoList = useSelector(state => state.itemsTodoList.itemsTodoList);

    useEffect(() => {
        localStorage.setItem('todo_list', JSON.stringify(itemsTodoList));
    }, [itemsTodoList]);

    if (text.toLowerCase() === 'error') throw new Error(`You search ${text}`);

    const dispatch = useDispatch();
    const addTaskTodoList = (e) => {
        e.preventDefault();
        if (text.trim()) dispatch(addItemTodoList({ text }));
        setText('');
    }

    return (
        <main className='todo'>
            <TodoForms
                text={text}
                handleInput={setText}
                addTaskTodoList={addTaskTodoList}
            />
            {itemsTodoList.length ? <TodoList /> : <EmptyTodoList />}
        </main>
    );
}

export default Todo;