import { Contact } from "../actions/types";

export interface ContactState {
    contacts: Contact[];
}

const initialContactState: ContactState = {
    contacts: [{
        "id": 165323,
        "firstName": "Ramesh",
        "lastName": "Kumar",
        "phoneNumber": "09284264230"
    }],
};

export default initialContactState;
