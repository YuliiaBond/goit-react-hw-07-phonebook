import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.item;
export const getFilter = state => state.contacts.filter;
export const getError = state => state.contacts.error;
export const getLoading = state => state.contacts.loading;

export const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, value) => {
        const normalizeFilter = value.toLowerCase();
        return contacts.filter(({name}) =>
            name.toLowerCase().includes(normalizeFilter),
        );
    },
);
