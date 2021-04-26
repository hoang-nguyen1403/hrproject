import  React from 'react'
import ReactDOM from 'react-dom';
import './Semantic/semantic.min.css'
import './style.css'
import logobk from './logobackhoa.png'
const Main_hr = (props) => {
    return (<div className='ui grid container'>
                <div className='row view'>
                    <div className="ten wide column">
                        <h1 className='font1'> HR Soft Ware with Heart</h1>
                        <h3 className='font_link'> Lotus HR is the complete HR software to help you grow your most important asset—your people.
                            Save time across all your processes, from recruiting to offboarding, from time tracking
                            to payroll, and from performance to culture.
                            <br/>
                            See all the ways BambooHR sets you free to focus on your people.
                        </h3>
                        <div className="ui right labeled left icon input font_button">
                            <i className="email icon"></i>
                            <input type="text" placeholder="Send your email"></input>
                            <a className="ui tag label">
                                Contact With Us
                            </a>
                        </div>
                    </div>
                    <div className="six wide column main_show ">
                    </div>
                </div>
                <div className='row'>
                    <div className="column">
                        <h1 className='large'> All-In-One HR Software</h1>
                    </div>

                </div>
            </div>);
}

export default Main_hr;




