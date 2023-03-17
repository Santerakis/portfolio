import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <h3>Sergey Antonov</h3>
                <div className={styles.icons}>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>
                <p>2023 All rights reserved</p>
            </div>


        </div>
    );
};

export default Footer;