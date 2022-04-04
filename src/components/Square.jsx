import React from "react";
import PropTypes from "prop-types";

function Square(props) {
  const changeColor = (e) => {
    // Pick random red, green and blue
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // Assign it to the element background color
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  };

  let intervalID;

  const changingColors = (e) => {
    changeColor(e);
    intervalID = setInterval(() => changeColor(e), 200);
  };

  const stopChanging = (e) => {
    clearInterval(intervalID);
  };

  return (
    <div
      className="square"
      onMouseEnter={changingColors}
      onMouseLeave={stopChanging}
      onDoubleClick={stopChanging}
    ></div>
  );
}

Square.propTypes = {};

export default Square;
