
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import React,{useState} from 'react'

function App() {
  const [contacts, setContact] = useState([])
  
  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts = {contacts} /> 
    </div>
  );
}

export default App;
