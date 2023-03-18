import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import styles from './Skills.module.css'
import Skill from "./skill/Skill";
//{`${styleContainer.container} ${styles.skillsContainer}`}
//{styles +' '+ styles}
const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.skillsContainer}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'Js'} description={'It is a long established fact that a reader will be distracted by the readable content'}/>
                    <Skill title={'Js'} description={'It is a long established fact that a reader will be distracted by the readable content'}/>
                    <Skill title={'Js'} description={'It is a long established fact that a reader will be distracted by the readable content'}/>
                    <Skill title={'Js'} description={'It is a long established fact that a reader will be distracted by the readable content'}/>
                    <Skill title={'CSS'} description={'It is a long established fact that a reader will be distracted by the readable content of a page'}/>
                    <Skill title={'React'} description={'AAA ffgzsdfgsdfgsdadt tawerytrtydrtytr twert rterat gsdfg sdfgsdgs dfgsdfg hdt drsdrt retwert ter rt dfg It is a long established fact that a reader will be distracted by the readable content of a page when looking'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;