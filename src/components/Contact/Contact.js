import React from 'react';
import PropTypes from 'prop-types';
import style from './Contact.module.css';

const Contact = ({name, number, onDeleteContact}) => (  
    <>
        <p className={style.name}>
            {name}: <span>{number}</span>
        </p>
        <button className={style.btn} onClick={onDeleteContact}>
            Delete
        </button>
    </>
);

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;