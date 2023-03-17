import React from 'react';
import styles from './Remote.module.css'

const Remote = () => {
    return (
        <div className={styles.remoteBlock}>
            <div className={styles.remoteContainer}>
                <h3 className={styles.title}>Looking into remote work options</h3>
                <button>Hire me</button>
            </div>
            
        </div>
    );
};

export default Remote;