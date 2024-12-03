import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import db from '../utils/db';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      const snapshot = await getDocs(collection(db, 'contacts'));
      const data = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .sort((a, b) => a.lastName.localeCompare(b.lastName));
      setContacts(data);
    };
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="contacts-container">
      <h1>Contacts</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul className="contact-list">
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/details/${contact.id}`} className="contact-name">
              {contact.firstName} {contact.lastName}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/new">
        <button className="add-contact-button">+</button>
      </Link>
    </div>
  );
};

export default ContactList;
