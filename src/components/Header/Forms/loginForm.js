import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LoginForm extends Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for='userName'>Name</Label>
                    <Input type="email" name="email" id="userName" placeholder="User Name" />
                </FormGroup>
                {/* <FormGroup>
                    <Label for="userEmail">Email</Label>
                    <Input type="email" name="email" id="userEmail" placeholder="@" />
                </FormGroup> */}
                <FormGroup>
                    <Label for="userPassword">Password</Label>
                    <Input type="password" name="password" id="userPassword" placeholder="Its Encrypted, No Worries" />
                </FormGroup>
            </Form>
 
        );
    }


}
//export default loginForm