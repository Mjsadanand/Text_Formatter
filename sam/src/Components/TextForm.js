import React, { useState } from "react";

export default function TextForm() {
  var [alert, setAlert] = useState("Enter the text below");
  const handleOnClick = () => {
    // console.log("Clicked uppercase"  + text);
    let newText = "";
    if (text.length > 0) { 
      newText = text.toUpperCase();
      setText(newText);
      alert = "Converted to uppercase";
    }
    else{
      alert="Enter the text to convert";
    }
    setAlert(alert);

  };
  const handleOfClick = () => {
    // console.log("Clicked uppercase"  + text);
    let newText = "";
    if (text.length > 0) {
      newText = text.toLowerCase();
      setText(newText);
      alert = "Converted to Lowercase";
    }
    else{
      alert="Enter the text to convert";
    }
    setAlert(alert);

  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleClear = () => {
    // console.log("On change");
    setText("");
  };
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setText(text);
        if(text.length>0){alert="Text copied..!";}
        else{alert="Enter the text to copy..!"}
        setAlert(alert)
      })
      .catch((err) => {
        setText("Failed to copy");
      });
  };

  let textStyle = {
    width: "90%",
    margin: "60px",
  };
 let alertStyle ={
  marginTop:20,
  
 }
  var [text, setText] = useState("");
  const [btnText, setBtntext] = useState("Dark");
  var [myStyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
    margin: "10px",
  });

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMystyle({
        color: "white",
        backgroundColor: "black",
        textAlign: "center",
        margin: "10px",
      });
      setBtntext("Light");
    } else {
      setMystyle({
        color: "black",
        backgroundColor: "white",
        textAlign: "center",
        margin: "10px",
      });
      setBtntext("Dark");
    }
  };
 

  return (
    <>
      <div className="alert alert-success alert-dismissible fade show" role="alert" style={alertStyle}>
        <strong>{alert}</strong> 
        <button
          type="button"
          class="btn"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <section style={myStyle}>
        <div>
          {" "}
          <br />
          <h2 className="my-4">Enter the text to format</h2>
          <textarea
            className="form-control"
            id="box"
            style={textStyle}
            value={text}
            onChange={handleOnChange}
            rows="10"
            required
          ></textarea>{" "}
          <br />
          <button className="btn btn-info mx-2 my-4" onClick={handleOnClick} value={alert}>
            Convert to Uppercase
          </button>
          <button className="btn btn-info mx-2 my-4" onClick={handleOfClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-info mx-2 my-4" onClick={copyToClipboard}>
            Copy
          </button>
          <button className="btn btn-info mx-2 my-4" onClick={handleClear}>
            Clear
          </button>
          <button className="btn btn-info mx-2 my-4" onClick={toggleStyle}>
            {btnText}
          </button>
        </div>
        <div className="container my-3">
          <h2>Text Summary</h2>
          <p style={{ fontSize: 20 }}>
            Text Length : {text.length} characters <br /> Number of words :{" "}
            {text.split(" ").length}
          </p>
          <p>{text}</p>
        </div>
      </section>
    </>
  );
}
