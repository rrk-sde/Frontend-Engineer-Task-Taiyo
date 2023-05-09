import {
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    ContactActionTypes,
    Contact,
} from './types';

export const addContact = (contact: Contact): ContactActionTypes => {
    return {
        type: ADD_CONTACT,
        payload: contact,
    };
};

export const updateContact = (contact: Contact): ContactActionTypes => {
    return {
        type: UPDATE_CONTACT,
        payload: contact,
    };
};

export const deleteContact = (id: number): ContactActionTypes => {
    return {
        type: DELETE_CONTACT,
        payload: id,
    };
};
