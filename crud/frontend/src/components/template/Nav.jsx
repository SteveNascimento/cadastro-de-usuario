import React from 'react'
import './nav.css'
import NavItem from './nav-item'

const constnav = props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem title="Início" link="" icon="home"/>
            <NavItem title="Usuários" link="users" icon="users"/>
        </nav>
    </aside>

export default constnav