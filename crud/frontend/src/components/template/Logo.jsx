import React from 'react'
import "./logo.css"
import logo from "../../assets/images/logo.png"
import {Link} from 'react-router-dom'

const constlogo = props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo"/>
        </Link>
    </aside>


export default constlogo