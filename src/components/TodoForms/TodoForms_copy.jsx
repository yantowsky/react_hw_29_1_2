import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addItemTodoList } from '../../store/itemsTodoListSlice';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import inputTextSchema from '../../schemes/inputTextSchema';
import { FaPlusSquare } from "react-icons/fa";
import './TodoForms.css'


const TodoForms = () => {
    const [inputValue, setInputValue] = useState('');

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        defaultValues: { task: '' },
        resolver: yupResolver(inputTextSchema)
    });

    const dispatch = useDispatch();
    const addTaskTodoList = () => {
        // e.preventDefault();
        dispatch(addItemTodoList({ inputValue }));
        setInputValue('');
        reset();
    }

    return (
        <div className='todo-forms'>
            <form className='todo-forms__add' onSubmit={handleSubmit(addTaskTodoList)}>
                <input
                    {...register('task')}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='Add Task...'
                    autoFocus
                    autoComplete="off"
                />
                {errors.task && <p className='form__error'>{errors.task.message}</p>}
                <button
                    type='submit'
                    title='Add Task'
                >
                    <FaPlusSquare />
                </button>
            </form>
        </div >
    );
}

export default TodoForms;