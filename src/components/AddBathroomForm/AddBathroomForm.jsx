import React from 'react'
import './AddBathroomForm.css'
import { Form, Modal, Button, Container } from 'react-bootstrap'

 /* eslint-disable */

function handleSubmit() {
    <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Your Bathroom Was Submitted For Review!</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary">Close</Button>
        </Modal.Footer>
    </Modal.Dialog>;
}

function AddBathroomForm() {
    return (
        <Container>
        <form>
            <Form.Group controlId="MapLocation">
                <Form.Label>MapLocation</Form.Label>
                <Form.Control type="" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Floor/Level</Form.Label>
                <Form.Control type="input" placeholder="Enter Building Floor Location" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Bathroom Type</Form.Label>
                <Form.Control as="select">
                    <option>Mens</option>
                    <option>Womens</option>
                    <option>Unisex</option>
                    <option>Family</option>
                    <option>Other</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Cleanliness Level</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect3">
                <Form.Label>Overall Rating</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <button type="submit" onClick={handleSubmit()} >Submit</button>
        </form>
        </Container>
    );
}

export default AddBathroomForm;