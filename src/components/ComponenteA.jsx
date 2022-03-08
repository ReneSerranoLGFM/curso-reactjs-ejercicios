import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
import ComponenteB from "./ComponenteB";

function ComponenteA() {
  const contact1 = new Contact("Rene", "Serrano", "reneserrano89@gmail.com", true);
  const contact2 = new Contact("Carlos", "Perez", "carlosperez@gmail.com", false);

  return (
    <div>
      <ComponenteB contact={contact1}></ComponenteB>
      <ComponenteB contact={contact2}></ComponenteB>
    </div>
  );
}

ComponenteA.propTypes = {};

export default ComponenteA;
