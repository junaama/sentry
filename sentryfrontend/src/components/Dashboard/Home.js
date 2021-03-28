import React, { useEffect, useState } from "react";
import Device from "../Device/Device";
import {data} from '../../dummyData';

const Home = () => {
  //**Set mode */
  const [mode, setMode] = useState("");

  const handleChange = (e) => {
    setMode(e.target.value)
    data.system.mode = e.target.value
  };

  useEffect(()=> {
    data.system.mode = mode
  },[mode])

  return (
    <div>
      <h1>Home</h1>
      <Device />
      <p>Mode is {data.system.mode}</p>
      <input type="radio" id="armed" name="mode" value="Armed" onChange={handleChange}/>
      <label htmlFor="armed">Armed</label>
      <br />
      <input type="radio" id="away" name="mode" value="Away" onChange={handleChange}/>
      <label htmlFor="away">Away</label>
      <br />
      <input type="radio" id="off" name="mode" value="Off" onChange={handleChange}/>
      <label htmlFor="off">Off</label>
      <br />
    </div>
  );
};

export default Home;
