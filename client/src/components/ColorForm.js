import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
const ColorForm = props => {
    const [color, setColor] = useState({
        id: "",
        color: "",
        code: {
            hex: ""
        },
      });


  const handlePostData = e => {
    e.preventDefault();
    if(color.code.hex != ""){
    axiosWithAuth()
    .post('/api/colors', color)
    .then(res => {
      console.log(res.data,"addcolor");
      props.getColors();

    });
    setColor({
        color: "",
        code: {
            hex: ""
        },
      });
    } else {
    setColor({
        color: "",
        code: {
            hex: ""
        },
      });
  };
  }
  const handleChanges = e => {
      if(e.target.name !== 'code'){
    setColor({ ...color, [e.target.name]: e.target.value });
      } else {
        setColor({ ...color, [e.target.name]: {
            hex: e.target.value } });
      }
    console.log(color);
  };

  return (
    <>
    <form className="inputForm" onSubmit={handlePostData}>
    <h4>Add Color</h4>
    <span>
      <label htmlFor="name">Name:</label>
      <input
        id="color"
        type="text"
        name="color"
        onChange={handleChanges}
        value={color.color}
      /></span>
      <span>
      <label htmlFor="code">hex:</label>
      <input
        id="code"
        name="code"
        onChange={handleChanges}
        value={color.code.hex}
      />
      </span>
      <button className="buttonGet" type="submit">Add Color</button>
    </form>
    </>
  );
};


export default ColorForm
