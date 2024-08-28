import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemTodoList } from '../../store/itemsTodoListSlice';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import inputTextSchema from '../../schemes/inputTextSchema';
import { FaPlusSquare } from "react-icons/fa";
import './TodoForms.css'


const TodoForms = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        resolver: yupResolver(inputTextSchema)
    });

    const dispatch = useDispatch();
    const addTaskTodoList = ({ inputValue }) => {
        dispatch(addItemTodoList({ inputValue }));
        reset();
    }

    return (
        <div className='todo-forms'>
            <form className='todo-forms__add' onSubmit={handleSubmit(addTaskTodoList)}>
                <input
                    {...register('inputValue')}
                    type="text"
                    placeholder='Add Task...'
                    autoFocus
                    autoComplete="off"
                />
                {<p className='form__error'>{errors.inputValue?.message}</p>}
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