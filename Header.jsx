import React from 'react';
import Navbar from './Navbar/Navbar';

function Header () {
    return (
        <div className="main">
            <Navbar/>
            <div className="name">
                <p className="hello">Hello !</p>

                <h1><span>I'm</span> Bhushan Munjal</h1>

                <p>Web Developer | Video Editor</p>

                <div className="header-btns">
                    <a href="#" className="btn-1">Hire me</a>

                </div>
            </div>
            <div class="arrow"></div>
        </div>
    )
}

export default Header
