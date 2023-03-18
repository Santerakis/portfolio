import React from 'react';
import styles from './Nav.module.css'

const Nav = () => {
    return (
        <div className={styles.nav}>
            <a className={styles.button} href=''>Main</a>
            <a className={styles.button} href='#'>Skills</a>
            <a className={styles.button} href='##'>Projects</a>
            <a className={styles.button} href='#!'>Contacts</a>
        </div>
    );
};

export default Nav;