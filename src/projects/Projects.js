import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={styleContainer.container +' '+ styles.projectsContainerEdit}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>
            
        </div>
    );
};

export default Projects;