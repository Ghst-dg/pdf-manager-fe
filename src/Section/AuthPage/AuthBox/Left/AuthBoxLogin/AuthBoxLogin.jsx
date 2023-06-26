import { useState } from "preact/hooks";
import AuthButton from "../../../../../Component/AuthButton/AuthButton";
import AuthPasswordInputBox from "../../../../../Component/AuthPasswordInputBox/AuthPasswordInputBox";
import AuthTextInputBox from "../../../../../Component/AuthTextInputBox/AuthTextInputBox";
import axios from 'axios';
import { route } from "preact-router";
import './AuthBoxLogin.css'

const AuthBoxLogin = () => {
    const[email, setEmail] = useState(null);
    const[password, setPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);

    const handleLogin = async() => {
        try 
        {
            const response = await axios.post(`${import.meta.env.VITE_GLOBAL_API}/login`, {
                email,
                password,
            });

            const { token } = response.data;
            localStorage.setItem('token', token);
            route('/dashboard');
            setError(false);
        }

        catch(e)
        {
            console.error(error);
            setErrorMessage('Error: ' + error.message);
            setError(true);
        }
    }

    return(
        <>
            <AuthTextInputBox value="Email" captureValue = {setEmail}/>
            <AuthPasswordInputBox capturePassword = {setPassword}/>
            <AuthButton color = "#00F59B" rad = "8px 16px 24px 32px" value = "Login" handleAction  = {handleLogin}/>
            {error ? <span class="ErrorMessage">{errorMessage}</span> : <></>}
        </>
    );
}

export default AuthBoxLogin;