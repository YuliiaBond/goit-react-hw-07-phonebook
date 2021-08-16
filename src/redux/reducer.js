import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import  { addContactError, addContactRequest, addContactSuccess, deleteContactError, deleteContactRequest, deleteContactSuccess, fetchContactError, fetchContactRequest, fetchContactSuccess, filterContact } from './actions';

const item = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, {payload}) => state.filter(({id}) => id !== payload),
});

const filter = createReducer('', {
    [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactSuccess]: () => true,
    [deleteContactRequest]: () => false,
    [deleteContactError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
    item,
    filter,
    loading,
    error,
});

