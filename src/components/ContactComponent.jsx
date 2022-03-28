import React, { useState } from "react";
import PropTypes from "prop-types";

function ContactComponent(props) {
  const [expanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="ContactComponent">
      <h3>{props.contact.name}</h3>
      <div className="buttonsContainer">
        <button onClick={expand}>{expanded ? "Hide" : "Show"}</button>
        <button onClick={props.toggleOnline}>{props.contact.connected == false ? "Connect" : "Disconnect"}</button>
        <button onClick={props.deleteContact}>Delete</button>
      </div>

      {/* Only when expanded */}
      {expanded ? (
        <>
          <h4>{props.contact.last_name}</h4>
          <h4>{props.contact.email}</h4>
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
