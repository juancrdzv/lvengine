import React from "react";

export const SigninDisplay = props => {
    const { name,
        lastName,
        email, 
        click,
        username,
        password,
        repeatPassword, 
        onChangeName,
        onChangeLastName,
        onChangeEmail,
        onChangePassword, 
        onChangeUserName, 
        onChangeRepeatPassword } = props;

    return <div>
        <div>
            name: <input type='text' value={name} onChange={onChangeName}></input>
        </div>
        <div>
            last name: <input type='text' value={lastName} onChange={onChangeLastName}></input>
        </div>
        <div>
            email: <input type='text' value={email} onChange={onChangeEmail}></input>
        </div>
        <div>
            Username: <input type='text' value={username} onChange={onChangeUserName}></input>
        </div>
        <div>
            Password: <input type='text' value={password} onChange={onChangePassword}></input>
        </div>
        <div>
            Repeat-password: <input type='text' value={repeatPassword} onChange={onChangeRepeatPassword}></input>
        </div>
        <div>
            <button onClick={click}>Send</button>
        </div>
    </div>;
}