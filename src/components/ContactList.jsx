import React, { useState } from "react";
import PropTypes from "prop-types";
import ContactComponent from "./ContactComponent";
import { Contact } from "../models/contact.class";

function ContactList(props) {
  // Define initial example contacts
  const contactExample = new Contact("Rene", "Serrano", "reneserrano@hotmail.com", true);
  const contactExample2 = new Contact("Carlos", "Serrano", "carlosserrano@hotmail.com", false);

  // Set component state to contacts
  const [contacts, setContacts] = useState([contactExample, contactExample2]);

  // Update contacts state function
  const updateContacts = () => {
    var tempContacts = [...contacts];
    setContacts(tempContacts);
  };

  // Toggle online/offline on contact function
  const toggleOnline = (i) => {
    var tempContacts = [...contacts];
    tempContacts[i].connected = !tempContacts[i].connected;
    setContacts(tempContacts);
  };

  // Delete contact function
  const deleteContact = (i) => {
    var tempContacts = [...contacts];
    tempContacts.splice(i, 1);
    setContacts(tempContacts);
  };

  return (
    <div>
      <h1>Contact List:</h1>
      {contacts.map((contact, i) => {
        return (
          <ContactComponent
            key={i}
            contact={contact}
            toggleOnline={() => toggleOnline(i)}
            deleteContact={() => deleteContact(i)}
          />
        );
      })}
    </div>
  );
}

ContactList.propTypes = {};

export default ContactList;
