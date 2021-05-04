import logo from './components/BK-plant-logo.png';
import React from 'react';
import ReactDOM from 'react-dom';
import './Style/Semantic/semantic.css'
import Main_hr from './components/main'
import Menubar from "./components/Menubar";
import './components/style.css'
import Login from'./components/login'
import {render} from "@testing-library/react";
import { Button, Icon, Modal } from 'semantic-ui-react'
document.body.style.backgroundColor = '#FFF5EE'

function App() {
    return (

        <div className='ui'>
            <Menubar />
            <Main_hr />
        </div>
    );
}


export default App;
