import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TodoForms from '../components/TodoForms/TodoForms';
import TodoList from '../components/TodoList/TodoList';
import EmptyTodoList from '../components/EmptyTodoList/EmptyTodoList';
import FollowError from '../components/ErrorBoundary/ErrorBoundary';


const Main = () => {
    const itemsTodoList = useSelector(state => state.itemsTodoList.itemsTodoList);

    useEffect(() => {
        localStorage.setItem('todo_list', JSON.stringify(itemsTodoList));
    }, [itemsTodoList]);

    return (
        <FollowError>
            <main className='todo'>
                <TodoForms />
                {itemsTodoList.length ? <TodoList /> : <EmptyTodoList />}
            </main>
        </FollowError>
    );
}

export default Main;