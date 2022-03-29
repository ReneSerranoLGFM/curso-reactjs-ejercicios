import React, { useState } from "react";
import PropTypes from "prop-types";
import { BsPencil, BsTrash } from "react-icons/bs";

function ContactComponent(props) {
  const [expanded, setExpanded] = useState(false);
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(props.contact.name);
  const [lastName, setLastName] = useState(props.contact.last_name);
  const [email, setEmail] = useState(props.contact.email);

  const expand = () => {
    setExpanded(!expanded);
  };

  const edit = () => {
    setExpanded(true);
    setEditable(!editable);
  };

  const updateContact = () => {
    setEditable(false);
    props.updateContact(name, lastName, email);
  };

  var nameElement;
  var lastNameElement;
  var emailElement;
  var buttonElement;

  if (editable) {
    nameElement = <input placeholder={name} name="name" value={name} onChange={(e) => setName(e.target.value)}></input>;
    lastNameElement = (
      <input
        placeholder={lastName}
        name="last_name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      ></input>
    );
    emailElement = (
      <input
        className="emailInput"
        placeholder={email}
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
    );
    buttonElement = <button onClick={updateContact}>Save</button>;
  } else {
    nameElement = <h3>{props.contact.name}</h3>;
    lastNameElement = <h4>{props.contact.last_name}</h4>;
    emailElement = <h4>{props.contact.email}</h4>;
    buttonElement = <></>;
  }

  return (
    <div className="ContactComponent">
      {nameElement}
      <div className="buttonsContainer">
        <button onClick={expand}>{expanded ? "Hide" : "Show"}</button>
        <button onClick={props.toggleOnline}>{props.contact.connected == false ? "Connect" : "Disconnect"}</button>
        <button onClick={edit}>
          <BsPencil />
        </button>
        <button onClick={props.deleteContact}>
          <BsTrash />
        </button>
      </div>

      {/* Only when expanded */}
      {expanded ? (
        <>
          {lastNameElement}
          {emailElement}
          {buttonElement}
          {props.contact.connected ? <h4 className="green">online</h4> : <h4 className="red">offline</h4>}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

ContactComponent.propTypes = {};

export default ContactComponent;
