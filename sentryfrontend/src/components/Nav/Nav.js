import React from 'react';
import  {NavLink} from 'react-router-dom';
import styles from './nav.module.css'
const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.li}>
                    <NavLink to="/" className={styles.a}>Home</NavLink>
                </li>
                
            </ul>
            <span className={styles.span}></span>
        </nav>
    )
}

export default Nav