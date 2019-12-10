import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SigninDisplay } from "./SiginDisplay";

export const Signin = props => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const onChangeName = (event) => {
        let val = event.target.value;
        setName(val);
    };

    const onChangeLastName = (event) => {
        let val = event.target.value;
        setLastName(val);
    };

    const onChangeEmail = (event) => {
        let val = event.target.value;
        setEmail(val);
    };

    const onChangeUserName = (event) => {
        let val = event.target.value;
        setUsername(val);
    };

    const onChangePassword = (event) => {
        let val = event.target.value;
        setPassword(val);
    };

    const onChangeRepeatPassword = (event) => {
        let val = event.target.value;
        setRepeatPassword(val);
    }

    const click = async (event) => {
        if ((password !== repeatPassword) || password === '') {
            alert('Password and repeat are diferents');
            return;
        }

        let response = await fetch('http://localhost:3008/signin', {
            method: 'POST',
            body: JSON.stringify({ name, lastName, email, username, password }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

    };

    return <SigninDisplay
        onChangeName={onChangeName}
        onChangeLastName={onChangeLastName}
        onChangeEmail={onChangeEmail}
        name={name}
        lastName={lastName}
        email={email}
        click={click}
        username={username}
        password={password}
        repeatPassword={repeatPassword}
        onChangePassword={onChangePassword}
        onChangeUserName={onChangeUserName}
        onChangeRepeatPassword={onChangeRepeatPassword}>
    </SigninDisplay>;
}