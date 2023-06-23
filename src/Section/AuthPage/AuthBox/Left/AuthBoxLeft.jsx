import { useContext } from 'preact/hooks';
import './AuthBoxLeft.css'
import AuthBoxLogin from './AuthBoxLogin/AuthBoxLogin';
import AuthBoxSignup from './AuthBoxSignup/AuthBoxSignup';
import { LoginContext } from '../AuthBox';

const AuthBoxLeft = () => {
    const {isLogin} = useContext(LoginContext)

    return(
        <div class = 'AuthBoxLeft'>
            <div class = 'AuthBoxLeftInputContainer'>
                {isLogin ? <AuthBoxLogin/> : <AuthBoxSignup/>} 
            </div>
        </div>
    );
}

export default AuthBoxLeft;