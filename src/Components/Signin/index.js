import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SigninDisplay } from "./SiginDisplay";

export const Signin = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

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
            body: JSON.stringify({ username, password }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

    };

    return <SigninDisplay
        click={click}
        username={username}
        password={password}
        repeatPassword={repeatPassword}
        onChangePassword={onChangePassword}
        onChangeUserName={onChangeUserName}
        onChangeRepeatPassword={onChangeRepeatPassword}>
    </SigninDisplay>;
}