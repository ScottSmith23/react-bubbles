import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import ColorForm from './ColorForm';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    getColors();
  }, []);

  const getColors = () => {

    axiosWithAuth()
    .get('/api/colors')
    .then(res => {
      console.log(res);
      setColorList(res.data)
    });

}

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColors={getColors} />
      <Bubbles colors={colorList} />
      <ColorForm getColors={getColors}/>
    </>
  );
};

export default BubblePage;
