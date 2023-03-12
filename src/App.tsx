import React from 'react';
import './App.css';
import {Header} from "./header/Header";
// import Header from "./header/Header"; //export default
import Main from "./main/Main";
import Skills from "./skills/Skills";  //export

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
