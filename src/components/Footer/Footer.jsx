import React from 'react';
import { useSelector } from 'react-redux'

import './Footer.css';

const Footer = () => {
    const yearNow = new Date().getFullYear();
    const itemsTodoList = useSelector(state => state.itemsTodoList.itemsTodoList);

    return (
        <footer className='footer'>
            <p className="total-todos">
                {
                    !itemsTodoList.length ? 'No ' : `Total: ${itemsTodoList.length} `
                }
                {
                    itemsTodoList.length == 0 || itemsTodoList.length > 1 ? 'tasks' : 'task'
                }
            </p>
            <p className='year-todos'>
                {yearNow}
            </p>
        </footer>
    );
}

export default Footer;