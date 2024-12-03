import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import db from '../utils/db';

const ContactDetails = () => {
  const { id } = useParams(); // Get the contact ID from the URL
  const navigate = useNavigate(); // For navigation
  const [contact, setContact] = useState(null);

  // Fetch contact details on component mount
  useEffect(() => {
    const fetchContact = async () => {
      const docRef = doc(db, 'contacts', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContact({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.error('No contact found');
      }
    };
    fetchContact();
  }, [id]);

  // Handle delete operation
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await deleteDoc(doc(db, 'contacts', id)); // Delete the document from Firestore
        alert('Contact deleted successfully!');
        navigate('/'); // Redirect to the contact list after deletion
      } catch (error) {
        console.error('Error deleting contact:', error);
        alert('Failed to delete contact. Please try again.');
      }
    }
  };

  return contact ? (
    <div>
      <Link to="/">← Back to Contacts</Link>
      <h1>{contact.firstName} {contact.lastName}</h1>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone || 'N/A'}</p>
      <p><strong>Address:</strong> {contact.street || 'N/A'}, {contact.city || 'N/A'}, {contact.state || 'N/A'} {contact.zip || ''}</p>
      <Link to={`/edit/${id}`}><button>Edit</button></Link>
      <button onClick={handleDelete} style={{ backgroundColor: '#f44336', color: 'white' }}>Delete</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ContactDetails;
