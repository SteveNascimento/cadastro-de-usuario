import React from 'react'
import './nav-item.css'
import {Link} from 'react-router-dom'

const constNavItem = props =>
    <Link to={`/${props.link}`}>
        <i className={`fa fa-${props.icon}`}></i> {props.title}
    </Link>

export default constNavItem