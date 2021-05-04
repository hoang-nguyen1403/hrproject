import React from 'react'
import ReactDOM from 'react-dom';

import './Semantic/semantic.min.css'
import './style.css'
import {Button, Modal} from 'semantic-ui-react'

import logo_login from './avatar.jpg'

const Logined_Main = (props) => {
    return (
        <div className='ui grid'>
            <div className='row'>
                <div className='ui fluid vertical menu'>
                    <div className="ui card item">
                        <h4 className="ui horizontal inverted divider">
                        </h4>
                        <div className="image">
                            <img src={logo_login}/>
                        </div>
                        <div className="content">
                            <a className="header">Hoang Nguyen</a>
                            <div className="meta">
                                <span className="date">Joined in 2019</span>
                            </div>
                            <div className="description">
                                Hoang Nguyen is an unior application engineering and living in HCM.
                            </div>
                            <div className="ui section divider"></div>
                            <div className="description">
                                <i className='phone square icon'> </i> <span className="date">032666096</span>
                            </div>
                            <div className="description">
                                <i className='address card icon'> </i>
                                <a><span className="date">hoang.nguyen@hcmut.edu.vn</span></a>
                            </div>
                            <div className="ui section divider"></div>
                            <div className='inverted header'>Hide date</div>
                            <div className='description'>Aug 1, 2019</div>
                            <div className='description'>1y, 9m, 4d</div>
                            <div className="ui section divider"></div>
                            <div className="description">
                                <i className='gavel card icon'> </i>
                                <span className="date">Full time</span>
                            </div>
                            <div className="description">
                                <i className='steam symbol icon'> </i>
                                <span className="date">Production Team</span>
                            </div>
                            <div className="description">
                                <i className='sitemap icon'> </i>
                                <span className="date">Production/ Service Delivery</span>
                            </div>
                            <div className="description">
                                <i className='location arrow icon'> </i>
                                <span className="date">Viet Nam</span>
                            </div>
                            <div className="ui section divider"></div>
                            <div className="description">
                                <i className='beer icon'> </i>
                                <span className="date">Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )

}
export default Logined_Main