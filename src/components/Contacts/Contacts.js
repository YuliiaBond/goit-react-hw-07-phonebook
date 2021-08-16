import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operation';
import { getVisibleContacts } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import style from './Contacts.module.css'

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);
    const onDeleteContact = id => dispatch(deleteContact(id));

    return (
        <ul className={style.list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={style.item}>
                <Contact
                    name={name}
                    number={number}
                    onDeleteContact={() => onDeleteContact(id)}
                    />
            </li>
        ))}
        
    </ul>
    )
    
};

export default Contacts;