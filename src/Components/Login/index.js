import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginDisplay } from "./LoginDisplay";

export const Login = props => {
    const { dispatch } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const onChangeUserName = (event) => {
        setUsername(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onSubmit = async (event) => {
        let response = await fetch('http://localhost:3008/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        let json = await response.json();
        if (json.token) {
            dispatch({ type: "SET_USER", payload: json });
            history.push("/game/0");
        }
    };

    const signIn = (event) =>{
        history.push("/signin");
    };

    return <LoginDisplay
        onSubmit={onSubmit}
        onChangeUserName={onChangeUserName}
        onChangePassword={onChangePassword}
        username={username}
        signIn={signIn}
        password={password}></LoginDisplay>;
};
