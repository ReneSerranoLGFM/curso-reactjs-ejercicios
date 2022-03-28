import React, { useState } from "react";
import PropTypes from "prop-types";

function ContactCreateForm(props) {
  const [expanded, setExpanded] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const expand = () => {
    setExpanded(!expanded);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const connected = false;
    props.addContact(name, lastName, email, connected);
  };

  return (
    <form className="ContactCreateForm" onSubmit={onSubmit}>
      <h3 onClick={expand}>Add new contact</h3>
      {expanded ? (
        <>
          <div className="formGrid">
            <label htmlFor="name">Name: </label>
            <input placeholder="First Name" name="name" onChange={(e) => setName(e.target.value)}></input>

            <label htmlFor="last_name">Last Name: </label>
            <input placeholder="Last Name" name="last_name" onChange={(e) => setLastName(e.target.value)}></input>

            <label htmlFor="email">Email: </label>
            <input placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="flexContainer">
            <button type="submit">Add</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </form>
  );
}

ContactCreateForm.propTypes = {};

export default ContactCreateForm;
