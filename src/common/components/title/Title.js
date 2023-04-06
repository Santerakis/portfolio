import React from 'react';
import styles from './Title.module.css'

const Title = (props) => {
    return (
                <div className={styles.title}>
                    <h2 >{props.text}</h2>
                </div>
    );
};

export default Title;