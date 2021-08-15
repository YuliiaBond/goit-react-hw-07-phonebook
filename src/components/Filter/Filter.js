import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/actions';
import style from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();

    const onChange = event => dispatch(filterContact(event.target.value));

    return (
        <label className={style.label}>
            Find contacts by name
            <input className={style.input} type="text" onChange={onChange} />
        </label>

    )
    
};

export default Filter;