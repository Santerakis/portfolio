import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={styles.projectsContainer}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    <Project title={'Casino'} description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}/>
                    <Project title={'Kino'} description={'It is a long established fact that a reader will be distracted .'}/>
                    <Project title={'Kino'} description={'It is a long established fact that a reader will be distracted .'}/>
                    <Project title={'Kino'} description={'It is a long established fact that a reader will be distracted .'}/>
                    <Project title={'Kino'} description={'It is a long established fact that a reader will be distracted .'}/>
                </div>
            </div>
            
        </div>
    );
};

export default Projects;