import React from 'react'
import { Navbar, Button } from 'react-bootstrap'
import Login from './button/login.js'
function HeaderBar(props) {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
            {/* <Button outline color="secondary">secondary</Button> */}
            <Login/>
        </Navbar>
    )
}

export default HeaderBar;