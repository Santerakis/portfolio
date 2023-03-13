import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import styles from './Skills.module.css'
import Skill from "./skill/Skill";


const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styles.skillsContainer} ${styleContainer.container}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'Js'} description={'It is a long established fact that a reader will be distracted by the readable content'}/>
                    <Skill title={'CSS'} description={'It is a long established fact that a reader will be distracted by the readable content of a page'}/>
                    <Skill title={'React'} description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;