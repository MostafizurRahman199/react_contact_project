import React from 'react'
import styles from './Navigation.module.css';


export default function Navigation() {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className='logo'>
            <img className='logo-image' src="../../public/logo.png" alt="logo" />
        </div>

        <ul className={styles.navigation_item}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}
