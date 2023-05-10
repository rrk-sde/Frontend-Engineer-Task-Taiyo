import initialContactState, { ContactState } from './types';
import {
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    ContactActionTypes,
} from '../actions/types';

const contactReducer = (state = initialContactState, action: ContactActionTypes): ContactState => {
    switch (action.type) {
        case ADD_CONTACT:
            return { contacts: [...state.contacts, action.payload] };
        case UPDATE_CONTACT:
            return {
                contacts: state.contacts.map((contact) =>
                    contact.id === action.payload.id ? action.payload : contact
                ),
            };
        case DELETE_CONTACT:
            return { contacts: state.contacts.filter((contact) => contact.id !== action.payload) };
        default:
            return state;
    }
};

export default contactReducer;