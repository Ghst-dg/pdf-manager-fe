import { useContext, useState } from "preact/hooks";
import AuthButton from "../../../../../Component/AuthButton/AuthButton";
import AuthPasswordInputBox from "../../../../../Component/AuthPasswordInputBox/AuthPasswordInputBox";
import AuthTextInputBox from "../../../../../Component/AuthTextInputBox/AuthTextInputBox";
import { LoginContext } from "../../AuthBox";
import axios from 'axios';

const AuthBoxSignup = () => {
    const[name, setName] = useState(null);
    const[email, setEmail] = useState(null);
    const[password, setPassword] = useState(null);
    const {setIsLogin} = useContext(LoginContext)
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignup = async() => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_GLOBAL_API}/register`, {
                name,
                email,
                password,
            });
            setIsLogin(true);
            setError(false);
        } 
        catch (error) {
            console.error(error);
            setErrorMessage('Error: ' + error.message);
            setError(true);
        }
    }

    return(
        <>
            <AuthTextInputBox value="Name" captureValue = {setName}/>
            <AuthTextInputBox value="Email" captureValue = {setEmail}/>
            <AuthPasswordInputBox capturePassword = {setPassword}/>
            <AuthButton color = "#7014F2" rad = "32px 24px 16px 8px" value = "Signup" handleAction  = {handleSignup}/>
            {error ? <span class="ErrorMessage">{errorMessage}</span> : <></>}
        </>
    );
}

export default AuthBoxSignup;