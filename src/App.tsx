import React from 'react';
import './App.css';
import {Header} from "./header/Header";
// import Header from "./header/Header"; //export default
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Remote from "./remote/Remote";  //export

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Remote/>
        </div>
    );
}

export default App;
