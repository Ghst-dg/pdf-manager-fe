import { createContext } from 'preact';
import AuthBox from './AuthBox/AuthBox';
import './AuthPage.css'


const AuthPage = () => {

    return(
        <div class = "AuthPage">
            <AuthBox/>
        </div>
    )
}

export default AuthPage;