import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { addContactError, addContactRequest, addContactSuccess, deleteContactError, deleteContactRequest, deleteContactSuccess, fetchContactError, fetchContactRequest, fetchContactSuccess } from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactRequest());

    try {
        const { data } = await axios.get('/contacts');

        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error));
    }
}

const addContact = (name, number, id) => dispatch => {
    const contact = {
        name,
        number,
        id: uuidv4(),
    };

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts, addContact, deleteContact };