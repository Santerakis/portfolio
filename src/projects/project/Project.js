import React from 'react';
import styles from './../project/Project.module.css'

const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.projImg}>
                <button className={styles.buttonLook}>Look</button>
            </div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
};

export default Project;