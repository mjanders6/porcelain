import React from 'react'
import { Navbar } from 'react-bootstrap'
import {Button} from 'reactstrap'
import { IoIosExit } from "react-icons/io"
import './header.css'
import logo from '../../assets/Porcelain369.png'


const HeaderBar = (props) => (
    <>
    <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Porcelain</Navbar.Brand>
       {props.loggedIn ? <Button className="ml-auto" outline color="secondary" onClick={_=>{
           props.updateLoginStatus()
           localStorage.removeItem('userId')
           localStorage.removeItem('adminstatus')
           }}><IoIosExit className="headericon"/></Button> : null } 
    </Navbar>
    
    </>
        )

export default HeaderBar;   