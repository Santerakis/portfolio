import React from 'react';
import styles from './Project.module.scss'


const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.projImg} style={props.style}>
                <a className={styles.button} href={'##'}>Look</a>
            </div>
            <div className={styles.projInfo}>
                <h3 className={styles.projTitle}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;