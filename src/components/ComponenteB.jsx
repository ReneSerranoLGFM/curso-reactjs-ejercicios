import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";

function ComponenteB({ contact }) {
  return (
    <div className="Contact">
      <h3>
        {contact.name} {contact.last_name}
      </h3>
      <h3>{contact.email}</h3>
      {contact.connected ? (
        <h3 className="connected">Contacto En Línea</h3>
      ) : (
        <h3 className="disconnected">Contacto No Disponible</h3>
      )}
    </div>
  );
}

ComponenteB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponenteB;
