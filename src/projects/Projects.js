import React from 'react';
import styles from './Projects.module.scss'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import socialImg from './../assets/images/social.jpg'
import todoImg from './../assets/images/to-do-list-apps.jpg'

const social = {
    backgroundImage: `url(${socialImg})`,
};
const todo = {
    backgroundImage: `url(${todoImg})`,
};
// const hw = {
//     backgroundImage: 'url(' + imgUrl + ')',
// };
// const myProj = {
//     backgroundImage: 'url(' + imgUrl + ')',
// };

const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={styles.projectsContainer}>
                <Title text={'Projects'}/>
                <div className={styles.projects}>
                    <Project style={social} title={'Social'} description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}/>
                    <Project style={todo} title={'Todo'} description={'It is a long established fact that a reader will be distracted .'}/>
                    <Project title={'Hw'} description={'It is a long established.'}/>
                    <Project title={'My Project'} description={'It is a long established fact that a reader will be distracted .'}/>
                </div>
            </div>

        </div>
    );
};

export default Projects;