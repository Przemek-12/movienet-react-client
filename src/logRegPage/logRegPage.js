import './logRegPage.css'
import '../basicStyles.css'
import AuthExecutor from '../executors/AuthExecutor.js';
import { useState } from 'react';
import { Redirect } from 'react-router';

export const LoginPage = () => {

    const [inputs, setState] = useState({
        login: null,
        password: null
    });

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        //https://stackoverflow.com/questions/31048953/what-do-these-three-dots-in-react-do
        setState(state => ({ ...state, [inputName]: inputValue }));
    }

    const login = async (event) => {
        event.preventDefault();

        const loginAndPasswordBase64 = Buffer.from(inputs.login + ':' + inputs.password).toString('base64');
        const loginResponse = await AuthExecutor.login(loginAndPasswordBase64);

        if (loginResponse.status === 200) {
            localStorage.setItem('token', loginResponse.data.token);
        }

    }

    return (
        <div className='main'>
            <div className='formContainer'>
                <form onSubmit={login}>
                    <div className='inputContainer'>
                        <input type='text' name='login' placeholder="qwe" onChange={handleChange} />
                        <div className='placeholder'>Login</div>
                    </div>
                    <div className='inputContainer'>
                        <input type='password' name='password' placeholder="qwe" onChange={handleChange} />
                        <div className='placeholder'>Password</div>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}

export const RegisterPage = () => {
    const [inputs, setState] = useState({
        login: null,
        password: null,
        email: null,
        registered: false
    });

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setState(state => ({ ...state, [inputName]: inputValue }));
    }

    const register = async (event) => {
        event.preventDefault();

        const loginAndPasswordBase64 = Buffer.from(inputs.login + ':' + inputs.password).toString('base64');
        const registerResponse = await AuthExecutor.register(loginAndPasswordBase64, inputs.email);

        if (registerResponse.status === 200) {
            setState(state => ({ ...state, registered: true }));
        }

    }

    if (inputs.registered) {
        return <Redirect to="/login" />;
    }

    return (
        <div className='main'>
            <div className='box'>
                <form onSubmit={register}>
                    <input type='text' name='login' placeholder='login' onChange={handleChange} />
                    <input type='password' name='password' placeholder='password' onChange={handleChange} />
                    <input type='password' name='repeatPassword' placeholder='repeat password' onChange={handleChange} />
                    <input type='text' name='email' placeholder='email' onChange={handleChange} />
                    <button>Register</button>
                </form>
            </div>
        </div>
    );
}
