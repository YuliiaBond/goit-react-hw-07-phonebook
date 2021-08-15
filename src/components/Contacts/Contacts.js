
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import Contact from '../Contact/Contact';
import style from './Contacts.module.css'

const Contacts = () => {
    const dispatch = useDispatch();
    const onDeleteContact = id => dispatch(deleteContact(id));

    const getContactList = state => {
        const { filter, item } = state.contacts;
        const normalizedFilter = filter.toLowerCase();

        return item.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    
    };
    
    const contacts = useSelector(getContactList);

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