import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../../redux/actions/contactActions';
import { Contact } from '../../redux/actions/types';

interface Props {
    contact?: Contact;
    onClose: () => void;
}

const ContactForm: React.FC<Props> = ({ contact, onClose }) => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(contact?.firstName || '');
    const [lastName, setLastName] = useState(contact?.lastName || '');
    const [phoneNumber, setPhoneNumber] = useState(contact?.phoneNumber || '');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (contact) {
            dispatch(updateContact({ ...contact, firstName, lastName, phoneNumber }));
        } else {
            dispatch(
                addContact({
                    id: Math.floor(Math.random() * 1000000),
                    firstName,
                    lastName,
                    phoneNumber,
                })
            );
        }

        onClose();
    };

    return (
        <div className='bg-gray-200 '>
            <h2 className='font-bold bg-red-200 inline-block px-4 py-1 relative top-4 left-48'>{contact ? 'Edit Contact' : 'Add Contact'}</h2>
            <form className='flex px-4 py-8 flex-col gap-2 border-2 border-gray-800' onSubmit={handleSubmit}>
                <div className='gap-4 flex'>
                    <label htmlFor="firstName">First Name:</label>
                    <input className='pl-2'
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className='gap-4 flex'>
                    <label htmlFor="lastName">Last Name:</label>
                    <input className='pl-2'
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='gap-4 flex'>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input className='pl-2'
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className='gap-4 flex pt-4'>

                    <button type="submit" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        {contact ? 'Save Changes' : 'Add Contact'}
                    </button>


                    <button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
