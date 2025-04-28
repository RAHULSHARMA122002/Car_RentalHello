import React, { useState } from "react";
import './Button.css'
const HoverButton = ({ initialText, hoverText }) => {
  const [text, setText] = useState(initialText);

  return (
    <button
      className="hover-button"
      onMouseEnter={() => setText(hoverText)}
      onMouseLeave={() => setText(initialText)}
    >
      {text}
    </button>
  );
};

export default HoverButton;
