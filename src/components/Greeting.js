import React, { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const handleChange = () => {
    setChangedText((prevState) => !prevState);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      <p>It's good to see you!</p>
      <button onClick={handleChange}>Change Text!</button>
      {changedText ? (
        <Output>Text is changed</Output>
      ) : (
        <Output>Text is not changed</Output>
      )}
    </div>
  );
}

export default Greeting;
