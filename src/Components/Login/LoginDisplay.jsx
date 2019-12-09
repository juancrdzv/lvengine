import React from "react";

export const LoginDisplay = props => {
    const { onSubmit, onChangeUserName, onChangePassword, username, password, signIn } = props;

    return <div>
        <div>
            Username:<input type='text' value={username} onChange={onChangeUserName}></input>
        </div>
        <div>
            Password:<input type='text' value={password} onChange={onChangePassword}></input>
        </div>
        <button onClick={onSubmit}>Submit</button>
        <button onClick={signIn}>Signin</button>
    </div>;
};