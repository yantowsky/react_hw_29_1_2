import React from 'react';
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'

const TodoList = () => {
    const itemsTodoList = useSelector(state => state.itemsTodoList.itemsTodoList);

    return (
        <ul className='todo-list'>
            {itemsTodoList.map((item) => (
                <TodoItem
                    key={item.id}
                    {...item}
                />
            ))}
        </ul>
    );
}

export default TodoList;