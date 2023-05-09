import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { deleteContact } from '../../redux/actions/contactActions';
import { Contact } from '../../redux/actions/types';
import ContactList from './ContactLists';
import ContactForm from './ContactForm';

const ContactPage: React.FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contact.contacts);

  const [showForm, setShowForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | undefined>(undefined);

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  const handleAdd = () => {
    setSelectedContact(undefined);
    setShowForm(true);
  };

  const handleEdit = (contact: Contact) => {
    setSelectedContact(contact);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div>
      <h1 className='font-bold text-2xl underline'>Contact List</h1>
      {/* <button className='' onClick={handleAdd}>Add Contact</button> */}
      <button onClick={handleAdd} className="my-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Add Contact
      </button>
      {showForm && <ContactForm contact={selectedContact} onClose={handleClose} />}
      <ContactList contacts={contacts} onDelete={handleDelete} onEdit={handleEdit} />

    </div>
  );
};

export default ContactPage;