import logo from './components/BK-plant-logo.png';
import React from 'react';
import ReactDOM from 'react-dom';
import './Style/Semantic/semantic.css'
import Main_hr from './components/main'
import './components/style.css'
document.body.style.backgroundColor = '#FFF5EE'

function turn_on_search() {
    var mini_search_bar = document.getElementById("mini_search_bar");
    mini_search_bar.style.display = 'none';

    var wide_search_bar = document.getElementById("wide_search_bar");
    wide_search_bar.style.display = 'inline-block'
}

function turn_off_search() {
    var wide_search_bar = document.getElementById("wide_search_bar");
    wide_search_bar.style.display = 'none';

    var mini_search_bar = document.getElementById("mini_search_bar");
    mini_search_bar.style.display = 'inline-block';
}

function pop_up_login(){
    
}


var item ='item'

const Menubar = (props) => {
    return (
        <div className="ui huge fixed top teal inverted menu">
            <div className='item'>
                <img src={logo}/>
            </div>
            <div className='ui simple dropdown item'>
                Home
                <div className='menu'>
                    <div className='item'>Overview</div>
                    <div className='item'>People and Analytics</div>
                    <div className='item'>Hiring</div>
                    <div className='item'>Onboarding</div>
                </div>
            </div>
            <div className='ui simple dropdown item'>
                Resource
                <div className='menu'>
                    <div className='item'>Blog</div>
                    <div className='item'>Content Library</div>
                    <div className='item'>Webinar Library</div>
                    <div className='item'>Training</div>
                </div>
            </div>
            <div className='ui simple dropdown item'>
                About HR Lotus
                <div className='menu'>
                    <div className='item'>Our Story</div>
                    <div className='item'>Media</div>
                    <div className='item'>Event</div>
                    <div className='item'>Contact</div>
                </div>
            </div>
            <div className='right menu'>
                <div className='item' style={{display: "none"}} id="wide_search_bar">
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" type='text'></input>
                        </div>
                        <a href='#' onClick={turn_off_search}>
                            <i className="search icon"></i>
                        </a>
                        <div className="results"></div>
                    </div>
                </div>
                <a className='item' href='#' id='mini_search_bar' onClick={turn_on_search}><i
                    className='search icon'></i></a>
                <div className='ui simple dropdown item'>
                    <i className='user circle outline icon'></i>
                    <div className=' vertical menu'>
                        <a href='#' className='item' onClick={pop_up_login}>
                            <i className="user circle outline icon"></i>
                            Login
                        </a>
                        <a href='#' className='item'>
                            <i className="question circle outline icon"></i>
                            Help Center
                        </a>
                        <a href='#' className='item'>
                            <i className="address card circle outline icon"></i>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
)

}

function App() {
    return (

        <div className='ui'>
            <Menubar />
            <Main_hr />
        </div>
    );
}


export default App;
