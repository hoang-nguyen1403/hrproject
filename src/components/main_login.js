import React from 'react'
import ReactDOM from 'react-dom';

import './Semantic/semantic.min.css'
import './style.css'
import {Button, Modal} from 'semantic-ui-react'
import Logined_Menubar from "./logined_menubar";
import Logined_Main from "./logined_main";

const Main_login = (props) =>{
    return (
        <div className='ui'>
            <Logined_Menubar/>
            <div className="ui section divider"></div>
            <Logined_Main/>
        </div>
    )
}

export default Main_login