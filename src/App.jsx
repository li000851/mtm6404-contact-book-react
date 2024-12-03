import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactList from './components/ContactList';
import NewContactForm from './components/NewContactForm';
import EditContactForm from './components/EditContactForm';
import ContactDetails from './components/ContactDetails';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/new" element={<NewContactForm />} />
        <Route path="/edit/:id" element={<EditContactForm />} />
        <Route path="/details/:id" element={<ContactDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
