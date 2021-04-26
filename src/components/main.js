import  React from 'react'
import ReactDOM from 'react-dom';
import './Semantic/semantic.min.css'
import './style.css'

const Main_hr = (props) => {
    return (<div className='ui grid font_link  '>
                <div className='row'>
                    <div className="ten wide column font_link">
                        <h1> HR software with heart</h1>
                        <h3 className='font_link'> Lotus HR is the complete HR software to help you grow your most important asset—your people.
                            Save time across all your processes, from recruiting to offboarding, from time tracking
                            to payroll, and from performance to culture.</h3>
                        <div className="ui right labeled left icon input">
                            <i className="email icon"></i>
                            <input type="text" placeholder="Send your email"></input>
                                <a className="ui tag label">
                                    Contact With Us
                                </a>
                        </div>
                    </div>
                    <div className="six wide column">
                    </div>
                </div>
            </div>);
}

export default Main_hr;




