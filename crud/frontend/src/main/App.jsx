import React from  'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './app.css'
import {BrowserRouter} from 'react-router-dom' // Posso utilizar o HashRouter tmb :)
import Routes from './routes'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'


const app = props => 
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes/>
            <Footer />
        </div>
    </BrowserRouter>
    

export default app