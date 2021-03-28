import React from 'react';
import {data} from '../../dummyData'
import {Link} from 'react-router-dom'
import styles from './device.module.css'
const Device = () => {
    const deviceResult = data.devices.map((item, i)=> {
        return (
            <div className={styles.children} key={i}>
                <p><Link to={`/devices/${item.id}`}>{item.name}</Link></p>
            </div>
        )
    })
    return (
        <div>
            <p>Devices</p>
            <div>
                <div className={styles.container}>
                    {deviceResult}
                </div>
            </div>
        </div>
    )
}

export default Device