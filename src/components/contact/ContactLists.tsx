import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../redux/reducers';
// import { deleteContact } from '../../redux/actions/contactActions';
import { Contact } from '../../redux/actions/types';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

interface ContactListProps {
    contacts: Contact[];
    onDelete: (id: number) => void;
    onEdit: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onDelete, onEdit }) => {

    console.log(contacts)
    return (
        <div className=''>
            <div className='overflow-x-scroll'>
                <div className=' w-[900px]'>
                    <div>
                        <ul className='grid grid-cols-4 bg-blue-600 px-2 font-bold text-white'>
                            <li>First Name</li>
                            <li>Last Name</li>
                            <li>Phone Number</li>
                            <li>Action</li>
                        </ul>
                    </div>
                    <div>
                        {contacts.map((contact) => (
                            <ul className='grid grid-cols-4 bg-blue-400 px-2 font-semibold text-gray-800' key={contact.id}>
                                <li>{contact?.firstName}</li>
                                <li>{contact?.lastName}</li>
                                <li>{contact?.phoneNumber}</li>
                                <li className='flex gap-4  divide-x-2'>
                                    <button className='flex items-center gap-2' onClick={() => onEdit(contact)}> <span><AiOutlineEdit /></span> Edit</button>
                                    <button className='flex items-center gap-2 pl-2' onClick={() => onDelete(contact.id)}>

                                        <span><AiOutlineDelete /></span>Delete</button>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactList;