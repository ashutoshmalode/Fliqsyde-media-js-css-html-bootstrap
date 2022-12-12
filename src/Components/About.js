import React, { useState } from "react";

function About() {
  const [text, setText] = useState("");
  const [inputText, setInputText] = useState("");

  const handleSubmit = () => {
    setInputText(text);
    setText("");
  };

  const handleText = (input) => {
    setText(input);
  };

  return (
    <div className="container">
      <h1 className="mt-5">About Us</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={(e) => handleText(e.target.value)}
          placeholder="Write Yourself..."
          style={{ marginTop: "20px" }}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="button"
          disabled={!text ? true : false}
          className="btn btn-dark"
          onClick={(e) => handleSubmit(e.target.value)}
        >
          Submit
        </button>
      </div>
      <div className="mt-3">
        <h3>About User</h3>
        <p>{inputText}</p>
      </div>
    </div>
  );
}

export default About;
