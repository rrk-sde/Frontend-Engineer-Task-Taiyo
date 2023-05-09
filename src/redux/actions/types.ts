export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

interface AddContactAction {
    type: typeof ADD_CONTACT;
    payload: Contact;
}

interface UpdateContactAction {
    type: typeof UPDATE_CONTACT;
    payload: Contact;
}

interface DeleteContactAction {
    type: typeof DELETE_CONTACT;
    payload: number;
}

export type ContactActionTypes =
    | AddContactAction
    | UpdateContactAction
    | DeleteContactAction;
