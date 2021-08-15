import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import  {addContact, deleteContact, filterContact } from './actions';

const item = createReducer([], {
    [addContact]: (state, { payload }) => [...state, payload],
    
    [deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
    item,
    filter,
});

