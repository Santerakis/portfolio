import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import styles from './Skills.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
//{`${styleContainer.container} ${styles.skillsContainer}`}
//{styles +' '+ styles}
const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.skillsContainer}>
               <Title text={'Skills'}/>

                <div className={styles.skills}>
                    <Skill title={'Js'} description={'It is a long established fact that a reader will be distracted by the readable content'}/>
                    <Skill title={'Js'} description={'It is a long established fact that a reader will be distracted by the readable content'}/>
                    <Skill title={'Js'} description={'It is a long established fact that a reader will be distracted by the readable content'}/>
                    <Skill title={'Js'} description={'It is a long established fact that a reader will be distracted by the readable content'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;