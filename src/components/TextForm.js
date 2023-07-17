import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");

  };

  const handleClearClick = () => {
    let newText = ('');
    setText(newText);
    props.showAlert("Text is cleared","success");

  };

  const handleReverseClick = () => {
    let newText = text.split('').reverse().join('');
    //console.log(newText);
    setText(newText);
    props.showAlert("Text is reversed","success");

  };

  

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            className="form-control"
            style={{backgroundColor: props.mode==='dark'?'#042743':'white',
          color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleReverseClick}>
          Reverse Text
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split (" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Write something in the Text Box to Preview'}</p>
      </div>
    </>
  );
}
