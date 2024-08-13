import React, { useState, useContext } from 'react';
import User_context from '../context/usercontext';

function Login() {
    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const { setuser } = useContext(User_context);

    const clickHandler = (e) => {
        e.preventDefault();
        setuser({ username, Password });
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Login</h2>
            <input
                style={{
                    display: 'flex',
                    position: 'relative',
                    margin: '16px',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid white',
                    color: 'white',
                    width: '50%',
                }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder='username'
            />
            <input
                style={{
                    display: 'flex',
                    position: 'relative',
                    margin: '16px',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid white',
                    color: 'white',
                    width: '50%',
                }}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder='Password'
            />
            <button onClick={clickHandler}>Login</button>
        </div>
    );
}

export default Login;