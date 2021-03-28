import React from "react";
import {dummyData} from '../../dummyData'
import styles from './devices.module.css'
//**Render Door or Camera route */
const Devices = (props) => {
  const id = props.match.params.id;

  return (
    <div className={styles.div}>
      <div> <p>Id: {id}</p></div>
      <div><p>Status: {dummyData[id].status ? "On" : "Off"}</p></div>
      <div> <p>Alarm: {dummyData[id].alarmOn ? "On" : "Off"}</p></div>
      <div><p>Security: {dummyData[id].isHacked ? "Secure" : "Hacked"}</p></div>
      <div> <p>Timestamp: {(dummyData[id].timestamp)}</p></div>
     
      
     
    </div>
  )
};

export default Devices;
