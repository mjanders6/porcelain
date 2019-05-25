
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoginForm from '../Forms/loginForm.js'
import SignupForm from '../Forms/signUp.js'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    render() {
        return (
            <div>
                <Button outline color="secondary" onClick={this.toggle}>{this.props.buttonLabel}Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        <LoginForm />
                        <br />
                        <Button outline color="success" onClick={this.toggleNested}> Not a member</Button>
                        <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Sign Up</ModalHeader>
                            <ModalBody>
                            <SignupForm />
                            </ModalBody>
                            <ModalFooter>
                                <Button outline color="secondary" onClick={this.toggleNested}>Submit</Button>{' '}
                                <Button color="secondary" onClick={this.toggleAll}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="secondary" onClick={this.toggle}>Login</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}



export default Login