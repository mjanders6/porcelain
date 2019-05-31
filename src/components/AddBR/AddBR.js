import React from 'react'
import {Link} from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import AddBathroomForm from '../AddBathroomForm/AddBathroomForm.jsx'

// Need to create a add icon
function AddBR() {
    return (
        <li> <Link to="../AddBathroomForm/AddBathroomForm.jsx">AddBR</Link> </li>
    )
}

export default AddBR;