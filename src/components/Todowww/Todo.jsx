import React, { useState, useEffect } from 'react';
import {  useSelector } from 'react-redux';
import TodoForms from '../TodoForms/TodoForms_111';
import TodoList from '../TodoList/TodoList';
import EmptyTodoList from '../EmptyTodoList/EmptyTodoList';

import './Todo.css';

const Todo = () => {
    const itemsTodoList = useSelector(state => state.itemsTodoList.itemsTodoList);

    useEffect(() => {
        localStorage.setItem('todo_list', JSON.stringify(itemsTodoList));
    }, [itemsTodoList]);


    return (
        <main className='todo'>
            <TodoForms/>
            {itemsTodoList.length ? <TodoList /> : <EmptyTodoList />}
        </main>
    );
}

export default Todo;