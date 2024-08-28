import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addItemTodoList } from '../../store/itemsTodoListSlice';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import inputTextSchema from '../../schemes/inputTextSchema';
import { FaPlusSquare } from "react-icons/fa";
import './TodoForms.css'


const TodoForms = () => {
    const inputRef = useRef();

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        defaultValues: { task: '' },
        resolver: yupResolver(inputTextSchema)
    });

    const dispatch = useDispatch();
    const addTaskTodoList = () => {
        const inputValue = inputRef.current.value;
        dispatch(addItemTodoList({ inputValue }));
        reset();
    }

    return (
        <div className='todo-forms'>
            <form className='todo-forms__add' onSubmit={handleSubmit(addTaskTodoList)}>
                <Controller
                    name='task'
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            ref={inputRef}
                            placeholder='Add Task...'
                            autoFocus
                            autoComplete="off"
                        />
                    )}
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