
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import React,{useState, useEffect} from 'react'
let contact_id = 0;
function App() {
  
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    if(contacts.length == 0){
     
      setContacts([...contacts, { id: ++contact_id , ...contact}])
      
    }
    else{
      
      setContacts([...contacts, { id: ++contact_id , ...contact}])
      console.log(contacts)
    }
  }
  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter( (contact) =>{
      return contact.id !== id
    })
    setContacts(newContactList)
  }
  // useEffect(()=>{
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  // }, [contacts] )
  // useEffect(()=>{
  //   const retreivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   setContacts(retreivedContacts)

  // },[contacts])
  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts = {contacts} getContactId={removeContactHandler} /> 
    </div>
  );
}

export default App;
