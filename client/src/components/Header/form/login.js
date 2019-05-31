
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import LoginForm from '../Forms/loginForm.js'
// import SignupForm from '../Forms/signUp.js'
import { Form, FormGroup, Label, Input } from 'reactstrap';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import User from '../../../utils/user'
import HeaderBar from '../header'
//parent component
//keeps track of state, defines functionality to be passed into child component
//handle state change function
//click events on button,, function. handlesubmit handle login. 
// let loggedIn = false;
// let user = 'user';

class Login extends Component {
    constructor(props) {
        super(props);
        //initializing components
        this.state = {
            userName: '',
            userEmail: '',
            userPassword: '',
            isAdmin: false,
            showLoginModal: false,
            loggedIn: 'Log In'
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.toggleShowModal = this.toggleShowModal.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    componentDidMount(){
     this.setState({modal: true})
    }

    // LOGIN FUNCTIONS
    handleLogin = event => {
        event.preventDefault()
        // console.log('login button clicked')
        let loginObj = {
            email: this.state.userEmail,
            password: this.state.userPassword
        }
        console.log(loginObj)
        //make axios call to api-- 
        User.findOne(loginObj)
        //create function to check if theyre in database, if yes, give access to add comments
        //if no, invalid information, try again. 
        //jwt for user- local storage
    }

    // give value to input thru state change.
    handleLoginInput = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    // SIGN UP OPTIONS

    handleSignInput = ({ target: { name, value } }) => {
        // console.log(name)
        this.setState({ [name]: value })
    }

    handleSignUp = e => {
        e.preventDefault()
        // let signUpObj = {
        //     userName: this.state.name,
        //     userEmail: this.state.email,
        //     userPassword: this.state.password,
        // }
        // this.setState({ user: signUpObj })
        // console.log(signUpObj)

        let signUpObj = {
            name: this.state.userName,
            email: this.state.userEmail,
            password: this.state.userPassword
        }
        console.log(signUpObj)

        //once the user is successfully signed up call a function that is from the Home component to update the status of isLoggedIn
        //ex this.props.updateLoginStatus()
    }




    // toggle() {
    //     this.setState(prevState => ({
    //         modal: !prevState.modal
    //     }));
    // }

    //this function toggles whether the modal is shown or not
    toggleShowModal() {
        this.setState({
            modal: !this.state.modal
        });
    }
    //this function updates the state for whether to show the login modal or not
    toggleForm() {
        this.setState({
            showLoginModal: !this.state.showLoginModal
        })
    }
    //initial log in button handler
    handleLoginClick() {
        this.toggleForm()
        this.toggleShowModal()
    }

    //this function toggles which form to show based on state
    showTheModal = () => {
        if (this.state.modal) {
            if (this.state.showLoginModal == true) {
                //Login Form
                return (
                    <div>
                        <Form>
                            {/* name */}
                            <FormGroup>
                                <Label htmlFor='userEmail'>Email</Label>
                                <Input type="email" name="userEmail" id="useremail" className="loginInput" placeholder="@" onChange={this.handleLoginInput} />
                            </FormGroup>
                            {/* password */}
                            <FormGroup>
                                <Label htmlFor="userPassword">Password</Label>
                                <Input type="password" name="userPassword" id="userPassword" className="loginInput" placeholder="Its Encrypted, No Worries" onChange={this.handleLoginInput} />
                            </FormGroup>
                        </Form>
                        <br />
                        <small>Not a member?</small>
                        <br />
                        {/* SIGN UP BUTTON b4 the login bc modal*/}
                        <Button outline color="success" onClick={this.toggleForm}>Sign Up</Button>
                    </div>
                )
            } else {
                //show sign up form
                return (
                    <Form>
                        <FormGroup>
                            <Label htmlFor='userName'>Name</Label>
                            <Input type="text" name="userName" id="userName" onChange={this.handleSignInput} placeholder="Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="userEmail">Email</Label>
                            <Input type="email" name="userEmail" id="userEmail" onChange={this.handleSignInput} placeholder="@" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="userPassword">Password</Label>
                            <Input type="password" name="userPassword" id="userPassword" onChange={this.handleSignInput} placeholder="Its Encrypted, No Worries" />
                        </FormGroup>
                    </Form>
                )
            }
        }

    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggleShowModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleShowModal}>{this.state.showLoginModal ? "Log In" : "Sign Up"}</ModalHeader>
                    <ModalBody>
                        {this.showTheModal()}
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="secondary" onClick={this.state.showLoginModal ? this.handleLogin : this.handleSignUp}>{this.state.showLoginModal ? "Log In" : "Submit"}</Button>{' '}
                        <Button color="secondary" onClick={this.toggleShowModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}


export default Login