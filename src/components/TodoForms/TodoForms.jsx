import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import inputTaskSchema from '../../schemes/inputTaskSchema';
import { FaPlusSquare } from "react-icons/fa";
import './TodoForms.css'


const TodoForms = ({ text, handleInput, addTaskTodoList }) => {


    // const { control, handleSubmit, formState: { errors }, reset } = useForm({
    //     mode: 'onChange',
    //     defaultValues: { text: '' },
    //     resolver: yupResolver(inputTaskSchema)
    // });

    return (
        <div className='todo-forms'>
            {/* <form className='todo-forms__add' onSubmit={handleSubmit(addTaskTodoList)}>  */}
            <form className='todo-forms__add' onSubmit={addTaskTodoList}> 
                {/* <Controller
                    name={text}
                    control={control}
                    render={({ field }) => ( */}
                <input
                    // {...field}
                    type="text"
                    value={text}
                    onChange={(e) => handleInput(e.target.value)}
                    placeholder='Add Task...'
                    aria-label='addtask'
                    autoFocus
                    autoComplete="off"
                />
                {/* )}
                />
                {errors.text && <p className='form__error'>{errors.text.message}</p>} */}
                <button
                    type='submit'
                    title='Addd Task'
                >
                    <FaPlusSquare />
                </button>
            </form>
        </div >
    );
}

export default TodoForms;