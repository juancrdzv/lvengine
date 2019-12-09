import React from "react";

export const SigninDisplay = props => {
    const { click, username, password, repeatPassword, onChangePassword, onChangeUserName, onChangeRepeatPassword } = props;

    return <div>
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